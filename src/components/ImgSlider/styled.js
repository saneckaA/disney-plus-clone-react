import { styled } from "styled-components";
import Slider from "react-slick";

export const Carousel = styled(Slider)`
   margin-top: 20px;
   position: relative;

   & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
        opacity: 1;
        transition: opacity 0.2s ease 0s;
    }
   }

   
   ul li button {
    &:before {
        font-size: 10px;
        color: rgb(150, 158, 171);
    }
   }

   li.slick-active button::before {
    color: white;
   }

   .slick-list {
    overflow: initial;
   }
   .slick-prev {
    opacity: 0;
    left: -35px;

    &:hover {
        opacity: 1;
    }
   }

   .slick-next {
    opacity: 0;
    right: -35px;

    &:hover {
        opacity: 1;
    }
   }

`;

export const Wrap = styled.div`
 cursor: pointer;  
 padding: 0 10px;
 position: relative;


 a {
    display: block;
    cursor: pointer;
    position: relative;
    padding: 4px;
 }

 img {
    width: 100%;
    height: 100%;
    transition: 0.1s;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: 0ms;
    position: relative;
    object-fit: cover;
   

    &:hover {
        padding: 0;
        outline: 4px solid rgb(241, 241, 241, 0.7);
        outline-offset: -2px;
    
    }
}
`;


