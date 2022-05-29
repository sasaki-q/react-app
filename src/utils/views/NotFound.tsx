import { useNavigate } from 'react-router-dom'
import { Stack } from '@mui/material'
import { MyButton } from 'features/atoms/Button'
import { MyText } from 'features/atoms/Text'

export const NotFound = () => {
  const navigator = useNavigate();

  const handler = () => navigator("/")

  return (
    <Stack spacing={3}>
      <MyText title={"Not Found"} />
      <MyButton 
        title={"back to previous page"}
        size={"large"}
        onclick={handler}
      />
    </Stack>
  )
}
