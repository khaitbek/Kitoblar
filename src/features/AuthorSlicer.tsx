import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type AuthorTypes = {
    authors: []
}

const initialState: AuthorTypes = {
    authors: []
}

const authorSlice = createSlice({
    initialState,
    name: "author",
    reducers: {
        setAuthors: (state, action: PayloadAction<[]>) => {
            state.authors = [...action.payload];
        }
    }
});

export const authors = (state: RootState) => state.author.authors;
export const { setAuthors } = authorSlice.actions;
export default authorSlice.reducer;