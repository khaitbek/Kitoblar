import  { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { getAuthorByGenre } from "../API/api";
import { useDispatch, useSelector } from "react-redux";
import { authors, setAuthors } from "../features/AuthorSlicer";

export default function useAuthorsByGenre(genreId: any) {
    const dispatch = useDispatch();
    const allAuthors = useSelector(authors);
    useEffect(() => {
        async function getData ()  {
            try {
                const authorData = await getAuthorByGenre(genreId);

                dispatch(setAuthors(authorData.data));
            } catch (error) {

            }

        }
        getData();
    }, [genreId]);
    return [allAuthors];
}
