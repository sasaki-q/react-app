import { DialogTitle, Stack } from "@mui/material"
import { MyButton } from "components/atoms/Button"
import { MyText } from "components/atoms/Text"
import { FunctionComponent } from "react"
import { useDelete } from "../hooks/useDelete"

type Props = {
  todoId: number,
  close: () => { payload: number | null; type: string; },
}

export const DialogContents: FunctionComponent<Props> = (props) => {
  const { todoId, close } = props;

  const deleteMutation = useDelete();

  const handler = () => {
    deleteMutation.mutateAsync({todoId: todoId});
    close();
  };

  return (
    <>
      <DialogTitle>
        <Stack spacing={4}>
          <MyText title={"このtodoを削除しますか?"} variant={"h6"}/>
          <MyButton 
            title={"はい"}
            size={"medium"}
            onclick={handler}
          />
        </Stack>
      </DialogTitle>
    </>
  )
}
