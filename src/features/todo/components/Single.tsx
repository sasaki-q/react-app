import { FunctionComponent, memo } from 'react'
import { Box, Stack } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDialog } from 'features/todo/hooks/useDialog';
import { MyButton } from 'components/atoms/Button';
import { MyText } from 'components/atoms/Text';

type Props = {
    id: number,
    title: string,
    isDone: boolean,
}

const View: FunctionComponent<Props> = (props) => {
  const {id, title, isDone} = props;

  const { showDialog } = useDialog();
  const handleOpen = () => showDialog(id);

  return (
    <li>
      <Box sx={{display: "flex", justifyContent: "space-between", mt: 3}}>
        <MyText title={`Title: ${title}, IsDone: ${isDone ? "Yes": "No"}`} variant={"h6"}/>
        <Box sx={{minWidth: 100}}/>
        <MyButton
          title={"Delete"}
          size={"small"}
          icon={<DeleteOutlineIcon />}
          onclick={handleOpen}
        />
      </Box>
    </li>
  )
}

export const Single = memo(View);
