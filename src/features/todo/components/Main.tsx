import { useState } from "react"
import { MyButton } from "features/atoms/Button";
import { List } from "features/todo/components/List";

export const MainTodo = () => {
  const [isFetch, setIsFetch] = useState<boolean>(false);

  const handler = () => setIsFetch(!isFetch);

  return isFetch
    ? <List />
    : <MyButton disabled={false} title={"get todos"} size={"medium"} onclick={handler}/>
}


