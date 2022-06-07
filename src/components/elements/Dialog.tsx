import React, { FunctionComponent } from 'react'
import { Dialog } from '@mui/material'

type Props = {
    children: React.ReactNode,
    open: boolean,
    handleClose: () => void
}

export const MyDialog: FunctionComponent<Props> = (props) => {
  const { children, open, handleClose } = props;

  return (
    <Dialog open={open} onClose={handleClose}>
        {children}
    </Dialog>
  )
}
