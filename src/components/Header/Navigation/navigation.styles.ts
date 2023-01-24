import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.nav`

`

export const StyledNavList = styled.ul`
    display:flex;
    align-items:center;
    gap:22px;
`

export const StyledNavItem = styled.li`
    
`

export const StyledNavLink = styled(Link)`
    line-height: 144.4%;
    text-decoration:"none";
    color: var(--clr-dark-900);
`