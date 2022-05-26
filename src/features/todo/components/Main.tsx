import { useState } from "react"
import { Todo } from "features/todo/type";
import { useTodos } from "features/todo/useTodo";
import { List } from "features/todo/components/List";
import { Fetcher } from "utils/fetcher";
import { MyButton } from "features/atoms/Button";
import { useAuth } from "lib/auth";

export const MainTodo = () => {
  console.log(useAuth().user);

  const [feacherTodos, setFetcherTodos] = useState<Fetcher<Todo[], number> | undefined>();
  const { getUserTodos } = useTodos();
  const handler = () => setFetcherTodos(new Fetcher(getUserTodos, 1));

  return (
    <>
      {
        feacherTodos
        ? <List fetcher={feacherTodos}/>
        : <MyButton disabled={false} title={"get todos"} size={"medium"} onclick={handler}/>
      }
    </>
  )
}


