import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledUserNav = styled.nav`
`;

export const StyledUserNavList = styled.ul`
    display:flex;
    
`;

export const StyledUserNavItem = styled.li`
    position:relative;
    display:flex;
    flex-direction:row-reverse;
    align-items:center;
    width:100%;
`;

export const StyledUserNavNumber = styled.p`
    position:absolute;
    left:10px;
  padding:5px 13px;
  border-radius: 4px;
  color: var(--clr-blue-100);
  background: var(--clr-neutral-400);
`;

export const StyledUserNavLink = styled(NavLink)`
    display:flex;
    width:100%;

    padding: 30px 30px 30px 60px;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    border-radius: 4px 4px 0px 0px;
    color: var(--clr-dark-300);

    background-color: var(--clr-neutral-1100);

    &.active{
        color: var(--clr-darkblue-800);
        background-color: var(--clr-neutral-300);
    }
    &.active ~ p{
        color: var(--clr-neutral-400);
        background-color: var(--clr-darkblue-800);
    }
`;
