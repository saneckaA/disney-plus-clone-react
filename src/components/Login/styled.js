import styled from "styled-components";

export const Container = styled.div`
   position: relative;
   height: calc(100vh - 70px);
   display: flex;
   align-items: center;
   justify-content: center;
   &:before {
    background: url("/images/login-background.jpg") top / cover no-repeat;
       content: "";
       position: absolute;
       top: 0;
       left: 0;
       right: 0;
       bottom: 0;
       z-index: -1;
   }
`;

export const Content = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 80%;
    display: flex;
    flex-direction: column;
`;

export const TopLogo = styled.img`

`;

export const SignUp = styled.button`
   width: 100%;
   background-color: #0063e5;
   font-weight: bold;
   text-transform: uppercase;
   padding: 17px 0px;
   color: #f9f9f9;
   border-radius: 4px;
   border: none;
   font-size: 18px;
   cursor: pointer;
   transition: all 300ms;
   letter-spacing: 1.5px;
   margin-top: 8px;
   margin-bottom: 12px;

   &:hover {
    background: #0483ee;
   }
`;

export const Description = styled.p`
   font-size: 11px;
   letter-spacing: 1.5px;
   text-align: center;
   line-height: 1.5;
`;

export const BottomLogo = styled.img`
`;