import { FunctionComponent } from "react";
import { useAuth } from "lib/auth";
import { Loading } from "components/elements/Loading";
import { MyText } from "components/atoms/Text";
import { Single } from "features/todo/components/Single";
import { useTodos } from "features/todo/hooks/useQuery";
  
export const List: FunctionComponent = () => {
  const { user } = useAuth();
  const todoQuery = useTodos(user?.id ?? 0);

  if(todoQuery.isLoading) return <Loading/>;

  return (
    <ul>
      {
        todoQuery?.data?.length
          ? todoQuery?.data?.map((e) => (<Single key={e.id} id={e.id} title={e.title} isDone={e.isDone}/>))
          : <MyText title={"not exist your todos"}/>
      }
    </ul>
  );
};