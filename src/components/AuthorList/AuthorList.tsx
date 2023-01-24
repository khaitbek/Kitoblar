import React from 'react'
import { useParams } from "react-router-dom"
import useAuthorsByGenre from "../../hooks/useAuthorByGenre";
import { StyledAuthorImage, StyledAuthorInfo, StyledAuthorItem, StyledAuthorList, StyledAuthorTitle } from "./author-list";
import { BASE_URL } from "../../API/api";
import Skeleton from "../Skeleton/Skeleton";

export default function AuthorList() {
  const { category_id } = useParams();
  const [authors] = useAuthorsByGenre(category_id || 1);

  return <StyledAuthorList>
    {
      authors.map((author: any) => {

        return <StyledAuthorItem key={author.id}>
          <StyledAuthorImage src={`${BASE_URL}/${author.image}`} width={295} height={224} />
          <StyledAuthorTitle to={`/singleAuthor/${author.id}`} state={author}>
            {author.first_name} {author.last_name}
          </StyledAuthorTitle>
          <StyledAuthorInfo>
            {author.date_of_birth}-{author.date_of_birth}
          </StyledAuthorInfo>
        </StyledAuthorItem>
      })
    }
  </StyledAuthorList>
  
}