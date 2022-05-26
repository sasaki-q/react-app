import { Stack } from "@mui/material";
import { MyButton } from "features/atoms/Button";
import { FallbackProps } from "react-error-boundary";

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <Stack spacing={3}>
      <h6>エラーが発生しました</h6>
      <h6>{error.message}</h6>
      <MyButton 
        title={"もう一度実行する"}
        size={"large"}
        onclick={resetErrorBoundary}
      />
    </Stack>
  )
}

export const myErrorHandler = (error: Error, info: {componentStack: string}) => {
  console.log(`DEBUG error boundry handler === ${error} === ${info}`)
}