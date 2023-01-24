import { SubmitHandler, useForm } from "react-hook-form";
import { AdminForm } from "../../../components/Form/AdminForm";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Col2 } from "../../../components/PageWrapper/pageWrapper.styles";
import { StyledFormInput, StyledFormOption, StyledFormSelect, StyledFormWrapper } from "../../../components/Form/Form.styles";
import AdminImageUploader from "../../../components/Form/AdminImageUploader";
import { useEffect, useState } from "react";
import { convertObjectToFormData, convertObjectToFormDataSafe } from "../../../utils/convertObject";
import { handleNewBook } from "../../../API/api";
import { useSelector } from "react-redux";
import { auth } from "../../../features/AuthSlicer";
import { ToastContainer, toast } from "react-toastify";
import useCategories from "../../../hooks/useCategories";
import useAuthors from "../../../hooks/useAuthors";
import i18n from "../../../lang/i18n";
import { useTranslation } from "react-i18next";
import useAuthorsByGenre from "../../../hooks/useAuthorByGenre";
export type NewBookInputs = {
  title: string,
  page: string,
  year: string,
  price: string,
  genre_id: string,
  author_id: string,
  description: string,
  image: any
}

const NewBookSchema = zod.object({
  title: zod.string(),
  page: zod.string(),
  year: zod.string(),
  price: zod.string(),
  genre_id: zod.string(),
  author_id: zod.string(),
  description: zod.string(),
  image: zod.any()
});



export default function NewBook() {
  const [authorId, setAuthorId] = useState<number>(1)
  const [categories] = useCategories();
  const [authors] = useAuthorsByGenre(authorId);
  const [bookImage, setBookImage] = useState<File>();
  const { token } = useSelector(auth);
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors, }, setValue, reset } = useForm<NewBookInputs>({
    mode: "all",
    resolver: zodResolver(NewBookSchema)
  });

  const success = () => toast.success("Success!");
  const fail = (message: string) => toast.error("Failed! " + message);
  const NewBookHandler: SubmitHandler<NewBookInputs> = async (data) => {
    try {
      console.log(data);
      if (data.image.length === 0) data.image = bookImage
      const bookData = convertObjectToFormDataSafe(data);
      const NewBookData = await handleNewBook(bookData, token);
      success();
      reset();
      setBookImage(undefined);
    } catch (error: any) {
      console.log(error);

      fail(error.response.data.message);
    }
  }

  useEffect(() => {
    setValue("image", bookImage);
  }, [bookImage])
  return (
    <Col2>
      <AdminImageUploader setAuthorImage={setBookImage} formId="authorForm" Image={bookImage} inputId="bookImage" />
      <AdminForm id="authorForm" title={t("add_book")!} submitHandler={handleSubmit(NewBookHandler)}>
        <StyledFormWrapper>
          <StyledFormInput {...register("title")} type="text" placeholder={t("book_title")!} />
          <StyledFormInput {...register("page")} type="number" placeholder={t("pages")!} />
          <StyledFormInput {...register("year")} type="number" placeholder={t("date_of_release")!} />
          <StyledFormInput {...register("price")} type="number" placeholder={t("price")!} />
          <StyledFormSelect {...register("genre_id")} onChangeCapture={(e: any) => {
            setAuthorId(e.target.value);
          }} >
            {categories?.map((category: any) => {
              return <StyledFormOption key={category.id} value={category.id}>
                {category.name}
              </StyledFormOption>
            })}
          </StyledFormSelect>
          <StyledFormSelect {...register("author_id")} >
            {authors?.map((author: any) => {
              return <StyledFormOption key={author.id} value={author.id}>
                {author.first_name + " " + author.last_name}
              </StyledFormOption>
            })}
          </StyledFormSelect>
          <StyledFormInput {...register("description")} type="text" placeholder={t("description")!} />
          <StyledFormInput className="visually-hidden" aria-hidden="true" id="bookImage" {...register("image")} onChangeCapture={(e: any) => {
            setBookImage(e.target.files[0]);
          }} type="file" placeholder={t("image")!} />
        </StyledFormWrapper>
      </AdminForm >
      <ToastContainer />
    </Col2>
  )
}
