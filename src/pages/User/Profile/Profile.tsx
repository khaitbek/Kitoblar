import React, { useEffect, useState } from 'react'
import UserHeader from "../../../components/Header/UserHeader/UserHeader"
import { StyledUserAvatar, StyledUserAvatarButton, StyledUserAvatarWrapper, StyledUserField, StyledUserForm, StyledUserFormButton, StyledUserFormTitle, StyledUserFormWrapper, StyledUserInput, StyledUserLabel, StyledUserPageWrapper } from "../user-styles"
import { StyledContainer } from "../../../assets/styles/styles"
import { SubmitHandler, useForm } from "react-hook-form"
import { AvatarIcon } from "../../../utils/icons"
import useCurrentUser from "../../../hooks/useCurrentUser"
import { BASE_URL, getUser, updateuser } from "../../../API/api"
import { ToastContainer, toast } from "react-toastify"
import { useSelector } from "react-redux"
import { auth } from "../../../features/AuthSlicer"
import { convertObjectToFormData } from "../../../utils/convertObject";
import i18n from "../../../lang/i18n"
import { useTranslation } from "react-i18next"
export type InputTypes = {
    first_name: string,
    last_name: string,
    phone: string,
    image: any
}

export default function Profile() {
    const { token } = useSelector(auth);
    const [user, setUser] = useCurrentUser();
    const [avatar, setAvatar] = useState<any>();
    const [image, setImage] = useState<File>();
    const errorHandler = (msg: string) => toast.error(msg);
    const success = (msg: string) => toast.success(msg);
    const { register, handleSubmit, reset, setValue, getValues } = useForm<InputTypes>({
        defaultValues: {
            first_name: user.first_name,
            last_name: "",
            phone: "",
            image: ""
        }
    });
    const { t } = useTranslation();
    useEffect(() => {
        setValue("first_name", user.first_name);
        setValue("last_name", user.last_name);
        setValue("phone", user.phone);
        setValue("image", user.image);
        setAvatar(`${BASE_URL}/${user.image}`)
    }, [user]);
    useEffect(() => {
        if (!image) {
            setAvatar("https://via.placeholder.com/175");
            return
        }

        const imageUrl = URL.createObjectURL(image);
        setAvatar(imageUrl);
        return () => URL.revokeObjectURL(imageUrl);
    }, [image]);
    const handleUpdateUser: SubmitHandler<InputTypes> = async (data) => {
        try {
            const newData = await updateuser(convertObjectToFormData(data), token);
            success("Updating user information");
            reset();
            const newUserData = await getUser(token);
            setUser(newUserData.data);
            setValue("first_name", newUserData.data.email);
            setValue("last_name", newUserData.data.last_name);
            setValue("phone", newUserData.data.phone);
        } catch (error: any) {
            errorHandler(error.response.data.message);
        }
    }

    return (
        <>
            <UserHeader />
            <StyledUserForm onSubmit={handleSubmit(handleUpdateUser)}>
                <StyledContainer>
                    <StyledUserPageWrapper>
                        <StyledUserAvatarWrapper>
                            <StyledUserAvatar src={avatar} width={175} height={175} alt="user info..." />
                            <StyledUserAvatarButton type="button">
                                <StyledUserLabel>
                                    <AvatarIcon />
                                    <StyledUserField>
                                        <StyledUserInput className="visually-hidden" {...register("image")} type="file" placeholder="John" onChangeCapture={(e: any) => {
                                            setImage(e.target.files[0]);
                                        }} />
                                    </StyledUserField>
                                </StyledUserLabel>
                            </StyledUserAvatarButton>
                        </StyledUserAvatarWrapper>
                        <StyledUserFormWrapper>
                            <StyledUserFormTitle>
                            {t("profile")}
                            </StyledUserFormTitle>
                            <StyledUserField>
                                <StyledUserLabel>
                                    {t("f_name")}
                                </StyledUserLabel>
                                <StyledUserInput {...register("first_name")} type={"text"} />
                            </StyledUserField>
                            <StyledUserField>
                                <StyledUserLabel>
                                    {t("l_name")}
                                </StyledUserLabel>
                                <StyledUserInput {...register("last_name")} type={"text"} />
                            </StyledUserField>

                            <StyledUserField>
                                <StyledUserLabel>
                                    {t("phone")}
                                </StyledUserLabel>
                                <StyledUserInput {...register("phone")} type={"tel"} />
                            </StyledUserField>

                            <StyledUserFormButton>
                                {t("save_changes")}
                            </StyledUserFormButton>
                        </StyledUserFormWrapper>

                    </StyledUserPageWrapper>
                    <ToastContainer />
                </StyledContainer>
            </StyledUserForm>
        </>
    )
}
