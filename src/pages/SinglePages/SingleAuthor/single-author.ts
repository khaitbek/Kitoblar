import styled from "styled-components";

export const StyledAuthorSection = styled.section`
    margin-bottom:100px;
`

export const StyledAuthorWrapper = styled.div`
    display:flex;
    gap:64px;
`

export const StyledAuthorImage = styled.img`
    border-radius: 20px;
`

export const StyledAuthorContent = styled.div`
    digplay:grid;
`

export const StyledAuthorTitle = styled.h2`
    margin-bottom:8px;
    font-size: 48px;
    line-height: 72px;
    color:var(--clr-coral-200);
`

export const StyledAuthorText = styled.p`
    margin-bottom:44px;
    line-height: 24px;
    color:var(--clr-dark-1000);
`

export const StyledAuthorOuter = styled.div<{gap:number}>`
    display:flex;
    gap:${props => props.gap + "px"};
`

export const StyledAuthorDescriber = styled.p`
    color:var(--clr-dark-1000);
    font-size: 12px;
    line-height: 18px;
`

export const StyledAuthorInfo = styled.p`
word-spacing:16px;
    font-size: 39px;
    line-height: 144.4%;
    color:var(--clr-coral-200);
`