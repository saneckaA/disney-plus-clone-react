import styled, {css} from "styled-components";
import Slider from "react-slick";

export const Container = styled.div`
margin-top: 50px;
`;

export const Header = styled.h4`
font-size: 20px;
margin-bottom: 1px;
`;

export const Content = styled.div`
color: white;
`;

export const Carousel = styled(Slider)`

.slick-list {
    overflow: visible;
   }

   button {
    z-index: 1;
   }
`;

export const Wrap = styled.div`
padding: 20px;

img {
    height: 161px;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
        transform: scale(1.1);
        border: 4px solid rgba(249, 249, 249, 0.8);
    }

    ${({extra}) => extra && css`
    height: 405px;
    `}
}
`;