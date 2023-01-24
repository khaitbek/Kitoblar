import styled from "styled-components";

export const StyledSearchBar = styled.section`
    position: absolute;
    z-index:10;
    bottom:-75px;
    width:80%;
    left:10%;
    padding:29px 73px;
    box-shadow: 0px 4px 77px rgba(0, 0, 0, 0.25);
    border-radius: 15px;    
    background:var(--clr-neutral-100);
`

export const StyledSearchBarTitle = styled.h2`
    margin-bottom:9px;
    font-weight: 400;
    text-align:center;
    font-size: 32px;
    line-height: 48px;
    color:var(--clr-coral-200);
`

export const StyledSearchForm = styled.form`
    display:grid;
    grid-template-columns:80% 20%;
    gap:14px;
`
export const StyledSearchInput = styled.input`
    padding:12px 27px;
    border:1px solid transparent;
    border-radius: 15px;
    color: rgba(13, 13, 13, 0.3);
    background-color:var(--clr-neutral-700);
`

export const StyledSearchButton = styled.button`
    font-size: 16px;
    line-height: 24px;
    border-radius: 15px;
    text-align:center;
    color:var(--clr-neutral-100);
    background-color:var(--clr-coral-100);
`