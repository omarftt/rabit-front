import React from 'react'
import studentRabit from '../../assests/studentOpinion.png'

function Students() {
  return (
    <>
        <div className="nuestros_estudiantes container-fluid my-5">
            <div className="row  align-items-center text-center ">
                <h3>¿Que opinan nuestro Estudiantes?</h3>
            </div>  
            <div className="row align-items-center text-center" >
                <div className="col-lg-5 my-5">
                    <img style={{height: "40vh"}} src={studentRabit} alt="rabit Student"/>
                </div>
                <div className="col-lg-6">
                    Por completar
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Students