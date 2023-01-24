import styled from "styled-components";
import OwlCarousel from "react-owl-carousel";
import CarouselBg from "/hero.jpg"
export const StyledCarousel = styled(OwlCarousel)`
    position:relative;
    padding-block:45px 86px;
    border-radius:21px;
    background-image:url("/hero.jpg");
    background-repeat:no-repeat;
    background-size:cover;
`

export const StyledCarouselItem = styled.div`
    margin-left:85px;
    margin-bottom:30px;
    max-width:337px;
    font-size: 61px;
    line-height: 67px;
    font-family: 'Major Mono Display', monospace;
    letter-spacing:-10px;
    color: var(--clr-coral-200);
`