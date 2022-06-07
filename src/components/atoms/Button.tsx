import { Button } from "@mui/material"
import React, { FunctionComponent, memo } from "react"

type Props = {
    title: string,
    disabled?: boolean,
    size: "small" | "medium" | "large"
    icon?: React.ReactNode
    onclick: () => void
}

const View: FunctionComponent<Props> = (props) => {
  const {
      title,
      disabled,
      size,
      icon,
      onclick,
  } = props;

  return (
    <Button
      variant="outlined"
      disabled={disabled}
      size={size}
      startIcon={icon}
      onClick={onclick}
    >
        {title}
    </Button>
  )

}

export const MyButton = memo(View)
