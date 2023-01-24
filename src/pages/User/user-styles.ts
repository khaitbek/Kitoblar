import styled from "styled-components";

export const StyledUserPageWrapper = styled.div`
    display:flex;
    gap:105px;
`

export const StyledUserAvatarWrapper = styled.div`
    position:relative;
    max-height:175px;
`

export const StyledUserAvatar = styled.img`
    width:175px;
    aspect-ratio:1;
    border-radius:50%;
`

export const StyledUserAvatarButton = styled.button`
    position:absolute;
    bottom:-25%;
    right:0;
`

export const StyledUserForm = styled.form`
position:relative;
    padding-top:83px;
`

export const StyledUserFormWrapper = styled.div`
    flex-grow:1;
`

export const StyledUserField = styled.div`
    display:grid;
    margin-bottom:22px;
`

export const StyledUserFormTitle = styled.h2`
    margin-bottom:32px;
    color:var(--clr-dark-400);
`

export const StyledUserLabel = styled.label`
    margin-bottom:7px;
    font-size: 13px;
    line-height: 20px;
    color:var(--clr-dark-300);
`

export const StyledUserError = styled.p`
    font-size: 12px;
    line-height: 18px;
    color: var(--clr-neutral-200);
    opacity: 0.8;
`

export const StyledUserInput = styled.input`
    padding:12px 20px;
    font-size: 14px;
    line-height: 21px;
    border-radius: 4px;
    color: var(--clr-dark-300);
    border:0;
    background: var(--clr-neutral-1100);
`

export const StyledUserFormButton = styled.button`
    margin-left:88%;
    margin-top:71px;
    padding: 11px 20px;
    font-weight: 600;
    font-size: 13px;
    line-height: 20px;
    border-radius:4px;
    color:var(--clr-neutral-100);
    background:var(--clr-darkblue-800);
`