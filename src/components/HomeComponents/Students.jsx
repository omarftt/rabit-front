import React, {useState,useEffect} from 'react'
import studentRabit from '../../assets/studentOpinion.png'
import iconoStudent from '../../assets/iconoStudent.png'
import iconoStudent1 from '../../assets/iconoStudent1.png'
import iconoStudent2 from '../../assets/iconoStudent2.png'
import iconoStudent3 from '../../assets/iconoStudent3.png'
import iconoStudent4 from '../../assets/iconoStudent4.png'
import {CaretRightOutlined,CaretLeftOutlined } from '@ant-design/icons'

function Students() {
    const [student,setStudent] = useState(0);
    const [allStudents,setAllStudents] = useState([]);


    const createStudents = () => {
        const studentsToPut = [{
                id: 20001,
                name: 'Emilia Campos',
                imagen: iconoStudent1,
                description: 'Ser parte de esta familia para mi es muy importante, porque en este lugar puedo ampliar mis conocimientos de robótica y he podido ganar diversas competencias nacionales y mundiales.',
            }, {
                id: 20002,
                name: 'Anderson Martinez',
                imagen: iconoStudent2,
                description: 'Ser parte del taller de videojuegos me ayudo a entender la programacion de forma divertida.',
            },{
                id: 20003,
                name: 'Nicolas Castro',
                imagen: iconoStudent3,
                description: 'Al terminar cada taller me siento satisfecho porque aprendo cosas nuevas. Además, académicamente he reforzado los cursos de matemática y mi creatividad se ha desarrollado, expresándolos en los mini proyectos',
            },{
                id: 20004,
                name: 'Joaquim Casto',
                imagen: iconoStudent4,
                description: 'Los talleres son entretenidos y me ayudan a aprender como programar y armar robots. Pertenecer a la familia de Rabit Tech me da alegría, ya que logro aprender cada día más y me ayuda a cumplir mis sueños.',
            }
          ]
  
        setAllStudents(studentsToPut)
    };

    useEffect( () => {
        createStudents();
        
    },[]);


    const studentsSaved = allStudents.slice(0); 
    

  return (
    <>
        <div className="nuestros_estudiantes container-fluid my-5">
            <div className="row  align-items-center text-center ">
                <h3 className='my-4 pb-2'>¿Que opinan nuestro Estudiantes?</h3>
            </div>  
            <div className="row align-items-center text-center mt-1 mb-5 pb-2" >
                <div className="col-lg-4 my-5 mx-3">
                    <img style={{height: "45vh"}} src={studentRabit} alt="rabit Student"/>
                </div>
                <div className="col-lg-7 row d-flex align-items-center justify-content-center my-3 "  >
                    <div className="image_buttons col-1">
                        <div>
                            { (student >0) &&(
                                <button onClick={()=>setStudent(student-1)} className="btn btn-primary rounded-circle align-items-center "><CaretLeftOutlined  className='pb-1'/></button>
                            )}
                        </div>
                    </div>
                    <div className='image_slider d-flex flex-column col-8 align-items-center justify-content-between border border-2 rounded-3 border-dark p-5 p-md-3 m-1 ' style={{height: "50vh"}}>
                        <img  src={studentsSaved[student] === undefined ?  iconoStudent : studentsSaved[student].imagen  } alt="icono Student" className='my-2 my-md-0 d-none d-md-block' style={{height: "18vh", width:"18vh"}}/>
                        <p style={{fontSize: "3.5vh"}}><strong>{studentsSaved[student] === undefined ?  '' : studentsSaved[student].name }</strong></p>
                        <p  style={{fontSize: "1.8vh", width:"35vw"}}>{studentsSaved[student] === undefined ? '': studentsSaved[student].description }</p>
                    </div> 
                    <div className="image_buttons col-1">
                        <div>
                            { (student < (studentsSaved.length-1)) &&(
                                <button onClick={()=>setStudent(student+1)} className="btn btn-primary rounded-circle"><CaretRightOutlined  className='pb-1'/></button>
                            )}
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    
    </>
  )
}

export default Students