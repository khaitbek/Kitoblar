import { StyledCarousel, StyledCarouselDescriber, StyledCarouselImage, StyledCarouselItem, StyledCarouselList, StyledCarouselMore, StyledCarouselText, StyledCarouselTitle, StyledCarouselTop } from "./carousel.styles"
import { BASE_URL } from "../../API/api"
import { StyledContainer } from "../../assets/styles/styles"

export default function Carousel({ books, author }: { books: any[], author:string }) {
    return (
        <StyledCarousel>
            <StyledContainer>
                <StyledCarouselTop>
                    <StyledCarouselDescriber>
                        Asarlari
                    </StyledCarouselDescriber>
                    <StyledCarouselMore>
                        Barchasini ko'rish
                    </StyledCarouselMore>
                </StyledCarouselTop>
                <StyledCarouselList>
                    {books ? books.map(book => {

                        return <StyledCarouselItem key={book.id}>
                            <StyledCarouselImage src={`${BASE_URL}/${book.image}`} />
                            <StyledCarouselTitle to={`/singleBook/${book.id}`} state={book}>
                                {book.title}
                            </StyledCarouselTitle>
                            <StyledCarouselText>
                                {author}
                            </StyledCarouselText>
                        </StyledCarouselItem>
                    }) : null}
                </StyledCarouselList>
                
            </StyledContainer>
        </StyledCarousel>
    )
}
