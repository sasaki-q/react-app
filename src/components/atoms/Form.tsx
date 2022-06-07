import { FunctionComponent, memo } from "react"
import { TextField } from "@mui/material";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Props = {
  id: string
  required: boolean
  label: string
  type: "text" | "email" | "password"
  minWidth: number,
  readonly?: boolean
  registration: Partial<UseFormRegisterReturn>
  error?: FieldError,
}

const View: FunctionComponent<Props> = (props) => {
  const {
    id,
    required,
    label,
    type,
    minWidth,
    readonly,
    registration,
    error,
  } = props;

  return (
    <TextField
      id={id}
      required={required}
      label={label}
      type={type}
      sx={{minWidth: minWidth}}
      InputProps={{
          readOnly: readonly
      }}
      {...registration}
      error={error ? true : false}
      helperText={error ? error.message : undefined}
    />
  )
}

export const MyForm = memo(View);