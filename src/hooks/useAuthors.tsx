import { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAuthors } from "../API/api";
import { authors, setAuthors } from "../features/AuthorSlicer";

export default function useAuthors() {
    const dispatch = useDispatch();
    const allAuthors = useSelector(authors);
    useEffect(() => {
        async function renderAuthorsFromAPI() {
            try {
                const authorsData = await getAuthors();
                dispatch(setAuthors(authorsData.data));
            } catch (error) {
                console.log(error);
            }
        };
        renderAuthorsFromAPI();
    }, []);
    return [allAuthors];
}
