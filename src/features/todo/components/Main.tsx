import { memo, Suspense, useState } from "react"
import { Button } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import { Todo } from "features/todo/type";
import { useTodos } from "features/todo/useTodo";
import { List } from "features/todo/components/List";
import { Fetcher } from "utils/fetcher";
import { Loading } from "utils/loading/Loading";
import { ErrorFallback } from "utils/error/Error";
import { myErrorHandler } from "utils/error/handler";

const View = () => {
  const [feacherTodos, setFetcherTodos] = useState<Fetcher<Todo[], number> | undefined>();
  const { getTodos, getUserTodos } = useTodos();
  const handler = () => setFetcherTodos(new Fetcher(getUserTodos, 1));
  
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


