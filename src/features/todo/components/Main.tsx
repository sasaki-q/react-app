import { memo, Suspense, useState } from "react"
import { Button } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import { useAppDispatch } from "rtk/hooks";
import { show } from "rtk/slices/toast";
import { Todo } from "features/todo/type";
import { useTodos } from "features/todo/useTodo";
import { List } from "features/todo/components/List";
import { Fetcher } from "utils/fetcher";
import { Loading } from "utils/views/Loading";
import { ErrorFallback, myErrorHandler } from "utils/views/Error";

const View = () => {

  const [feacherTodos, setFetcherTodos] = useState<Fetcher<Todo[], number> | undefined>();
  const { getUserTodos } = useTodos();
  const handler = () => setFetcherTodos(new Fetcher(getUserTodos, 1));

  const dispatch = useAppDispatch();
  const showSuccessToast = () => dispatch(show({level: "success", message: "success toast"}))
  const showErrorToast = () => dispatch(show({level: "error", message: "error toast"}))

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
        
        <Button onClick={showSuccessToast}>
          show success toast
        </Button>
        <Button onClick={showErrorToast}>
          show error toast
        </Button>

      </Suspense>
    </ErrorBoundary>
  )
}

export const TodoView = memo(View);


