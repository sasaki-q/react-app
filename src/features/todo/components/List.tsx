import { FunctionComponent, memo } from "react";
import { Fetcher } from "utils/fetcher";
import { Todo } from "features/todo/type";
import { Single } from "features/todo/components/Single";

type Props = {
  fetcher: Fetcher<Todo[]>
}
  
const View: FunctionComponent<Props> = ({ fetcher }) => {
  const todos: Todo[] = fetcher.filterState();
  return (
    <ul>
      {todos.map((e) => (<Single key={e.id} id={e.id} title={e.title} isDone={e.isDone}/>))}
    </ul>
  );
};

export const List = memo(View);