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
                <h1 className='texto-encima-left text-white' style={{fontSize:'2.5vw'}} >Aprende de las mejores clases de programacion, robotica y videojuegos</h1>
                <img
                className="d-block w-100"
                src={SliderImg1}
                alt="First slide"
                height="600"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <h1 className='texto-encima-right text-white' style={{fontSize:'2.5vw'}}>Unete a la familia de los campeones en competencias de robotica</h1>
                <img
                className="d-block w-100"
                src={SliderImg2}
                alt="First slide"
                height="600"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <h1 className='texto-encima-left text-black' style={{fontSize:'2.5vw'}}>Encuentra los componentes necesarios para empezar en el mundo de la robotica</h1>
                <img
                className="d-block w-100"
                src={SliderImg3}
                alt="First slide"
                height="600"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
    )
}

export default Slider