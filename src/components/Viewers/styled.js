import { styled } from "styled-components";

export const Container = styled.div`
   margin-top: 50px;
   display: grid;
   grid-template-columns: repeat(6, 190px);
   grid-gap: 20px;
   justify-content: center;
`;

export const Wrap = styled.div`
padding: 20px;
border-radius: 8px;
border:  3px solid rgba(249, 249, 249, 0.3);
cursor: pointer;
height: 100px;
overflow: hidden;
position: relative;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }

    video {
        width: 50%;
        height: 50%;
        min-width: 100%;
        min-height: 100%;
        overflow: hidden;
        object-fit: cover;
        position: absolute;
        right: 0;
        bottom: 0;
        top: 0px;
        opacity: 0;
        z-index: 0;
    }

    &:hover {
      transform: scale(1.1);
      border: 3px solid rgba(249, 249, 249, 0.8);

      video {
        opacity: 1;
      }
    }
`;