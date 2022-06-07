import { Typography } from "@mui/material"
import { FunctionComponent, memo } from "react"

type Props = {
    title: string
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const View: FunctionComponent<Props> = (props) => (
  <Typography
    component="h1"
    variant={props.variant ?? "h4"}
  >
    {props.title}
  </Typography>
);

export const MyText = memo(View)
