import styled from "styled-components";

export const Nav = styled.nav`
   
   height: 70px;
   background: #090b13;
   display: flex;
   align-items: center;
   padding: 0 36px;
   overflow-x: hidden;
   justify-content: space-between;
`;

export const Logo = styled.img`
   width: 80px;
`;

export const NavMenu = styled.div`
   display: flex;
   flex: 1;
   flex-flow: row nowrap;
   align-items: center;
   margin-left: 50px;
   position: relative;


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
   height: 60px;
   width: 60px;
   border-radius: 50%;
   cursor: pointer;
`;

export const Login = styled.button`
   height: 40px;
   width: 90px;
   border-radius: 5px;
   background: black;
   border: 1px solid rgb(249, 249, 249);
   color: rgb(249, 249, 249);
   text-transform: uppercase;
   letter-spacing: 1.6px;
   font-size: 15px;
   font-weight: 500;

   &:hover {
    background: rgb(249, 249, 249);
    color: black;
   }
`;

export const DropDown = styled.div`
   position: relative;
   right: 20px;
   padding: 10px;
   background: rgb(19, 19, 19);
   border: 1px solid rgb(151, 151, 151, 0.34);
   box-shadow: rgb( 0 0 0 / 50%) 0px 0px 18px 0px;
   font-size: 14px;
   letter-spacing: 3px;
   width: 100px;
   opacity: 0;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const LogOut = styled.div`
   position: absolute;
   top: 5px;
   right: 0px;
   cursor: pointer;

   
   &:hover {
    ${DropDown} {
        opacity: 1;
        transition-duration: 1s;
    }
   }
`;