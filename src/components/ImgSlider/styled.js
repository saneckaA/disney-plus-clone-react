import { styled } from "styled-components";
import Slider from "react-slick";

export const Carousel = styled(Slider)`
   margin-top: 20px;

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
    overflow: visible;
   }

   button {
    z-index: 1;
   }
`;

export const Wrap = styled.div`
 cursor: pointer;  
 padding: 0 10px;

img {
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;


    &:hover {
        border: 4px solid rgba(249, 249, 249, 0.8);
    }
}
`;

