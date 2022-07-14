import React from 'react'
import somosMbot from '../../assets/somosMbot.png'


function Somos() {
  return (
    <>
        <div className="container-fluid my-0">
            <div className="row bg-success py-5">
                <div className="col-md-6 text-center d-flex flex-column align-items-center justify-content-center text-white my-5 pt-5">
                    <h3><strong>¿Quienes Somos?</strong></h3>
                    <p className="py-3">Somos una organización que ofrece una propuesta educativa innovadora y tecnológica, dirigida a niños y adolescente, promoviendo el desarrollo óptimo de sus inteligencias múltiples, competencias y habilidades del siglo 21, a través de talleres y proyectos tecnológicos.</p>
                    <div className="btn px-1 px-md-3 text-white pt-0 pb-5 ">
                        <button type="button" className="btn btn-info rounded-pill" style={{fontWeight:"600"}}>Contactar</button>
                    </div>
                </div>
                <div className='col-md-6 d-flex align-items-center justify-content-center p-0 b-0'>
                    <img className="w-100  w-md-auto  h-md-100" src={somosMbot} alt="somosMbot" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Somos