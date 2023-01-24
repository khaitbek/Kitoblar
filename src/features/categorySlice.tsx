import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getCategories } from "../API/api";

type Category = string

const initialState = {
    categories: [] as Category[]
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategories: (state, action: PayloadAction<Category[]>) => {
            state.categories = [
                ...action.payload
            ]
        }
    }
});

export const categories = (state: RootState) => state.category.categories;
export const { setCategories } = categorySlice.actions;
export default categorySlice.reducer;