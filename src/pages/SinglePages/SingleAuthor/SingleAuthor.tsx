import React from 'react'
import { useLocation } from "react-router-dom"
import { Header } from "../../../components/Header/Header";
import { StyledAuthorContent, StyledAuthorDescriber, StyledAuthorImage, StyledAuthorInfo, StyledAuthorOuter, StyledAuthorSection, StyledAuthorText, StyledAuthorTitle, StyledAuthorWrapper } from "./single-author";
import { BASE_URL } from "../../../API/api";
import { StyledContainer } from "../../../assets/styles/styles";
import useAuthorBooks from "../../../hooks/useAuthorBooks";
import Carousel from "../../../components/Carousel/Carousel";
import { useSelector } from "react-redux";
import { auth } from "../../../features/AuthSlicer";

export default function SingleAuthor(props: any) {
    const { state } = useLocation();
    const {token} = useSelector(auth);
    const [authorBooks] = useAuthorBooks(state.id, token);
    
    const isAuthorDead = state.date_of_death;
    return (
        <>
            <Header />
            <StyledAuthorSection>
                <StyledContainer>
                    <StyledAuthorWrapper>
                        <StyledAuthorImage src={`${BASE_URL}/${state.image}`} height={681} width={505} />
                        <StyledAuthorContent>
                            <StyledAuthorTitle>
                                {state.first_name} {state.last_name}
                            </StyledAuthorTitle>
                            <StyledAuthorText>
                                {state.bio}
                            </StyledAuthorText>

                            <StyledAuthorOuter gap={50}>
                                <StyledAuthorDescriber>
                                    Tavallud sanasi
                                </StyledAuthorDescriber>
                                {isAuthorDead ? <StyledAuthorDescriber>
                                    Vafot etgan sana
                                </StyledAuthorDescriber> : null}

                            </StyledAuthorOuter>
                            {isAuthorDead ? <StyledAuthorInfo>
                                {state.date_of_birth} - {state.date_of_death}
                            </StyledAuthorInfo> : <StyledAuthorInfo>
                                {state.date_of_birth}
                            </StyledAuthorInfo>}
                            <StyledAuthorOuter gap={80}>
                                <StyledAuthorDescriber>
                                    {state.country}
                                </StyledAuthorDescriber>
                                <StyledAuthorDescriber>
                                    {state.country}
                                </StyledAuthorDescriber>

                            </StyledAuthorOuter>
                        </StyledAuthorContent>

                    </StyledAuthorWrapper>
                </StyledContainer>
            </StyledAuthorSection>
            <Carousel books={authorBooks} author={`${state.first_name} ${state.last_name}`} />
        </>
    )
}
