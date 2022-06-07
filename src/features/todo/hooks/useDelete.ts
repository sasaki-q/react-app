import { queryClient } from "providers/app"
import { useMutation } from "react-query"
import { useAppDispatch } from "rtk/hooks"
import { show } from "rtk/slices/toast"
import { http } from "utils/http"
import { Todo } from "../type"

type DeleteDto = {
    todoId: number
}

const deleteFn = (dto: DeleteDto):Promise<boolean> => http.delete(`/todos/${dto.todoId}`)

export const useDelete = () => {
  const dispatch = useAppDispatch()

  return useMutation<boolean, Error, DeleteDto, Todo[]>({
    onMutate: async(dto) => {
      await queryClient.cancelQueries("todos");

      const cache = queryClient.getQueryData<Todo[]>("todos");

      queryClient.setQueryData(
        "todos",
        cache?.filter((elm) => elm.id !== dto.todoId)
      );

      return cache;
    },

    onSuccess: async(_) => {
      await queryClient.invalidateQueries('todos');
  
      dispatch(show({level: "success", message: "deleted"}));
    },

    onError: (err, _, ctx: Todo[] | undefined) => {
        console.log("DEBUG onError === ", err, ctx);
        ctx && queryClient.setQueryData("todos", ctx);
        
        dispatch(show({level: "error", message: "error"}));
    },

    mutationFn: deleteFn,
    retry: false,
    useErrorBoundary: true
  });
}