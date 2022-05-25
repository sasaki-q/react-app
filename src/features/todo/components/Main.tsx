import { Suspense, useState } from "react"
import { Todo } from "features/todo/type";
import { useTodos } from "features/todo/useTodo";
import { List } from "features/todo/components/List";
import { Fetcher } from "utils/fetcher";
import { Loading } from "utils/views/Loading";
import { MyButton } from "features/atoms/Button";

export const MainTodo = () => {

  const [feacherTodos, setFetcherTodos] = useState<Fetcher<Todo[], number> | undefined>();
  const { getUserTodos } = useTodos();
  const handler = () => setFetcherTodos(new Fetcher(getUserTodos, 1));

  return (
    <Suspense fallback={<Loading />}>
      {
        feacherTodos
        ? <List fetcher={feacherTodos}/>
        : <MyButton disabled={false} title={"get todos"} size={"medium"} onclick={handler}/>
      }
    </Suspense>
  )
}


