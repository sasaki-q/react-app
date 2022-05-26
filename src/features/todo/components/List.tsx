import { FunctionComponent } from "react";
import { Fetcher } from "utils/fetcher";
import { MyText } from "features/atoms/Text";
import { Todo } from "features/todo/type";
import { Single } from "features/todo/components/Single";

type Props = {
  fetcher: Fetcher<Todo[], number>
}
  
export const List: FunctionComponent<Props> = ({ fetcher }) => {
  const todos: Todo[] = fetcher.filterState();

  return (
    <ul>
      {
        todos.length
          ? todos.map((e) => (<Single key={e.id} id={e.id} title={e.title} isDone={e.isDone}/>))
          : <MyText title={"not exist your todos"}/>
      }
    </ul>
  );
};