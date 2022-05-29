import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "features/todo/type";
import { RootState } from "rtk/store";

const initialState: Todo = {
    id: 0,
    uid: 0,
    title: '',
    isDone: false,
    createdAt: '',
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        set: (state, action: PayloadAction<Todo>) => state = action.payload,
        reset: (state) => state = initialState,
    }
}) 

export const TodoState = (state: RootState) => state.todo;
export const todoReducer = todoSlice.reducer;
export const {} = todoSlice.actions;