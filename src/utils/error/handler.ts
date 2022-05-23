export const myErrorHandler = (error: Error, info: {componentStack: string}) => {
    console.log(`DEBUG error boundry handler === ${error} === ${info}`)
}