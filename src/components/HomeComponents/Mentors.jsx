import React  from 'react'
import imgCard2 from '../../assets/curso2.jpg'
import ImgTeacher1 from '../../assets/ImgTeacher1.jpg'
import ImgTeacher2 from '../../assets/ImgTeacher2.jpg'
import ImgTeacher3 from '../../assets/ImgTeacher3.jpg'
import ImgTeacher4 from '../../assets/ImgTeacher4.jpg'


function Mentors() {
  return (
    <>
        <hr className="featurette-divider mt-5"></hr>
        <div className="container profesores my-5 ">
            <div className="justify-content-center  text-center my-5 pt-3 pb-2">
                <h2 className='my-5'>Conoce a nuestros Docentes</h2>
            </div>
            <div className="row d-flex justify-content-center  my-5 pb-5">
                <div className="itemMentorImg col-10 col-md-5 col-lg-3 text-center d-flex flex-column justify-content-center align-items-center">
                    <img src={ImgTeacher1} alt="" className="bd-placeholder-img rounded-circle mt-2 mb-3" width="120" height="120" />
                    <h4>Jesus Lopez</h4>
                    <p className="text-center ">Ingeniero Mecatronico. Docente de robotica. Especializacion en control</p>
                </div>
                <div className="itemMentorImg col-10 col-md-5 col-lg-3 text-center d-flex flex-column justify-content-center align-items-center">
                    <img src={ImgTeacher2} alt="" className="bd-placeholder-img rounded-circle mt-2 mb-3" width="120" height="120" />
                    <h4>Roberto Casas</h4>
                    <p className="text-center ">Ingeniero Electronico. Docente de Arduino. Especializacion en electronica de microcontroladores</p>
                </div>
                <div className="itemMentorImg col-10 col-md-5 col-lg-3 text-center d-flex flex-column justify-content-center align-items-center">
                    <img src={ImgTeacher3} alt="" className="bd-placeholder-img rounded-circle mt-2 mb-3" width="120" height="120" />
                    <h4>Juan Suarez</h4>
                    <p className="text-center ">Ingeniero Industrial. Docente de videojuegos. Especializacion en programacion</p>
                </div>
                <div className="itemMentorImg col-10 col-md-5 col-lg-3 text-center d-flex flex-column justify-content-center align-items-center">
                    <img src={ImgTeacher4} alt="" className="bd-placeholder-img rounded-circle mt-2 mb-3" width="120" height="120" />
                    <h4>Jose Maldonado</h4>
                    <p className="text-center ">Profesor de ingles. Especializacion en idiomas para niños y adolescentes</p>
                </div> 
            </div>                       
        </div>
        <hr className="featurette-divider mt-5"></hr>
    </>

  )
}

export default Mentors