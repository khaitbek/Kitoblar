import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type AuthTypes = {
    token: string
}

const initialState: AuthTypes = {
    token: localStorage.getItem("token")! || ""
}

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        }
    }
});

export const auth = (state: RootState) => state.auth;
export const { setToken } = AuthSlice.actions;
export default AuthSlice.reducer;