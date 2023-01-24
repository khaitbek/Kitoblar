import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
    lang: localStorage.getItem("lang") || "uz"
};

const langSlicer = createSlice({
    initialState,
    name: "lang",
    reducers: {
        setLang: (state, action: PayloadAction<string>) => {
            state.lang = action.payload
        }
    }
});

export const { setLang } = langSlicer.actions;
export const selectLang = (state:RootState) => state.lang.lang;
export default langSlicer.reducer;