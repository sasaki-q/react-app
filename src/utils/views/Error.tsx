import { FallbackProps } from "react-error-boundary";

export const ErrorFallback = ({ error }: FallbackProps) => {
  return (
    <div>
      <p>エラーが発生しました</p>
      <p>{error.message}</p>
    </div>
  )
}

export const myErrorHandler = (error: Error, info: {componentStack: string}) => {
  console.log(`DEBUG error boundry handler === ${error} === ${info}`)
}