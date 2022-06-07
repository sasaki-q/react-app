import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { todoReducer } from 'features/todo/slice';
import { toastReducer } from 'rtk/slices/toast';
import { dialogReducer } from 'rtk/slices/dialog';

export const store = configureStore({
  reducer: {
    // common
    toast: toastReducer,
    dialog: dialogReducer,

    // features
    todo: todoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
