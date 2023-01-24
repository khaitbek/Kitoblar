import { useTranslation } from "react-i18next";
import UserProfile from "../UserProfile/UserProfile";
import { StyledNav, StyledNavItem, StyledNavLink, StyledNavList } from "./navigation.styles";
import "../../../lang/i18n";
export function Navigation() {
    const { t } = useTranslation();

    return (
        <StyledNav>
            <StyledNavList>
                <StyledNavItem>
                    <StyledNavLink to="/">
                        {t("home_page_link")}
                    </StyledNavLink>
                </StyledNavItem>
                <StyledNavItem>
                    <StyledNavLink to="/books/book/4">
                        {t("books_page_link")}
                    </StyledNavLink>
                </StyledNavItem>
                <StyledNavItem>
                    <UserProfile />
                </StyledNavItem>
            </StyledNavList>
        </StyledNav>
    )
}
