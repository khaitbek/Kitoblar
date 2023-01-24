import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
    theme: JSON.parse(localStorage.getItem("theme")!) || false
};

const ThemeSlicer = createSlice({
    initialState,
    name: "theme",
    reducers: {
        setTheme: (state, action: PayloadAction<boolean>) => {
            state.theme = action.payload
        }
    }
});

export const { setTheme } = ThemeSlicer.actions;
export const selectTheme = (state: RootState) => state.theme.theme
export default ThemeSlicer.reducer;