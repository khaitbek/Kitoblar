import React, { useEffect, useMemo } from 'react'
import UserHeader from "../../../components/Header/UserHeader/UserHeader"
import { StyledUserAvatar, StyledUserAvatarButton, StyledUserAvatarWrapper, StyledUserField, StyledUserForm, StyledUserFormButton, StyledUserFormTitle, StyledUserFormWrapper, StyledUserInput, StyledUserLabel, StyledUserPageWrapper } from "../user-styles"
import { StyledContainer } from "../../../assets/styles/styles"
import { SubmitHandler, useForm } from "react-hook-form"
import { AvatarIcon } from "../../../utils/icons"
import useCurrentUser from "../../../hooks/useCurrentUser"
import { BASE_URL, getUser, updateSecurity } from "../../../API/api"
import { ToastContainer, toast } from "react-toastify"
import { useSelector } from "react-redux"
import { auth } from "../../../features/AuthSlicer";

type InputTypes = {
    email: string,
    currentPassword: string,
    newPassword: string
}
export default function Security() {
    const [user, setUser] = useCurrentUser();
    const { token } = useSelector(auth);
    const { register, handleSubmit, setValue, reset } = useForm({
        defaultValues: {
            email: "",
            currentPassword: "",
            newPassword: ""
        }
    });
    const errorHandler = (msg: string) => toast.error(msg);
    const success = (msg: string) => toast.success(msg);
    const update = (msg:string) => toast.update(msg);
    const handleUpdateSecurity: SubmitHandler<InputTypes> = async (data) => {
        update("Updating");
        try {
            const newData = await updateSecurity(data, token);
            success("Updating user information");
            reset();
            const newUserData = await getUser(token);
            setUser(newUserData.data);
            setValue("email", newUserData.data.email);
        } catch (error: any) {
            errorHandler(error.response.data.message);
        }
    }
    useMemo(()=>{
        setValue("email", user.email);
    },[user.email]);

    return (
        <>
            <UserHeader />
            <StyledUserForm onSubmit={handleSubmit(handleUpdateSecurity)}>
                <StyledContainer>
                    <StyledUserPageWrapper>
                        <StyledUserFormWrapper>
                            <StyledUserFormTitle>
                                Security
                            </StyledUserFormTitle>
                            <StyledUserField>
                                <StyledUserLabel>
                                    Email
                                </StyledUserLabel>
                                <StyledUserInput {...register("email")} type={"email"} />
                            </StyledUserField>
                            <StyledUserField>
                                <StyledUserLabel>
                                    Current password
                                </StyledUserLabel>
                                <StyledUserInput {...register("currentPassword")} type={"password"} />
                            </StyledUserField>

                            <StyledUserField>
                                <StyledUserLabel>
                                    New password
                                </StyledUserLabel>
                                <StyledUserInput {...register("newPassword")} type={"password"} />
                            </StyledUserField>
                        </StyledUserFormWrapper>
                    </StyledUserPageWrapper>
                    <StyledUserFormButton>
                        Save changes
                    </StyledUserFormButton>
                </StyledContainer>
                <ToastContainer />
            </StyledUserForm>
        </>
    )
}
