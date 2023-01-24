import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { StyledCarousel, StyledCarouselItem } from "./carousel.styles";
import $ from "jquery"
import { StyledContainer } from "../../../assets/styles/styles";
import "./carousel.css"
import SearchBar from "../SearchBar/SearchBar";
import { useParams } from "react-router-dom";
import useCategories from "../../../hooks/useCategories";
import "../../../lang/i18n";
import { useTranslation } from "react-i18next";

export default function Carousel() {
  const [allCategories] = useCategories();
  const {t} = useTranslation();
  return (
    <>
      <StyledCarousel id="carouselContainer" dotClass="carousel-indicator" loop margin={10} items={1} className='owl-theme' >
        {allCategories.map((category: any) => (
          <StyledCarouselItem className="item" key={category.id}>
            {t(`category.${category.id}`)}
          </StyledCarouselItem>
        ))}
      </StyledCarousel>

    </>
  )
}
