import { queryClient } from "providers/app"
import { useMutation } from "react-query"
import { useAppDispatch } from "rtk/hooks"
import { show } from "rtk/slices/toast"
import { http } from "utils/http"
import { Todo } from "features/todo/type"

type CreateDto = {
    uid: number,
    title: string,
}

const create = (dto: CreateDto): Promise<Todo> => http.post("/todos/", dto);

export const useCreate = () => {
  const dispatch = useAppDispatch()

  return useMutation<Todo, Error, CreateDto, Promise<void>>({
    onMutate: async(dto) => await queryClient.cancelQueries("todos"),

    onSuccess: async(data) => {
      await queryClient.invalidateQueries('todos');

      const cache = await queryClient.getQueryData<Todo[]>('todos')

      queryClient.setQueryData(
        "todos",
        [...(cache || []), data]
      )

      dispatch(show({level: "success", message: "created"}))
    },

    onError: (err, dto, ctx) => {
      console.log("DEBUG on Error === ", ctx)
      dispatch(show({level: "error", message: "error"}))
    },

    mutationFn: create,
    retry: false,
    useErrorBoundary: true,
  })
}