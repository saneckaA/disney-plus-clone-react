import styled from "styled-components";

export const Nav = styled.nav`
   height: 70px;
   background: #090b13;
   display: flex;
   align-items: center;
   padding: 0 36px;
`;

export const Logo = styled.img`
   width: 80px;
`;

export const NavMenu = styled.div`
   display: flex;
   flex: 1;
   align-items: center;
   margin-left: 50px;

   a {
    display: flex;
    align-items: center;
    padding: 0 20px;
    cursor: pointer;

    img {
        height: 20px;
        padding-right: 12px;
    }

    span {
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.07;
        font-weight: bold;
        position: relative;

        &:after {
            content: "";
            height: 2px;
            background: white;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }
    }
    &:hover {
        span:after {
            transform: scaleX(1);
            opacity: 1;
        }
    }
   }
`;

export const UserImg = styled.img`
   width: 50px;
   height: 50px;
   border-radius: 50%;
   cursor: pointer;
`;