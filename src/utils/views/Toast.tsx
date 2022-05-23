import { Alert, Snackbar } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'rtk/hooks'
import { show, ToastInfo, ToastState } from 'rtk/slices/toast'

export const MyToast = () => {
    
  const dispatch = useAppDispatch();
  const toast: ToastInfo = useAppSelector(ToastState);
  const handleClose = () => dispatch(show({level: undefined, message: ""}));

  return (
    <Snackbar open={toast.show} autoHideDuration={1000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={toast.level} sx={{ width: '100%' }}>
        {toast.message}
      </Alert>
    </Snackbar>
  )
}

