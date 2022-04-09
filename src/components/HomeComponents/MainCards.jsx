import React, {useState} from 'react'
import imgCard1 from '../../assests/curso.jpg'
import Arrow from '../../assests/Arrow.png'

function MainCards() {

    return (
        <>
            <div className="bienvenidos container-fluid my-4" >
                <div className="row justify-content-center align-items-center text-center " style={{height: "100px"}}>
                    <h3><strong>Bienvenidos a RABIT TECH</strong></h3>
                </div>  
                <div className="row justify-content-center " >
                    <div className="col-6 col-md-3 my-3  mx-3 mx-lg-0">
                        <div class="card border border-3 rounded-3 border-dark col-12 col-xl-11 p-0" >
                            <img src={imgCard1} class="card-img-top rounded-bottom rounded-3" alt="..."/>
                            <div class="d-flex row card-body align-items-center justify-content-center">
                                <h5 class="card-title my-3"><strong>TALLERES</strong></h5>
                                <p class="card-text">Conoce mas acerca de nuestros cursos de robotica, diseño de videojuegos, programacion, matematicas y otros.</p>
                                <div class="d-flex justify-content-end my-1 ">
                                    <button className="border border-0 bg-white"><img src={Arrow} alt="arrow" href='/'  /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 my-3  mx-3 mx-lg-0">
                        <div class="card border border-3 rounded-3 border-dark col-12 col-xl-11 p-0" >
                            <img src={imgCard1} class="card-img-top rounded-bottom rounded-3" alt="..."/>
                            <div class="d-flex flex-column row card-body align-items-center justify-content-center">
                                <h5 class="card-title my-3"><strong>COMPETICIONES</strong></h5>
                                <p class="card-text">Conoce mas acerca de nuestros cursos de robotica, diseño de videojuegos, programacion, matematicas y otros.</p>
                                <div class="d-flex justify-content-end my-1 ">
                                    <button className="border border-0 bg-white"><img src={Arrow} alt="arrow" href='/'  /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 my-3  mx-3 mx-lg-0">
                        <div class="card border border-3 rounded-3 border-dark col-12 col-xl-11 p-0" >
                            <img src={imgCard1} class="card-img-top rounded-bottom rounded-3" alt="..."/>
                            <div class="d-flex flex-column row card-body align-items-center justify-content-center">
                                <h5 class="card-title my-3"><strong>TIENDA</strong></h5>
                                <p class="card-text">Conoce mas acerca de nuestros cursos de robotica, diseño de videojuegos, programacion, matematicas y otros.</p>
                                <div class="d-flex justify-content-end my-1 ">
                                    <button className="border border-0 bg-white"><img src={Arrow} alt="arrow" href='/'  /></button>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>

            <hr class="featurette-divider"></hr>
        </>
        
    )
}

export default MainCards