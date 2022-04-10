import React from 'react'
import imgCard1 from '../../assests/curso.jpg'
import Arrow from '../../assests/Arrow.png'
import { Link } from 'react-router-dom'

function MainCards() {

    return (
        <>
            <div className="bienvenidos container-fluid my-4" >
                <div className="row justify-content-center align-items-center text-center " style={{height: "100px"}}>
                    <h3><strong>Bienvenidos a RABIT TECH</strong></h3>
                </div>  
                <div className="row justify-content-center " >
                    <div className="col-6 col-md-3 my-3  mx-3 mx-lg-0">
                        <div className="card border border-3 rounded-3 border-dark col-12 col-xl-11 p-0" >
                            <img src={imgCard1} className="card-img-top rounded-bottom rounded-3" alt="..."/>
                            <div className="d-flex row card-body align-items-center justify-content-center">
                                <h5 className="card-title my-3"><strong>TALLERES</strong></h5>
                                <p className="card-text">Conoce mas acerca de nuestros cursos de robotica, diseño de videojuegos, programacion, matematicas y otros.</p>
                                <div className="d-flex justify-content-end my-1 ">
                                    <Link to="/Talleres" className="text-white px-3" style={{textDecoration:'none'}}>
                                        <button className="border border-0 bg-white"><img src={Arrow} alt="arrow" /></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 my-3  mx-3 mx-lg-0">
                        <div className="card border border-3 rounded-3 border-dark col-12 col-xl-11 p-0" >
                            <img src={imgCard1} className="card-img-top rounded-bottom rounded-3" alt="..."/>
                            <div className="d-flex flex-column row card-body align-items-center justify-content-center">
                                <h5 className="card-title my-3"><strong>COMPETICIONES</strong></h5>
                                <p className="card-text">Conoce mas acerca de nuestros cursos de robotica, diseño de videojuegos, programacion, matematicas y otros.</p>
                                <div className="d-flex justify-content-end my-1 ">
                                    <Link to="/Competiciones" className="text-white px-3" style={{textDecoration:'none'}}>
                                        <button className="border border-0 bg-white"><img src={Arrow} alt="arrow" /></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 my-3  mx-3 mx-lg-0">
                        <div className="card border border-3 rounded-3 border-dark col-12 col-xl-11 p-0" >
                            <img src={imgCard1} className="card-img-top rounded-bottom rounded-3" alt="..."/>
                            <div className="d-flex flex-column row card-body align-items-center justify-content-center">
                                <h5 className="card-title my-3"><strong>TIENDA</strong></h5>
                                <p className="card-text">Conoce mas acerca de nuestros cursos de robotica, diseño de videojuegos, programacion, matematicas y otros.</p>
                                <div className="d-flex justify-content-end my-1 ">
                                    <Link to="/Tienda" className="text-white px-3" style={{textDecoration:'none'}}>
                                        <button className="border border-0 bg-white"><img src={Arrow} alt="arrow" /></button>
                                    </Link>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>

        </>
        
    )
}

export default MainCards