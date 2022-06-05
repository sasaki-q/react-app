import { useQuery } from 'react-query'
import { PromiseValue } from 'type-fest';
import { http } from 'utils/http'
import { Todo } from 'features/todo/type';

const getTodos = (uid: number): Promise<Todo[]> => http.get(`todos/${uid}`);

type QueryFnType = typeof getTodos;

export const useTodos = (uid: number) => {
  return useQuery<PromiseValue<ReturnType<QueryFnType>>>({
    queryKey: 'todos',
    queryFn: () => getTodos(uid),
  });
}