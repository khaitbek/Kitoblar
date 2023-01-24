import { useEffect, useState } from "react";
import { StyledImageUploader, StyledImageUploaderLabel, StyledPlusIcon, StyledUploadedImage } from "./Form.styles";
import i18n from "../../lang/i18n";
import PlusIcon from "/plus.svg"
import { useTranslation } from "react-i18next";

export default function AdminImageUploader({ formId, inputId, Image, setAuthorImage }: { formId: string, inputId: string, Image?: any, setAuthorImage:any }) {
    const [preview, setPreview] = useState<string | undefined>();
    const {t} = useTranslation();
    function handleOnDrop(files:FileList) {
        setAuthorImage(files[0]);
    }
    useEffect(() => {
        if (!Image) {
            setPreview(undefined);
            return
        }

        const imageUrl = URL.createObjectURL(Image);
        setPreview(imageUrl);

        return () => URL.revokeObjectURL(imageUrl);
    }, [Image])

    return (
        <StyledImageUploader>
            {/* <form action="#"> */}
            <StyledImageUploaderLabel draggable={true}

                onDragStart={(e) => {
                    console.log(e);

                    e.stopPropagation();
                    e.preventDefault();
                }}
                onDragLeave={(e) => {
                    console.log(e);

                    e.stopPropagation();
                    e.preventDefault();
                }}
                onDragOver={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                }}
                onDrop={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    handleOnDrop(e.dataTransfer.files);
                }}

                form={formId} htmlFor={inputId}>
                <StyledPlusIcon src={PlusIcon} alt="" />
                {t("image")}
            </StyledImageUploaderLabel>
            {/* <StyledFormInput id="authorImage" type="number" placeholder="First name" /> */}
            {Image ? <StyledUploadedImage src={preview} width={315} height={315} alt="Author" /> : null}
            {/* </form> */}
        </StyledImageUploader>
    )
}
