import { useQuery } from 'react-query'
import { PromiseValue } from 'type-fest';
import { http } from 'utils/http'
import { Todo } from '../type';

const getTodos = (uid: number): Promise<Todo[]> => http.get(`todoss/${uid}`);

type QueryFnType = typeof getTodos;

export const useTodos = (uid: number) => {
  return useQuery<PromiseValue<ReturnType<QueryFnType>>>({
    queryKey: ['todos'],
    queryFn: () => getTodos(uid),
    onError: (err) => console.log("DEBUG error message === ", err),
  });
}