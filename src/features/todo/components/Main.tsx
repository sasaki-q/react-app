import { FunctionComponent, useState } from "react"
import { MyButton } from "components/atoms/Button";
import { List } from "features/todo/components/List";
import { CreateTaskForm } from "./Form";
import { MyDialog } from "components/elements/Dialog";
import { useDialog } from "features/todo/hooks/useDialog";

export const MainTodo: FunctionComponent = () => {
  
  const [isFetch, setIsFetch] = useState<boolean>(false);
  const handler = () => setIsFetch(!isFetch);

  const { getDialogInfo, closeDialog } = useDialog()
  const handleClose = () => closeDialog();

  return (
    <>
      <CreateTaskForm />
      {
        isFetch
        ? <List />
        : <MyButton disabled={false} title={"get todos"} size={"medium"} onclick={handler}/>
      }
      <MyDialog open={getDialogInfo().show} handleClose={handleClose} children={<></>}/>
    </>
  )
}


