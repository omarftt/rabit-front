import React from 'react'
import NavbarLand from '../../components/NavbarLand/NavbarLand'
import CompetitionComp from '../../components/Competition/CompetitionComp'
import TimeLine from '../../components/Competition/TimeLine'
import Footer from '../../components/Footer/Footer'

function Competitions() {
  return (
    <>
        <NavbarLand/>
        <TimeLine/>
        <CompetitionComp/>
        <Footer/>
    </>
  )
}

export default Competitions