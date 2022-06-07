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
    onMutate: async(_) => await queryClient.cancelQueries("todos"),

    onSuccess: async(data) => {
      const cache = queryClient.getQueryData<Todo[]>('todos')

      queryClient.setQueryData(
        "todos",
        [...(cache || []), data]
      )

      dispatch(show({level: "success", message: "created"}))

      return cache
    },

    onError: (_, __, ___) => {
      dispatch(show({level: "error", message: "error"}))
    },

    mutationFn: create,
    retry: false,
    useErrorBoundary: true,
  })
}