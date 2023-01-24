import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
    padding-block:33px;
`

export const StyledHeaderWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:1rem;
`

export const StyledSiteLogoLink = styled(Link)`

`

export const StyledSiteLogo = styled.img`
    width:102px;
    height:38px;
`