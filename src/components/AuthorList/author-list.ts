import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledAuthorList = styled.ul`
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(290px, 360px));
    gap:2rem;
    justify-content:center;
`

export const StyledAuthorItem = styled.li`
    overflow:hidden;
    padding-bottom:63px;
    border-radius: 22px;
    background: var(--clr-neutral-700);
`

export const StyledAuthorImage = styled.img`
    width:100%;
    max-height:224px;
    object-fit:cover;
    margin-bottom:12px;
`

export const StyledAuthorTitle = styled(Link)`
    margin-left:18px;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color:var(--clr-dark-400);
`

export const StyledAuthorInfo = styled.p`
    margin-left:18px;
    font-size: 16px;
    line-height: 24px;
    color:var(--clr-dark-1000);
`