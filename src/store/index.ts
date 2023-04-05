import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./loginSlice";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import {} from "react-redux";

export const store = configureStore({
  reducer: {
    login: LoginSlice,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
