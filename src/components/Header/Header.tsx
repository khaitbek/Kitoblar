import React from 'react'
import Logo from "/logo.svg"
import { StyledHeader, StyledHeaderWrapper, StyledSiteLogo, StyledSiteLogoLink } from "./header.styles"
import { Navigation } from "./Navigation/Navigation"
import { StyledContainer } from "../../assets/styles/styles"
import { useTranslation } from "react-i18next"
export function Header() {
    return (
        <StyledHeader>
            <StyledContainer>
                <StyledHeaderWrapper>
                    <StyledSiteLogoLink to="/">
                        <StyledSiteLogo width={102} height={38} src={Logo} />
                    </StyledSiteLogoLink>

                    <Navigation />
                </StyledHeaderWrapper>
            </StyledContainer>
        </StyledHeader>
    )
}
