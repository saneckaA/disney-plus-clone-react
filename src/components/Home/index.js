import React from 'react'
import { Container } from './styled';
import ImgSlider from '../ImgSlider';
import Viewers from '../Viewers';

function Home() {
    return (
        <Container>
            <ImgSlider />
            <Viewers />
        </Container>
    )
};

export default Home;
