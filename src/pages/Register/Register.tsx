import PageWrapper from "../../components/PageWrapper/PageWrapper"
import MyForm from "../../components/Form/Form";
import { StyledFormInput, StyledFormWrapper } from "../../components/Form/Form.styles";
import RegisterImage from "/register.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";
import { AxiosHeaders, AxiosRequestHeaders } from "axios";
import { handleRegister } from "../../API/api";
import { useDispatch } from "react-redux";
import { setToken } from "../../features/AuthSlicer";
import { useNavigate } from "react-router-dom";


export type RegisterInputTypes = {
  first_name: string,
  last_name: string,
  phone: string,
  email: string,
  password: string,
}

export default function Register() {
  return (
    <PageWrapper Form={RegisterForm} imgPath={RegisterImage} />
  )
}

export function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors, isValid } } = useForm<RegisterInputTypes>();
  const notify = (message: string) => toast.error(message)
  const registerHandler: SubmitHandler<RegisterInputTypes> = async (data) => {
    try {
      const user = await handleRegister(data);
      dispatch(setToken(user.data.token));
      localStorage.setItem("token", user.data.token);
      navigate("/");
    } catch (error: any) {
      notify(error.response.data.message);
    }
  };
  const triggerError = (msg: string) => {
    toast.error(msg);
  }


  return <MyForm title="Sign up" secondary_link="Sign in" submitHandler={handleSubmit(registerHandler)}>
    <StyledFormWrapper>
      <StyledFormInput {...register("first_name")} type="text" placeholder="First name" />
      <StyledFormInput {...register("last_name")} type="text" placeholder="Last name" />
      <StyledFormInput {...register("phone")} type="tel" placeholder="Phone" />
      <StyledFormInput {...register("email")} type="email" placeholder="Email" />
      <StyledFormInput {...register("password")} type="Password" placeholder="Password" />
      <ToastContainer />
    </StyledFormWrapper>
    <ToastContainer />
  </MyForm>
}