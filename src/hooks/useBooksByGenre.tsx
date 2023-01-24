import { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { getAuthorByGenre, getBookByGenre } from "../API/api";
import { useDispatch, useSelector } from "react-redux";
import { authors, setAuthors } from "../features/AuthorSlicer";
import { selectBooks, setBooks } from "../features/BookSlicer";

export default function useBooksByGenre(genreId: any) {
    const dispatch = useDispatch();
    const allBooks = useSelector(selectBooks);
    useLayoutEffect(() => {
        async function getData() {
            try {
                const bookData = await getBookByGenre(genreId);
                console.log(bookData);
                
                dispatch(setBooks(bookData.data));
            } catch (error) {
                console.log(error);
                
            }

        }
        getData();
    }, [genreId]);
    return [allBooks];
}
