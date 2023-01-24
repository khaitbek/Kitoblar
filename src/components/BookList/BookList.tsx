import React from 'react'
import { useParams } from "react-router-dom"
import { StyledBookImage, StyledBookInfo, StyledBookItem, StyledBookList, StyledBookTitle } from "./BookList.styles";
import { BASE_URL } from "../../API/api";
import useBooksByGenre from "../../hooks/useBooksByGenre";

export default function BookList() {
    const { category_id } = useParams();
    const [books] = useBooksByGenre(category_id);
    console.log(books);
    
    return (
        <StyledBookList>
            {books.map((book: any) => {
                console.log(book);
                
                return <StyledBookItem key={book.id}>
                    <StyledBookImage src={`${BASE_URL}/${book.image}`} width={295} height={224} />
                    <StyledBookTitle to={`/singleBook/${book.id}`} state={book}>
                        {book.title}
                    </StyledBookTitle>
                </StyledBookItem>
            }) }
        </StyledBookList>
    )
}