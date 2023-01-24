import React, { useEffect, useMemo } from 'react'
import UserHeader from "../../../components/Header/UserHeader/UserHeader"
import { StyledUserForm, StyledUserFormButton, StyledUserFormTitle, StyledUserFormWrapper, StyledUserInput, StyledUserLabel, StyledUserPageWrapper } from "../user-styles"
import { StyledContainer } from "../../../assets/styles/styles"
import { SubmitHandler, useForm } from "react-hook-form"
import { ToastContainer, toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { auth } from "../../../features/AuthSlicer";
import i18n from "../../../lang/i18n"
import { useTranslation } from "react-i18next"
import { selectTheme } from "../../../features/ThemeSlicer";
import { setTheme } from "../../../features/ThemeSlicer"
import { selectLang, setLang } from "../../../features/LanguageSlicer"
import { StyledThemeInput, StyledThemeLabel, StyledThemeToggler } from "./settings.styles"
import { StyledFormOption, StyledFormSelect } from "../../../components/Form/Form.styles"

type InputTypes = {
    lang: string,
    theme: boolean | string
}
export default function Settings() {
    const { token } = useSelector(auth);
    const theme = useSelector(selectTheme);
    const lang = useSelector(selectLang);
    const dispatch = useDispatch();
    const { register, handleSubmit, setValue, reset } = useForm({

    });
    const { t, i18n } = useTranslation();
    const handleUpdateSettings = async (data: any) => {
        localStorage.setItem("lang", data.lang);
        localStorage.setItem("theme", JSON.stringify(data.theme));
        dispatch(setLang(data.lang));
        dispatch(setTheme(data.theme));
    }


    return (
        <>
            <UserHeader />
            <StyledUserForm onSubmit={handleSubmit(handleUpdateSettings)}>
                <StyledContainer>
                    <StyledUserPageWrapper>
                        <StyledUserFormWrapper style={{
                            display: "grid"
                        }}>
                            <StyledUserFormTitle>
                                {t("settings")}
                            </StyledUserFormTitle>

                            <StyledFormSelect {...register("lang")} onChangeCapture={(e: any) => {
                                i18n.changeLanguage(e.target.value);
                            }}>
                                <StyledFormOption value={i18n.language}>
                                    {t("choose_lang")}
                                </StyledFormOption>
                                <StyledFormOption value={"en"}>
                                    English
                                </StyledFormOption>
                                <StyledFormOption value={"uz"}>
                                    O'zbekcha
                                </StyledFormOption>
                                <StyledFormOption value={"ru"}>
                                    Russian
                                </StyledFormOption>

                            </StyledFormSelect>
                            <StyledThemeToggler>
                                <StyledThemeInput defaultChecked={theme} onChangeCapture={(e: any) => {
                                    console.log(e.target.checked);

                                    dispatch(setTheme(e.target.checked))
                                }} {...register("theme")} type={"checkbox"} id="switcher" />

                                <StyledThemeLabel htmlFor="switcher">Switch</StyledThemeLabel>
                            </StyledThemeToggler>
                        </StyledUserFormWrapper>
                    </StyledUserPageWrapper>
                    <StyledUserFormButton>
                        {t("save_changes")}
                    </StyledUserFormButton>
                </StyledContainer>
            </StyledUserForm>
        </>
    )
}
