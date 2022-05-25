import { Typography } from "@mui/material"
import { FunctionComponent, memo } from "react"

type Props = {
    title: string
}

const View: FunctionComponent<Props> = (props) => (
  <Typography
    component="h1"
    variant="h4"
  >
    {props.title}
  </Typography>
);

export const MyText = memo(View)
