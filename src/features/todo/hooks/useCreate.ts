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

const create = (dto: CreateDto): Promise<Todo> => http.post("/todoss/", dto);

export const useCreate = () => {
  const dispatch = useAppDispatch()

  return useMutation({
    onSuccess: async(data) => {
      await queryClient.invalidateQueries('todos');

      const cache = await queryClient.getQueryData<Todo[]>('todos')

      queryClient.setQueryData(
        "todos",
        [...(cache || []), data]
      )

      dispatch(show({level: "success", message: "create todo"}))
    },

    onMutate: async(dto: CreateDto) => await queryClient.cancelQueries("todos"),

    onError: (err, variables, ctx) => console.log("DEBUG on Error === ", variables),

    mutationFn: create,
    useErrorBoundary: true,
  })
}