import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Content, Carousel, Wrap, Header } from './styled';

function Movies() {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <Container>
            <Header>Sci-fi and action</Header>
            <Content>
                <Carousel {...settings}>
                    <Wrap>
                        <img src="/images/movie1.jpg" />
                    </Wrap>
                    <Wrap>
                        <img src="/images/movie2.jpg" />
                    </Wrap>
                    <Wrap>
                        <img src="/images/movie3.jpg" />
                    </Wrap>
                    <Wrap>
                        <img src="/images/movie4.jpg" />
                    </Wrap>
                    <Wrap>
                        <img src="/images/movie5.jpg" />
                    </Wrap>
                    <Wrap>

                    </Wrap>
                </Carousel>
            </Content>
            <Header>News in Disney +</Header>
            <Content>
                <Carousel {...settings}>
                    <Wrap>
                        <img src="/images/movie1.jpg" />
                    </Wrap>
                    <Wrap>
                        <img src="/images/movie2.jpg" />
                    </Wrap>
                    <Wrap>
                        <img src="/images/movie3.jpg" />
                    </Wrap>
                    <Wrap>
                        <img src="/images/movie4.jpg" />
                    </Wrap>
                    <Wrap>
                        <img src="/images/movie5.jpg" />
                    </Wrap>
                    <Wrap>

                    </Wrap>
                </Carousel>
            </Content>
            <Header>Recommended for You</Header>
            <Content>
                <Carousel {...settings}>
                    <Wrap>
                        <img src="/images/movie1.jpg" />
                    </Wrap>
                    <Wrap>
                        <img src="/images/movie2.jpg" />
                    </Wrap>
                    <Wrap>
                        <img src="/images/movie3.jpg" />
                    </Wrap>
                    <Wrap>
                        <img src="/images/movie4.jpg" />
                    </Wrap>
                    <Wrap>
                        <img src="/images/movie5.jpg" />
                    </Wrap>
                    <Wrap>

                    </Wrap>
                </Carousel>
            </Content>
            <Header>Continue watching</Header>
            <Content>
                <Carousel {...settings}>
                    <Wrap>
                        <img src="/images/movie1.jpg" />
                    </Wrap>
                    <Wrap>
                        <img src="/images/movie2.jpg" />
                    </Wrap>
                    <Wrap>
                        <img src="/images/movie3.jpg" />
                    </Wrap>
                    <Wrap>
                        <img src="/images/movie4.jpg" />
                    </Wrap>
                    <Wrap>
                        <img src="/images/movie5.jpg" />
                    </Wrap>
                    <Wrap>

                    </Wrap>
                </Carousel>
            </Content>
            <Header>What to watch tonight</Header>
            <Content>
                <Carousel {...settings}>
                    <Wrap extra>
                        <img src="/images/avatar.jpg" />
                    </Wrap >
                    <Wrap extra>
                        <img src="/images/ahs.jpg" />
                    </Wrap>
                    <Wrap extra>
                        <img src="/images/obcy.jpg" />
                    </Wrap>
                    <Wrap extra>
                        <img src="/images/straznicy.jpg" />
                    </Wrap>
                    <Wrap extra>
                        <img src="/images/wakanda.jpg" />
                    </Wrap>
                    <Wrap extra>
                        <img src="/images/x-men.jpg" />
                    </Wrap>
                </Carousel>
            </Content>
        </Container>
    )
}

export default Movies;