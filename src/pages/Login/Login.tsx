import PageWrapper from "../../components/PageWrapper/PageWrapper"
import MyForm from "../../components/Form/Form";
import { StyledFormInput, StyledFormWrapper } from "../../components/Form/Form.styles";
import LoginImage from "/login.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { handleLogin } from "../../API/api";
import { useDispatch, useSelector } from "react-redux";
import { auth, setToken } from "../../features/AuthSlicer";
import { useNavigate } from "react-router-dom";

export type LoginInputTypes = {
  email: string,
  password: string,
}

export default function Login() {
  return (
    <PageWrapper Form={LoginForm} imgPath={LoginImage} />
  )
}

export function LoginForm() {
  const dispatch = useDispatch();
  const { handleSubmit, register, formState: { errors, isValid } } = useForm<LoginInputTypes>();
  const navigate = useNavigate();
  const notify = (message: string) => toast.error(message);
  const loginHandler: SubmitHandler<LoginInputTypes> = async (data) => {
    try {
      const user = await handleLogin(data);
      dispatch(setToken(user.data.token));
      localStorage.setItem("token", user.data.token);
      navigate("/");
    } catch (error: any) {
      notify(error.response.data.message);
    }
  };


  return <MyForm title="Sign up" secondary_link="Sign in" submitHandler={handleSubmit(loginHandler)}>
    <StyledFormWrapper>
      <StyledFormInput {...register("email")} type="email" placeholder="Email" />
      <StyledFormInput {...register("password")} type="Password" placeholder="Password" />
    </StyledFormWrapper>
    <ToastContainer />
  </MyForm>
}