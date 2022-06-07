import { useState } from "react"
import { MyButton } from "components/atoms/Button";
import { List } from "features/todo/components/List";
import { CreateTaskForm } from "./Form";

export const MainTodo = () => {
  const [isFetch, setIsFetch] = useState<boolean>(false);

  const handler = () => setIsFetch(!isFetch);

  return (
    <>
      <CreateTaskForm />
      {
        isFetch
        ? <List />
        : <MyButton disabled={false} title={"get todos"} size={"medium"} onclick={handler}/>
      }
    </>
  )
}


