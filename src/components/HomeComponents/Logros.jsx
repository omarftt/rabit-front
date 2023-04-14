import React from 'react'
import logrosMbot from '../../assets/logrosMbot.png'


function Logros() {
  return (
    <>
        <div className="container-fluid my-0">
            <div className="row d-flex justify-content-between" style={{backgroundColor:"#f9c635"}}>
                <div className='col-md-6 d-flex align-items-center justify-content-center p-0 b-0'>
                    <img className="w-100  w-md-auto  h-md-100 logros-imagen" src={logrosMbot} alt="logrosMbot" />
                </div>
                <div className="col-md-5 text-center d-flex flex-column align-items-center justify-content-center my-5 pt-5">
                    <h3><strong>Nuestros Logros</strong></h3>
                    <ul className="py-3">
                        <li>Campeones mundiales de MakeX Starter 2019</li>
                        <li>Campeones mundiales de MakeX Spark 2020 - Segundo lugar</li>
                        <li>Campeones mundiales de MakeX Starter 2021</li>
                        <li>Campeones mundiales de MakeX Spark 2022</li>
                    </ul>
                    <div className="btn px-1 px-md-3 text-white pt-0 pb-5 ">
                        <button type="button" className="btn btn-info rounded-pill" style={{fontWeight:"600"}}>Contactar</button>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Logros