import { Link } from "react-router-dom";
import styled from "styled-components";


export const StyledUserProfileWrapper = styled.div`
    position: relative;
    display:flex;
    align-items:center;
    gap:12px;
`

export const StyledUserActionList = styled.ul`
    position: absolute;
    z-index:10;
    top:calc(100% + 8px);
    left:-70%;
    display:${(props: { isOpen: boolean }) => props.isOpen ? "grid" : "none"};
    width: 140px;
    border-radius:10px;
    background: var(--clr-neutral-700);
`

export const StyledUserActionItem = styled.li`
`

export const StyledUserActionLink = styled(Link)`
    padding:8px 24px;
    font-weight: 500;
    line-height: 24px;
    color: var(--clr-dark-400);
    text-decoration:none;
`

export const StyledUserButton = styled.button`

`

export const StyledUserDropdown = styled.img`
    width:11px;
    height:7px;
`

export const StyledUserAvatar = styled.img`
    width:49px;
    height:49px;
    border-radius:50%;
`