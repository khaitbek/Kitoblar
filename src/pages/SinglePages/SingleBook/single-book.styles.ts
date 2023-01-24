import styled from "styled-components";

export const StyledBookSection = styled.section`
    margin-bottom:100px;
`

export const StyledBookWrapper = styled.div`
    display:flex;
    gap:64px;
`

export const StyledBookImage = styled.img`
    width:505px;
    object-fit:cover;
    border-radius: 20px;
`

export const StyledBookContent = styled.div`
    digplay:grid;
`

export const StyledBookTitle = styled.h2`
    margin-bottom:8px;
    font-size: 48px;
    line-height: 72px;
    color:var(--clr-coral-200);
`

export const StyledBookFlexWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:14px;
`

export const StyledBookText = styled.p`
    margin-bottom:44px;
    line-height: 24px;
    color:var(--clr-dark-1000);
`

export const StyledBookOuter = styled.div<{ gap: number }>`
    display:flex;
    gap:${props => props.gap + "px"};
`

export const StyledBookDescriber = styled.p`
    color:var(--clr-dark-1000);
    font-size: 20px;
    line-height: 30px;
`

export const StyledBookSpecial = styled.p`
    font-size: 20px;
    line-height: 30px;
    color:var(--clr-dark-400);
`

export const StyledBookInfo = styled.p`
word-spacing:16px;
    font-size: 39px;
    line-height: 144.4%;
    color:var(--clr-coral-200);
`

export const StyledBookSecondaryTitle = styled.p`
    margin-right:11px;
    line-height: 24px;
    color: var(--clr-coral-200);
`

export const StyledBookLine = styled.div`
    height: 1px;
    flex-grow:1;
    margin-left:19px;
    background-color:var(--clr-coral-200);
`

export const Col3  = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:12px;
`