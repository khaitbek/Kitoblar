import { useSelector } from "react-redux";
import { StyledContainer } from "../../assets/styles/styles";
import { StyledCategoryItem, StyledCategoryLink, StyledCategoryList, StyledCategorySection, StyledCategoryTitle } from "./categories.styles";
import { useState } from "react";
import { categories } from "../../features/categorySlice";
import { useNavigate } from "react-router-dom";
import i18n from "../../lang/i18n";
import { useTranslation } from "react-i18next";
export default function CategoryItems({ resource = "author" }) {
  const allCategories = useSelector(categories);
  const navigate = useNavigate();
  const {t} = useTranslation();
  return (
    <StyledCategorySection>
      <StyledContainer>
        <StyledCategoryTitle>
          {t("main_categories")}
        </StyledCategoryTitle>
        <StyledCategoryList>
          {allCategories?.map((category: any, id:number) => {
            return <StyledCategoryItem key={category.id} data-id={category.id}>
              <StyledCategoryLink className={({ isActive }) => isActive ? "active-item" : "default"} to={`${resource}/${category.id}`}>
                {t(`category.${category.id}`)}
              </StyledCategoryLink>
            </StyledCategoryItem>
          })}
        </StyledCategoryList>
      </StyledContainer>
    </StyledCategorySection>
  )
}
