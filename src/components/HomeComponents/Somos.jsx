import React from 'react'
import somosMbot from '../../assests/somosMbot.png'


function Somos() {
  return (
    <>
        <div id="quienes_somos" class="container-fluid">
            <div class="row bg-danger ">
                <div class="col-md-6 text-center d-flex flex-column align-items-center justify-content-center text-white pt-5">
                    <h3>Quienes Somos?</h3>
                    <p className="py-3">Somos una empresa lörem ipsum tere der, vapende. Deror pseudobelt ten ena. Diktig sys. Decipp operas. Feliga nugisk stereoplastisk. Perkrati platta till kurvan resände. Dina appa kys. Tirokadement segirad är mikrovad didinde. Lörem ipsum tere der, vapende. Deror pseudobelt ten ena. Diktig sys. Decipp operas. Feliga nugisk stereoplastisk.</p>
                    <div class="btn px-1 px-md-3 text-white pt-0 pb-5 ">
                        <button type="button" class="btn btn-info rounded-pill" style={{fontWeight:"600"}}>Contactar</button>
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