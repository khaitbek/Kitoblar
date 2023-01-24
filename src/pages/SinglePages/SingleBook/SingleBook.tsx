import React from 'react'
import { Col3, StyledBookContent, StyledBookDescriber, StyledBookFlexWrapper, StyledBookImage, StyledBookLine, StyledBookSecondaryTitle, StyledBookSection, StyledBookSpecial, StyledBookText, StyledBookTitle, StyledBookWrapper } from "./single-book.styles"
import { StyledContainer } from "../../../assets/styles/styles"
import { useLocation } from "react-router-dom"
import { Header } from "../../../components/Header/Header";
import { BASE_URL } from "../../../API/api";
import useAuthorBooks from "../../../hooks/useAuthorBooks";
import { useSelector } from "react-redux";
import { auth } from "../../../features/AuthSlicer";
import Carousel from "../../../components/Carousel/Carousel";

export default function SingleBook() {
    const { state } = useLocation();
    const {token} = useSelector(auth);
    const [authorBooks] = useAuthorBooks(state.author_id, token);
    return (
        <>
            <Header />
            <StyledBookSection>
                <StyledContainer>
                    <StyledBookWrapper>
                        <StyledBookImage src={`${BASE_URL}/${state.image}`} height={681} width={505} />
                        <StyledBookContent>
                            <StyledBookTitle>
                                {state.title}
                            </StyledBookTitle>

                            <StyledBookFlexWrapper>
                                <StyledBookDescriber>
                                    Sahifalar soni:
                                </StyledBookDescriber>
                                <StyledBookSpecial>
                                    {state.page}
                                </StyledBookSpecial>
                            </StyledBookFlexWrapper>
                            <StyledBookFlexWrapper>
                                <StyledBookDescriber>
                                    Chop etilgan:
                                </StyledBookDescriber>
                                <StyledBookSpecial>
                                    {state.year}
                                </StyledBookSpecial>
                            </StyledBookFlexWrapper>
                            <StyledBookFlexWrapper>
                                <StyledBookDescriber>
                                    Kitob narxi:
                                </StyledBookDescriber>
                                <StyledBookSpecial>
                                    {state.price} $
                                </StyledBookSpecial>
                            </StyledBookFlexWrapper>
                            <Col3>
                                <StyledBookSecondaryTitle>
                                    To'liq ma'lumot
                                </StyledBookSecondaryTitle>
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.18198 0.990112V11.3027L0.853553 8.97428C0.658291 8.77902 0.341709 8.77902 0.146447 8.97428C-0.0488155 9.16954 -0.0488155 9.48612 0.146447 9.68139L3.32843 12.8634C3.52369 13.0586 3.84027 13.0586 4.03553 12.8634L7.21751 9.68139C7.41278 9.48612 7.41278 9.16954 7.21751 8.97428C7.02225 8.77902 6.70567 8.77902 6.51041 8.97428L4.18198 11.3027V0.990112H3.18198Z" fill="#0D0D0D" />
                                </svg>
                                <StyledBookLine>
                                    
                                </StyledBookLine>
                            </Col3>
                            <StyledBookText>
                                {state.description}
                            </StyledBookText>
                        </StyledBookContent>
                    </StyledBookWrapper>
                </StyledContainer>
            </StyledBookSection>
            <Carousel books={authorBooks} author={``} />
        </>
    )
}
