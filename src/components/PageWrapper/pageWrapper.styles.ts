import styled from "styled-components";

export const Col2 = styled.div`
    min-height:100vh;
    display:grid;
    @media screen and (min-width:968px){
        grid-template-columns:1fr 1fr;
    }
`

export const PageSection  = styled.section`
    
`

export const PageImage = styled.div`
    display:none;
    padding:38px 100px;
    background-image:${(props: { imgPath: string }) => `url(${props.imgPath})`};
    background-repeat:no-repeat;
    background-position:center;
    background-color:var(--clr-coral-100);
    @media screen and (min-width:968px){
        display:block;
    }
`