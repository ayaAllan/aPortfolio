import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.style.css';
import slide1 from '../../assets/img/carousel/slide11.webp';
import slide2 from '../../assets/img/carousel/slide22.webp';
import slide3 from '../../assets/img/carousel/slide333.webp';
import './carousel.style.css';
import MyScrollDown from "../scroll-down/scroll-down.component";


const MyCarousel = () => {
    return (
        <>
            <Carousel controls={false} indicators interval={4500} pause={false}>
                <Carousel.Item>
                    <img
                    className="d-block w-100 custom-img"
                    src={slide1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 custom-img"
                    src={slide2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 custom-img"
                    src={slide3}
                    alt="Third slide"
                    />
                 </Carousel.Item>
            </Carousel>
            <MyScrollDown/>
        </>
    )
}

export default MyCarousel