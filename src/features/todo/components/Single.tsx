import { FunctionComponent, memo } from 'react'
import { useDialog } from '../hooks/useDialog';

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
    <li onClick={handleOpen}>
        {`Title: ${title}, IsDone: ${isDone ? "Yes": "No"}`}
    </li>
  )
}

export const Single = memo(View);
