import { useEffect,  useState } from 'react'
import { getAuthorBooks } from "../API/api";

export default function useAuthorBooks(authorId: any, token:string) {
    const [books, setBooks] = useState<[]>([]);
    useEffect(() => {
        (async () => {
            try {
                const booksData = await getAuthorBooks(authorId, token);
                setBooks(booksData.data);
            } catch (error) {
                console.log(error);
            }

        })();
    }, []);
    return [books];
}
