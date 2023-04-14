import React from 'react'
import NavbarLand from '../../components/NavbarLand/NavbarLand'
import MainCards from '../../components/HomeComponents/MainCards'
import Slider from '../../components/HomeComponents/Slider'
import Mentors from '../../components/HomeComponents/Mentors'
import Students from '../../components/HomeComponents/Students'
import Somos from '../../components/HomeComponents/Somos'
import Logros from '../../components/HomeComponents/Logros'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <>
      <NavbarLand/>
      <Slider/>
      <MainCards/>
      <Mentors/>
      <Students/>
      <Logros/>
      <Somos/>
      <Footer/>
      <a href="https://wa.me/51946648846?text=Hola!%20Estoy%20interesado%20en%20tu%20servicio" target="_blank">
        <img class="btn-whatsapp" src="https://clientes.dongee.com/whatsapp.png" width="64" height="64" alt="Whatsapp" ></img>
    
      </a>
    </>
    
  )
}

export default Home