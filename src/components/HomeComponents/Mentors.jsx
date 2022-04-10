import React  from 'react'
import imgCard2 from '../../assests/curso2.jpg'


function Mentors() {
  return (
    <>
        <div className="container profesores my-5 ">
            <div className="justify-content-center  text-center my-5">
                <h3>Conoce a nuestros Docentes</h3>
            </div>
            <div className="row d-flex justify-content-center ">
                <div className="itemMentorImg col-10 col-md-5 col-lg-3 text-center d-flex flex-column justify-content-center align-items-center">
                    <img src={imgCard2} alt="" className="bd-placeholder-img rounded-circle mt-2 mb-3" width="120" height="120" />
                    <h4>Jesus Chimbipuma</h4>
                    <p className="text-center ">Ingeniero Mecatronico. Docente de robotica. Especializacion en control</p>
                </div>
                <div className="itemMentorImg col-10 col-md-5 col-lg-3 text-center d-flex flex-column justify-content-center align-items-center">
                    <img src={imgCard2} alt="" className="bd-placeholder-img rounded-circle mt-2 mb-3" width="120" height="120" />
                    <h4>Jesus Chimbipuma</h4>
                    <p className="text-center ">Ingeniero Mecatronico. Docente de robotica. Especializacion en control</p>
                </div>
                <div className="itemMentorImg col-10 col-md-5 col-lg-3 text-center d-flex flex-column justify-content-center align-items-center">
                    <img src={imgCard2} alt="" className="bd-placeholder-img rounded-circle mt-2 mb-3" width="120" height="120" />
                    <h4>Jesus Chimbipuma</h4>
                    <p className="text-center ">Ingeniero Mecatronico. Docente de robotica. Especializacion en control</p>
                </div>
                <div className="itemMentorImg col-10 col-md-5 col-lg-3 text-center d-flex flex-column justify-content-center align-items-center">
                    <img src={imgCard2} alt="" className="bd-placeholder-img rounded-circle mt-2 mb-3" width="120" height="120" />
                    <h4>Jesus Chimbipuma</h4>
                    <p className="text-center ">Ingeniero Mecatronico. Docente de robotica. Especializacion en control</p>
                </div> 
            </div>                       
        </div>
        <hr className="featurette-divider mt-5"></hr>
    </>

  )
}

export default Mentors