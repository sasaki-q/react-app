import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "rtk/store";

export type ToastInfo = {
    level: 'success' | 'error' | undefined,
    message: string,
    show: boolean,
}

const initialState: ToastInfo = {
    level: 'success',
    message: '',
    show: false,
}

export const toastSlice = createSlice({
    name: "toast",
    initialState,
    reducers: {
        show: (state, action: PayloadAction<Omit<ToastInfo, "show">>) => state = {...action.payload, show: !state.show},
    }
})

export const ToastState = (state: RootState) => state.toast;
export const { show } = toastSlice.actions;
export const toastReducer = toastSlice.reducer;