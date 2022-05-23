import { memo, Suspense, useState } from "react"
import { Button } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import { Todo } from "features/todo/type";
import { useTodos } from "features/todo/useTodo";
import { Fetcher } from "utils/fetcher";
import { List } from "features/todo/components/List";
import { ErrorFallback } from "utils/error/Error";
import { myErrorHandler } from "utils/error/handler";
import { Loading } from "utils/loading/Loading";

const View = () => {
  const [feacherTodos, setFetcherTodos] = useState<Fetcher<Todo[]> | undefined>();
  const getTodos = useTodos();
  const handler = () => setFetcherTodos(new Fetcher(getTodos));
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={myErrorHandler}
    >
      <Suspense fallback={<Loading />}>
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
    </ErrorBoundary>
  )
}

export const TodoView = memo(View);


