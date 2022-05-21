import { memo, Suspense, useState } from "react"
import { Button } from "@mui/material";
import { Todo } from "features/todo/type";
import { useTodos } from "features/todo/useTodo";
import { Fetcher } from "features/todo/fetcher";
import { List } from "features/todo/components/List";

const View = () => {
  const [feacherTodos, setFetcherTodos] = useState<Fetcher<Todo[]> | undefined>();
  const getTodos = useTodos();
  const handler = () => setFetcherTodos(new Fetcher(getTodos));
  return (
    <Suspense fallback={<div>Loading</div>}>
      {
        feacherTodos
        ? <List fetcher={feacherTodos}/>
        : (
          <Button onClick={handler}>
            get todos
          </Button>
        )
      }
    </Suspense>
  )
}

export const TodoView = memo(View);


