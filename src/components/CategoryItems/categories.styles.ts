import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledCategorySection = styled.section`
    padding-top:100px;
    padding-bottom:40px;
`

export const StyledCategoryTitle = styled.h2`
    margin-bottom:22px;
    text-align:center;
    font-size: 32px;
    line-height: 48px;
    color:var(--clr-coral-100);
`

export const StyledCategoryList = styled.ul`
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(150px, 170px));
    gap:2rem;
    justify-content:center;
`

export const StyledCategoryItem = styled.li`

`
export const StyledCategoryLink = styled(NavLink)`
    padding:10px;
    font-size: 18px;
    line-height: 27px;
    color:var(--clr-dark-1000);

    &.active{
        color:var(--clr-coral-200);
    }
`