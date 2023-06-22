import { styled } from "styled-components";

export const Container = styled.div`
   margin-top: 50px;
   display: grid;
   grid-template-columns: repeat(6, 190px);
   grid-gap: 20px;
   justify-content: center;

`;

export const Wrap = styled.div`
background-image: linear-gradient(#2b2c45, #151521);
padding: 20px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 8px;
border:  3px solid rgba(249, 249, 249, 0.3);
cursor: pointer;
height: 100px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
transform: scale(1.1);
border:  3px solid rgba(249, 249, 249, 0.8);
    }

    img {
        height: 100px;
    }
`;