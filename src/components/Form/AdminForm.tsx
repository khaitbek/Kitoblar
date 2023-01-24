import { ReactNode } from "react"
import { StyledForm, StyledFormButton, StyledFormInner, StyledFormText, StyledFormTitle } from "./Form.styles"
import { Link } from "react-router-dom"
import i18n from "../../lang/i18n"
import { useTranslation } from "react-i18next"
type AdminFormProps = {
    title: string,
    children: ReactNode,
    submitHandler: (data: any) => void,
    id?: string
}

export function AdminForm({ title, children, submitHandler, id }: AdminFormProps) {
    const { t } = useTranslation();
    return (
        <>

            <StyledForm id={id} onSubmit={submitHandler}>
                <StyledFormInner>
                    <StyledFormTitle>
                        {title}
                    </StyledFormTitle>
                </StyledFormInner>
                {children}
                <StyledFormButton type="submit">
                    {t("save_changes")}
                </StyledFormButton>
            </StyledForm>
        </>
    )
}
