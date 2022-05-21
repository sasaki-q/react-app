import { FunctionComponent, memo } from 'react'

type Props = {
    id: number,
    title: string,
    isDone: boolean,
}

const View: FunctionComponent<Props> = (props) => {
  const {id, title, isDone} = props;
  return (
    <li>
        {`ID: ${id}, Title: ${title}, IsDone: ${isDone ? "終わってる": "終わってない"}`}
    </li>
  )
}

export const Single = memo(View);
