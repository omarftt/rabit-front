import React, {useState} from 'react'
import { Carousel  } from 'react-bootstrap'
import SliderImg1 from '../../assets/SliderImg1.jpg'
import SliderImg2 from '../../assets/SliderImg2.jpg'
import SliderImg3 from '../../assets/SliderImg3.jpg'
import './Slider.css'

function Slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>

            <Carousel.Item className='contenedor'>
                <div class="container-slider">
                    <div class="image-container-slider1"></div>
                </div>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div class="container-slider">
                    <div class="image-container-slider2"></div>
                </div>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div class="container-slider">
                    <div class="image-container-slider3"></div>
                </div>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
    )
}

export default Slider