import useToggle from "../../../hooks/useToggle";
import { StyledUserActionItem, StyledUserActionLink, StyledUserActionList, StyledUserAvatar, StyledUserButton, StyledUserDropdown, StyledUserProfileWrapper } from "./user.styles";
import LightDropdown from "/dropdown.svg";
import DarkDropdown from "/dropdown-dark.svg";
import "../../../lang/i18n";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../../features/ThemeSlicer";
import { auth, setToken } from "../../../features/AuthSlicer";
import useCurrentUser from "../../../hooks/useCurrentUser";
import { BASE_URL } from "../../../API/api";

export default function UserProfile() {
    const [isMenuOpen, toggleMenuOpen] = useToggle(false);
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const theme = useSelector(selectTheme);
    const { token } = useSelector(auth);
    const [user] = useCurrentUser();
    return (
        <StyledUserProfileWrapper>
            <StyledUserAvatar src={user ? `${BASE_URL}/${user.image}` : "https://via.placeholder.com/100"} width={49} height={49} />
            <StyledUserButton onClick={() => toggleMenuOpen()}>
                <StyledUserDropdown src={theme ? DarkDropdown : LightDropdown} width={11} height={7} />
            </StyledUserButton>
            <StyledUserActionList isOpen={isMenuOpen}>
                <StyledUserActionItem>
                    <StyledUserActionLink to="/profile">
                        {t("profile")}
                    </StyledUserActionLink>
                </StyledUserActionItem>
                <StyledUserActionItem>
                    <StyledUserActionLink to="/authors/new">
                        {t("add_author")}
                    </StyledUserActionLink>
                </StyledUserActionItem>
                <StyledUserActionItem>
                    <StyledUserActionLink to="/books/new">
                        {t("add_book")}
                    </StyledUserActionLink>
                </StyledUserActionItem>
                <StyledUserActionItem>
                    <StyledUserActionLink to="/register" onClick={() => {
                        localStorage.removeItem("token");
                        dispatch(setToken(""));
                    }}>
                        {t("logout")}
                    </StyledUserActionLink>
                </StyledUserActionItem>
            </StyledUserActionList>
        </StyledUserProfileWrapper>
    )
}
