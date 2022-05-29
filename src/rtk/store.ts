import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { todoReducer } from './slices/todo';
import { toastReducer } from './slices/toast';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    toast: toastReducer,
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
