import styled from "styled-components";



export const StyledThemeToggler = styled.div`
    position: relative;
    margin-top:2rem;
`


export const StyledThemeInput = styled.input`
    width: 0;
    height: 0;
    display: none;
    visibility: hidden;
    &:checked + label{
        border: 2px solid whitesmoke;
    }
    &:checked + label::after{
        left: 37px;
    }   
`;

export const StyledThemeLabel = styled.label`
    cursor: pointer;
    display: block;
    text-indent: -9999px;
    height: 30px;
    width: 60px;
    border-radius: 50px;
    background-color:#F3F6F9;
    transition: 0.5s ease background-color;

    &::after{
    position: absolute;
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50px;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    background-color: #3699FF;
    transition: 0.5s ease;
    }
    
`