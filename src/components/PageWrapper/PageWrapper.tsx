import { StyledContainer, StyledMain } from "../../assets/styles/styles";
import { Col2, PageImage, PageSection } from "./pageWrapper.styles";

export default function PageWrapper({ imgPath, Form }: { imgPath: any, Form: any }) {
    return (
            <PageSection>
                    <Col2>
                        <PageImage imgPath={imgPath} />
                        <Form />
                    </Col2>
            </PageSection>
    )
}
