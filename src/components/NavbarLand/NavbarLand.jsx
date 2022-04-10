import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import Logo from "../../assests/Logo.png"
import "./NavbarLand.style.css";




function NavbarLand() {

  return (
    <div className="div my-0 py-0 position-sticky top-0 start-0" style={{zIndex:5}} >
        <div className="container-fluid">
            <div className="row vw-100 bg-dark">
                <div className="col-12 my-0 py-0 vw-100 bg-dark text-white">
                    <div className="d-flex align-items-center">
                        <div className="px-3 px-md-5 letter-upper mx-5" >rabittech.informes@gmail.com</div>
                        <div className="px-3 px-md-5 letter-upper" >+51 999 999 999</div>
                        <div className="ms-auto px-3 letter-upper" >R</div>
                    </div>
                </div>
                <Navbar collapseOnSelect expand="lg" bg="primary" className="my-0">
                    <Container fluid>
                        <Navbar.Brand href="/"><img className=" me-auto mx-3" src={Logo}  alt="Logo" width="60" height="63" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            </Nav>
                            <Nav className="d-flex align-items-center">
                                <NavLink to="/" className="text-white px-3" style={{textDecoration:'none'}}>
                                    <strong>Inicio</strong>
                                </NavLink>
                                <NavLink to="/Talleres" className="text-white px-3" style={{textDecoration:'none'}}>
                                    <strong>Talleres</strong>
                                </NavLink>
                                <NavLink to="/Competiciones" className="text-white px-3" style={{textDecoration:'none'}}>
                                    <strong>Competiciones</strong>
                                </NavLink>
                                <NavLink to="/Tienda" className="text-white px-3" style={{textDecoration:'none'}}>
                                    <strong>Tienda</strong>
                                </NavLink>
                                <div className="btn px-3 px-md-3 text-white ">
                                    <button type="button" 
                                            className="border border-primary btn btn-success btn-outline-info rounded-pill py-2 px-4 text-black">
                                                <NavLink to="/Tienda" className="text-dark px-3" style={{textDecoration:'none'}}>
                                                    <strong>Ingresar</strong>
                                                </NavLink>
                                    </button>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    </div>
  )
}

export default NavbarLand