import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle<{ theme: boolean }>`

    :root {
    --clr-coral-100: ${props => props.theme ? "#fff" : "#C9AC8C"};
    --clr-coral-200: ${props => props.theme ? "#fff" : "#D1B89D"};
    --clr-dark-300: ${props => props.theme ? "#444" : "#464E5F"};
    --clr-dark-400: ${props => !props.theme ? "#000000" : "#FFFFFF"};
    --clr-dark-500:${props => props.theme ? "#FFF" : "#191919"};
    --clr-dark-900: ${props => !props.theme ? "#0D0D0D" : "#FFF"};
    --clr-dark-1000:${props => !props.theme ? "rgba(13, 13, 13, 0.6)" : "#FFF"};
    --clr-neutral-1100: ${props => props.theme ? "#191919" : "#F3F6F9"};
    --clr-darkblue-800: ${props => props.theme ? "#FFF" : "#152540"};
    --clr-link-100: #549FF9;
    --clr-neutral-100: ${props => !props.theme ? "#FFF" : "#000"};
    --clr-neutral-200: ${props => !props.theme ? "000000" : "#B5B5C3"};
    --clr-neutral-300: ${props => props.theme ? "#FFF" : "#DDE6F5"};
    --clr-neutral-400: ${props => {
        console.log(props);
        return !props.theme ? "#E5EAEE" : "#000"
    }};
    --clr-neutral-500: ${props => props.theme ? "#000" : "#AAAAAA"};
    --clr-neutral-600: ${props => props.theme ? "#000" : "rgba(243, 243, 243, 0.93)"};
    --clr-neutral-700:${props => props.theme ? "#191919" : "#F5F5F5"};
    --clr-neutral-800:${props => props.theme ? "#FFF" : "#F8F8F8"};
    --clr-neutral-900:${props => props.theme ? "#000" : "rgba(243, 243, 243, 0.93)"};
    --clr-blue-100:${props => props.theme ? "#FFF" : "#3699FF"};
    
}

*,
*::before,
*::after {
    box-sizing: inherit;
    
}

html {
    height: 100%;
    box-sizing: border-box;
}

body {
    height: 100%;
    margin: 0;
    scroll-behavior: smooth;
    font-family:"Poppins", sans-serif;
    background: var(--clr-neutral-100);
}

#root{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

img {
    display: block;
    height: auto;
    max-width:100%;
}

ul {
    list-style: none;
    padding-left: 0;
}

a {
    display: inline-block;
    text-decoration: none;
}

button{
    border:1px solid transparent;
    background-color:transparent;
    transition:all 0.3s ease-in-out;
    cursor:pointer;
}

h1, h2, h3, h4, p, ul{
    margin:0;
}

input, button, label{
    font-family:inherit;
}

.visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

/* sticky footer */
.site-main {
    flex-grow: 1;
}

label > input{
    display: block !important;
}


@keyframes skeleton{
    0%{
        opacity:0.4;
        background:#444;
    }
    100%{
        opacity:1;
        background:#888;
    }
}

`

export const StyledMain = styled.main`

`

export const StyledContainer = styled.div`
position:relative;
    width:100%;
    max-width:1200px;
    margin:0 auto;
    padding:0 20px;
`



export default GlobalStyles