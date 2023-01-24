import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledCarousel = styled.section`
    margin-bottom:120px;
`

export const StyledCarouselTop = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:30px;
`

export const StyledCarouselDescriber = styled.h2`
    font-size: 31px;
    line-height: 46px;
    color:var(--clr-coral-200);
`

export const StyledCarouselMore = styled.p`
    line-height: 24px;
    color:var(--clr-coral-400);
`

export const StyledCarouselList = styled.ul`
    display:grid;
    grid-auto-flow:column;
    grid-auto-columns:200px;
    overflow-x: scroll;
    gap:2rem;
    padding-bottom:30px;
`

export const StyledCarouselItem = styled.li`
    display:grid;
    gap:16px;
    max-width:190px;
`

export const StyledCarouselImage = styled.img`
    object-fit:cover;
    
`

export const StyledCarouselTitle = styled(Link)`
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color:var(--clr-dark-400);
    text-align:center;
    word-break: break-all;
`

export const StyledCarouselText = styled.p`
    line-height: 24px;
    color:var(--clr-dark-100);
    text-align:center;

`