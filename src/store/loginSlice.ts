import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Login {
  id: number;
  login: string;
  email: string;
  password: string;
  password1: string;
}

interface LoginState {
  logins: Login[];
}

const initialState: LoginState = {
  logins: [],
};

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addLogin: (state, action: PayloadAction<Login>) => {
      state.logins.push({
        id: state.logins.length,
        login: action.payload.login,
        email: action.payload.email,
        password: action.payload.password,
        password1: action.payload.password1,
      });
    },
  },
});

export default LoginSlice.reducer;
export const { addLogin } = LoginSlice.actions;
