import { Outlet, useNavigate } from "react-router-dom";
import { StyledContainer, StyledMain } from "../../assets/styles/styles";
import CategoryItems from "../../components/CategoryItems/CategoryItems";
import { Header } from "../../components/Header/Header";
import useCategories from "../../hooks/useCategories";
import Carousel from "./Carousel/Carousel";
import {  setAuthors } from "../../features/AuthorSlicer";
import SearchBar from "./SearchBar/SearchBar";
import {  useEffect } from "react";

export default function Home() {
    const [categories] = useCategories();
    const navigate = useNavigate();
    useEffect(()=>{
        navigate("author/1");
    },[]);
    return (
        <StyledMain className="site-main">
            <Header />
            <StyledContainer>
                <Carousel />
                <SearchBar dispatch_function={setAuthors} resource="author" />
            </StyledContainer>

            <CategoryItems resource="author" />
            
            <Outlet  />
        </StyledMain>
    )
}
