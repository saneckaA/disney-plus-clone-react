import styled from 'styled-components';

export const Container = styled.div`
min-height: calc(100vh -70px);
padding: 0 calc (3.5vw + 5px);
position: relative;

`;

export const Background = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 1;
right: 0;
z-index: -1;
opacity: 0.7;

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`;

export const Logo = styled.div`
height: 30vh;
min-height: 170px;
width: 35vw;
min-width: 200px;

img {
   width: 100%;
   height: 100%;
   object-fit: contain;
margin-top: 60px;
}
`;

export const Controls = styled.div`
   margin-top: 30px;
   margin-left: 70px;
   display: flex;
   align-items: center;

`;

export const PlayButton = styled.button`
   border-radius: 4px;
   font-size: 15px;
   padding: 0px 24px;
   height: 56px;
   display: flex;
   align-items: center;
   margin-right: 20px;
   border: none;
   letter-spacing: 1.8px;
   background: rgb(249, 249, 249);
   transition: 300ms;
   text-transform: uppercase;

   &:hover {
    background: rgb(198, 198, 198)
   }
`;

export const TrailerButton = styled(PlayButton)`
   background: rgba(0, 0, 0, 0.3);
   border: 1px solid rgb(249, 249, 249);
   color: rgb(249, 249, 249);


`;

export const AddButton = styled.button`
   border-radius: 50%;
   margin-right: 20px;
   height: 44px;
   width: 44px;
   border: 2px solid white;
   background: black;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;

   span{
    font-size: 30px;
    color: white;

    &:hover {
        color: black;
    }
   }
  

   &:hover {
    background: white;
   }
`;

export const GroupWatchButton = styled(AddButton)`

`;

export const Specification = styled.div`
   margin-top: 70px;
   margin-left: 70px;
   display: flex;
   align-items: center;
   font-size: 12px;

img {
    height: 20px;
    padding-right: 5px;

}
`;

export const Description = styled.div`
   margin-left: 70px;
   margin-top: 30px;
   width: 800px;
   font-size: 20px;
`;
export const Section = styled.div`
   margin-left: 70px;
   margin-top: 50px;
   display: flex
   align-items: center;
`;

export const Recommendation = styled.span`
   font-size: 25px;
   text-transform: uppercase;
`;

export const Details = styled.span`
   margin-left: 70px;
   margin-top: 40px;
   font-size: 25px;
   text-transform: uppercase;
`;