import React from 'react'
import imgSpark from '../../assests/imgSpark.png'
import imgMakeX from '../../assests/imgMakeX.png'
import imgGame from '../../assests/imgGame.png'
import imgHalloween from '../../assests/imgHalloween.jpg'


function CompetitionComp() {
  return (
    <>
        <div className="container-fluid">
            <div className="row bg-secondary">
                <div className="d-flex flex-column justify-content-evenly col-12 col-sm-6 px-5 text-white">
                    <h2 className="pt-3">
                        <strong>Entrena con nuestros ganadores del MakeX Spark Competition</strong>
                    </h2>
                    <div className="d-flex justify-content-center col-11 py-3 py-lg-1">
                        <button type="button" className="btn btn-info rounded-pill px-5 border border-primary" style={{fontWeight:"600"}}>Contactanos</button>
                    </div>
                    <h6 className="row py-3 py-lg-1 pb-lg-4">
                        <div className="d-flex justify-content-center col-6 py-3">
                            - Innovacion
                        </div>
                        <div className="d-flex justify-content-center col-6 py-3">
                            - Tecnologia
                        </div>
                        <div className="d-flex justify-content-center col-6 py-3">
                            - Creatividad
                        </div>
                        <div className="d-flex justify-content-center col-6 py-3">
                            - Ciencia
                        </div>
                    </h6>
                    
                </div>
                <div className="d-flex justify-content-center align-items-center col-12 col-sm-6 ">
                    <img className="w-75 w-md-auto  img-fluid " src={imgSpark}  alt="Logo Spark"  />
                </div>   
            </div>

            <div className="row bg-info">
                <div className="d-flex justify-content-center align-items-center col-12 col-sm-6 ">
                    <img className="w-75 w-md-auto  img-fluid my-5" src={imgMakeX}  alt="Logo MakeX"  />
                </div>   
                <div className="d-flex flex-column justify-content-evenly col-12 col-sm-6 px-5 text-white">
                    <h2 className="pt-3">
                        <strong>Entrena con nuestros ganadores del <br />MakeX Starter Robotic Competition</strong>
                    </h2>
                    <div className="d-flex justify-content-center col-11 py-3 py-lg-1">
                        <button type="button" class="btn btn-primary rounded-pill px-5 border border-primary" style={{fontWeight:"600"}}>Contactanos</button>
                    </div>
                    <h6 className="row py-3 py-lg-1 pb-lg-4">
                        <div className="d-flex justify-content-center col-6 py-3">
                            - Innovacion
                        </div>
                        <div className="d-flex justify-content-center col-6 py-3">
                            - Tecnologia
                        </div>
                        <div className="d-flex justify-content-center col-6 py-3">
                            - Creatividad
                        </div>
                        <div className="d-flex justify-content-center col-6 py-3">
                            - Ciencia
                        </div>
                    </h6>
                    
                </div>
                
            </div>

            <div className="row bg-success">
                <div className="d-flex flex-column justify-content-evenly col-12 col-sm-6 px-5 ">
                    <h2 className="pt-3">
                        <strong>Entrena con nuestros ganadores del la competencia Game Design</strong>
                    </h2>
                    <div className="d-flex justify-content-center col-11 py-3 py-lg-1">
                        <button type="button" class="btn btn-info rounded-pill px-5 border border-primary" style={{fontWeight:"600"}}>Contactanos</button>
                    </div>
                    <h6 className="row py-3 py-lg-1 pb-lg-4">
                        <div className="d-flex justify-content-center col-6 py-3">
                            - Innovacion
                        </div>
                        <div className="d-flex justify-content-center col-6 py-3">
                            - Tecnologia
                        </div>
                        <div className="d-flex justify-content-center col-6 py-3">
                            - Creatividad
                        </div>
                        <div className="d-flex justify-content-center col-6 py-3">
                            - Ciencia
                        </div>
                    </h6>
                    
                </div>
                <div className="d-flex justify-content-center align-items-center col-12 col-sm-6 ">
                    <img className="w-75 w-md-auto  img-fluid mb-2" src={imgGame}  alt="Logo Game Design"  />
                </div>   
            </div>

            <div className="row bg-dark py-5">
                <div className="d-flex justify-content-center align-items-center col-12 col-sm-6 ">
                    <img className="w-75 w-md-auto  img-fluid " src={imgHalloween}  alt="Logo Hallooween"  />
                </div>   
                <div className="d-flex flex-column justify-content-evenly col-12 col-sm-6 px-5 text-white ">
                    <h2 className="pt-3">
                        <strong>Entrena con nuestros ganadores del Torneo de Halloween Rabit Tech</strong>
                    </h2>
                    <div className="d-flex justify-content-center col-11 py-3 py-lg-4">
                        <button type="button" class="btn btn-info rounded-pill px-5 border border-primary" style={{fontWeight:"600"}}>Contactanos</button>
                    </div>
                    <h6 className="row py-3 py-lg-1 pb-lg-4">
                        <div className="d-flex justify-content-center col-6 py-3">
                            - Innovacion
                        </div>
                        <div className="d-flex justify-content-center col-6 py-3">
                            - Tecnologia
                        </div>
                        <div className="d-flex justify-content-center col-6 py-3">
                            - Creatividad
                        </div>
                        <div className="d-flex justify-content-center col-6 py-3">
                            - Ciencia
                        </div>
                    </h6>
                    
                </div>
                
            </div>
        </div>
    </>
  )
}

export default CompetitionComp