import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type BookTypes = {
    books: []
}

const initialState: BookTypes = {
    books: []
}

const BookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setBooks: (state, action: PayloadAction<[]>) => { 
            state.books = [...action.payload];
        }
    }
});

export const selectBooks = (state: RootState) => state.books.books;
export const { setBooks } = BookSlice.actions;
export default BookSlice.reducer;