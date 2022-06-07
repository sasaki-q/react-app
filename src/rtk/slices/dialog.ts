import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "rtk/store";

export type DialogInfo = {
    todoId?: number,
    show: boolean,
}

const initialState: DialogInfo = {
    show: false,
}

export const toastSlice = createSlice({
    name: "dialog",
    initialState,
    reducers: {
        setTodoDialog: (state, action: PayloadAction<number | null>) => {
            action.payload == null
              ? state = { show: !state.show }
              : state = { todoId: action.payload, show: !state.show };
        }
    }
})

export const DialogState = (state: RootState) => state.dialog;
export const { setTodoDialog } = toastSlice.actions;
export const dialogReducer = toastSlice.reducer;