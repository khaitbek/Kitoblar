import React from 'react'
import { StyledUserNav, StyledUserNavItem, StyledUserNavLink, StyledUserNavList, StyledUserNavNumber } from "./user-header.styles";
import i18n from "../../../lang/i18n";
import { useTranslation } from "react-i18next";
export default function UserHeader() {
    const {t} = useTranslation();
    return (
        <StyledUserNav>
            <StyledUserNavList>
                <StyledUserNavItem>
                    <StyledUserNavLink to="/profile">
                        {t("profile")}
                    </StyledUserNavLink>
                    <StyledUserNavNumber>
                        1
                    </StyledUserNavNumber>

                </StyledUserNavItem>
                <StyledUserNavItem>
                    <StyledUserNavLink to="/security">
                        {t("security")}
                    </StyledUserNavLink>
                    <StyledUserNavNumber>
                        2
                    </StyledUserNavNumber>

                </StyledUserNavItem>
                <StyledUserNavItem>
                    <StyledUserNavLink to="/settings">
                        {t("settings")}
                    </StyledUserNavLink>
                    <StyledUserNavNumber>
                        3
                    </StyledUserNavNumber>

                </StyledUserNavItem>
            </StyledUserNavList>
        </StyledUserNav>
    )
}
