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
                <div className="itemMentorImg col-10 col-md-5 col-lg-3 text-center d-flex flex-column justify-content-around align-items-center">
                    <div>
                        <img src={ImgTeacher1} alt="" className="bd-placeholder-img rounded-circle mt-2 mb-3" width="120" height="120" />
                        <h4>Kevin Tomairo</h4>
                    </div>
                    <p className="text-center">Profesor especialista en diseño de programación, control, automatización, idioma extranjero y metodología STEAM.</p>
                </div>
                <div className="itemMentorImg col-10 col-md-5 col-lg-3 text-center d-flex flex-column justify-content-around align-items-center">
                    <div>
                        <img src={ImgTeacher2} alt="" className="bd-placeholder-img rounded-circle mt-2 mb-3" width="120" height="120" />
                        <h4>Sebatián Zamata</h4>
                    </div>
                    <p className="text-center">Especialista en Instrumentación y Automatización Industrial. Mentor de programacion videojuegos y robótica educativa con experiencia en competiciones MakeX</p>
                </div>
                <div className="itemMentorImg col-10 col-md-5 col-lg-3 text-center d-flex flex-column justify-content-around align-items-center">
                    <div>
                        <img src={ImgTeacher3} alt="" className="bd-placeholder-img rounded-circle mt-2 mb-3" width="120" height="120" />
                        <h4>Miguel Fernández</h4>
                    </div>
                    <p className="text-center">Profesor especialista en Robótica Recretiva - Educativa y desarrollador de soluciones tecnológicas bajo la metodología STEAM</p>
                </div>
                <div className="itemMentorImg col-10 col-md-5 col-lg-3 text-center d-flex flex-column justify-content-between align-items-center">
                    <div>
                        <img src={ImgTeacher4} alt="" className="bd-placeholder-img rounded-circle mt-2 mb-3" width="120" height="120" />
                        <h4>Eduardo Cajaleon</h4>
                    </div>
                    <p className="text-center ">Profesor especialista en diseño de programación, control e implementación de partes electromecánicas y metodología STEAM. </p>
                    
                </div> 
            </div>                       
        </div>
        <hr className="featurette-divider mt-5"></hr>
    </>

  )
}

export default Mentors