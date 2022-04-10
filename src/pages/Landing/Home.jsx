import React from 'react'
import NavbarLand from '../../components/NavbarLand/NavbarLand'
import MainCards from '../../components/HomeComponents/MainCards'
import Slider from '../../components/HomeComponents/Slider'
import Mentors from '../../components/HomeComponents/Mentors'
import Students from '../../components/HomeComponents/Students'
import Somos from '../../components/HomeComponents/Somos'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <>
      <NavbarLand/>
      <Slider/>
      <MainCards/>
      <Mentors/>
      <Students/>
      <Somos/>
      <Footer/>
    </>
    
  )
}

export default Home