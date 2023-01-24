import styled from "styled-components";

export const StyledSkeletonSection = styled.section`
    padding-block:50px;

`

export const StyledSkeletonList = styled.ul`
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(200px));
    justify-content:center;
    gap:1rem;
`

export const StyledSkeletonItem = styled.li`
    display:grid;
    gap:.3rem;
`

export const StyledSkeletonImg = styled.img`
    width:100%;
    background-color:#444;
    animation:skeleton 2s ease-in-out infinite;

`

export const StyledSkeletonTitle = styled.h3`
    padding:.5rem 1rem;
    border-radius:10px;
    background: #888;
    animation:skeleton 2s ease-in-out infinite;
`

export const StyledSkeletonText = styled.h3`
    padding:2rem 1rem;
    border-radius:10px;
    background: #888;
    animation:skeleton 2s ease-in-out infinite;

`