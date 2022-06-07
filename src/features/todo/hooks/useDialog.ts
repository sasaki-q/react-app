import { useAppDispatch, useAppSelector } from "rtk/hooks"
import { DialogState, setTodoDialog } from "rtk/slices/dialog"

export const useDialog = () => {
  const dispatch = useAppDispatch()
  const dialogInfo = useAppSelector(DialogState);

  const getDialogInfo = () => dialogInfo; 

  const showDialog = (id: number) => dispatch(setTodoDialog(id));

  const closeDialog = () => dispatch(setTodoDialog(null));

  return {
    getDialogInfo,
    showDialog,
    closeDialog,
  }
}