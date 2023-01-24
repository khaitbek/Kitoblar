import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledBookList = styled.ul`
    display:grid;
    grid-template-columns:repeat(auto-fit, 190px);
    gap:20px;
    justify-content:center;
`

export const StyledBookItem = styled.li`
    overflow:hidden;
    padding-bottom:63px;
    border-radius: 22px;
`

export const StyledBookImage = styled.img`
    width:100%;
    max-height:224px;
    height:283px;
    object-fit:cover;
    margin-bottom:12px;
`

export const StyledBookTitle = styled(Link)`
    margin-left:18px;
    font-weight: 500;
font-size: 18px;
line-height: 27px;
    color:var(--clr-dark-400);
`

export const StyledBookInfo = styled.p`
    margin-left:18px;
    font-size: 16px;
    line-height: 24px;
    color:var(--clr-dark-1000);
`