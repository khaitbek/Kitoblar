import { SubmitHandler, useForm } from "react-hook-form";
import { AdminForm } from "../../../components/Form/AdminForm";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Col2 } from "../../../components/PageWrapper/pageWrapper.styles";
import { StyledFormInput, StyledFormOption, StyledFormSelect, StyledFormWrapper } from "../../../components/Form/Form.styles";
import AdminImageUploader from "../../../components/Form/AdminImageUploader";
import { useEffect, useState } from "react";
import { convertObjectToFormData, convertObjectToFormDataSafe } from "../../../utils/convertObject";
import { handleNewAuthor } from "../../../API/api";
import { useSelector } from "react-redux";
import { auth } from "../../../features/AuthSlicer";
import { ToastContainer, toast } from "react-toastify";
import i18n from "../../../lang/i18n";
import { useTranslation } from "react-i18next";
import useCategories from "../../../hooks/useCategories";
export type NewAuthorInputs = {
  first_name: string,
  last_name: string,
  date_of_birth: string,
  date_of_death: string,
  country: string,
  genre_id: string,
  bio: string,
  image: any
}

const NewAuthorSchema = zod.object({
  first_name: zod.string(),
  last_name: zod.string(),
  date_of_birth: zod.string(),
  date_of_death: zod.string(),
  country: zod.string(),
  bio: zod.string(),
  image: zod.any(),
  genre_id: zod.string()
});

export default function NewAuthor() {
  const [authorImage, setAuthorImage] = useState<File>();
  const { t } = useTranslation();
  const { token } = useSelector(auth)
  const { register, handleSubmit, formState: { errors, }, setValue, reset } = useForm<NewAuthorInputs>({
    mode: "all",
    resolver: zodResolver(NewAuthorSchema)
  });
  const [categories] = useCategories();
  const success = () => toast.success("Success!");
  const fail = (message: string) => toast.error("Failed! " + message);
  const newAuthorHandler: SubmitHandler<NewAuthorInputs> = async (data) => {
    try {
      if (data.image.length === 0) data.image = authorImage
      const authorData = convertObjectToFormDataSafe(data);
      const newAuthorData = await handleNewAuthor(authorData, token);
      success();
      reset()
      setAuthorImage(undefined);
    } catch (error: any) {
      fail(error.response.data.message);
    }
  }

  useEffect(() => {
    setValue("image", authorImage);

  }, [authorImage])
  return (
    <Col2>
      <AdminImageUploader setAuthorImage={setAuthorImage} formId="authorForm" Image={authorImage} inputId="authorImage" />
      <AdminForm id="authorForm" title={t("add_author")} submitHandler={handleSubmit(newAuthorHandler)}>
        <StyledFormWrapper>
          <StyledFormInput {...register("first_name")} type="text" placeholder={t("f_name")!} />
          <StyledFormInput {...register("last_name")} type="text" placeholder={t("l_name")!} />
          <StyledFormInput {...register("date_of_birth")} type="number" placeholder={t("date_of_birth")!} />
          <StyledFormInput {...register("date_of_death")} type="number" placeholder={t("date_of_death")!} />
          <StyledFormInput {...register("country")} type="text" placeholder={t("country")!} />
          <StyledFormInput {...register("bio")} type="text" placeholder={t("biography")!} />
          <StyledFormSelect {...register("genre_id")}>
            {categories.map((category: any) => (
              <StyledFormOption key={category.id} value={category.id}>
                {category.name}
              </StyledFormOption>
            ))}
          </StyledFormSelect>
          <StyledFormInput className="visually-hidden" aria-hidden="true" id="authorImage" {...register("image")} onChangeCapture={(e: any) => {
            setAuthorImage(e.target.files[0]);
          }} type="file" placeholder="Biography" />
        </StyledFormWrapper>
      </AdminForm >
      <ToastContainer />
    </Col2>
  )
}
