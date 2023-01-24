
import { useEffect } from "react";
import { StyledContainer, StyledMain } from "../assets/styles/styles";
import { Header } from "../components/Header/Header";
import Carousel from "./Home/Carousel/Carousel";
import SearchBar from "./Home/SearchBar/SearchBar";
import CategoryItems from "../components/CategoryItems/CategoryItems";
import { Outlet } from "react-router-dom";
import { setAuthors } from "../features/AuthorSlicer";


export default function Search() {
    return (
        <StyledMain className="site-main">
            <Header />
            <StyledContainer>
                <Carousel />
                <SearchBar dispatch_function={setAuthors} resource="author" />
            </StyledContainer>

            <CategoryItems resource="author" />

            <Outlet />
        </StyledMain>
    )
}
