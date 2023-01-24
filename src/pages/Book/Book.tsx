import { Outlet } from "react-router-dom";
import { StyledContainer, StyledMain } from "../../assets/styles/styles";
import CategoryItems from "../../components/CategoryItems/CategoryItems";
import { Header } from "../../components/Header/Header";
import useCategories from "../../hooks/useCategories";
import Carousel from "../Home/Carousel/Carousel";
import SearchBar from "../Home/SearchBar/SearchBar";
import { useSelector } from "react-redux";
import { selectBooks, setBooks } from "../../features/BookSlicer";

export default function Book() {
    const [categories] = useCategories();
    return (
        <StyledMain className="site-main">
            <Header />
            <StyledContainer>
                <Carousel />
                <SearchBar resource="books" dispatch_function={setBooks}  />
            </StyledContainer>
            <CategoryItems resource="book" />
            <Outlet />
        </StyledMain>
    )
}
