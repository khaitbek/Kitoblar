import { SubmitHandler, useForm } from "react-hook-form";
import { StyledSearchBar, StyledSearchBarTitle, StyledSearchButton, StyledSearchForm, StyledSearchInput } from "./searchbar.styles";
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useDispatch } from "react-redux";
import { handleSearchResource } from "../../../API/api";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../../lang/i18n";
type SearchInputs = {
    query: string
}

const SearchSchema = zod.object({
    query: zod.string()
});

export default function SearchBar({ resource, dispatch_function }: { resource: string, dispatch_function: any }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { register, formState: { errors, isValid }, getValues, handleSubmit } = useForm({
        mode: "all",
        resolver: zodResolver(SearchSchema),
        defaultValues: {
            query: ""
        }
    });

    const handleSearch: SubmitHandler<SearchInputs> = async (data) => {
        console.log(data);
        
        try {
            const searchData = await handleSearchResource(resource, data.query);
            if (resource === "author") {
                navigate("author/search")
            } else {
                navigate(`/${resource}/book/search`)
            }

            dispatch(dispatch_function(searchData.data));
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <StyledSearchBar>
            <StyledSearchBarTitle>
                {t("search")}
            </StyledSearchBarTitle>
            <StyledSearchForm onSubmit={handleSubmit(handleSearch)}>
                <StyledSearchInput onChangeCapture={(e: any) => {
                    if (e.target.value === "") {
                        handleSearch(getValues());
                        
                    }
                }} type={"text"} {...register("query")} placeholder={t("search_placeholder")!} />
                <StyledSearchButton>
                    {t("search")}

                </StyledSearchButton>
            </StyledSearchForm>
        </StyledSearchBar>
    )
}
