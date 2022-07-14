import React, {useState,useEffect} from 'react'
import studentRabit from '../../assets/studentOpinion.png'
import iconoStudent from '../../assets/iconoStudent.png'
import {CaretRightOutlined,CaretLeftOutlined } from '@ant-design/icons'

function Students() {
    const [student,setStudent] = useState(0);
    const [allStudents,setAllStudents] = useState([]);


    const createStudents = () => {
        const studentsToPut = [{
                id: 20001,
                name: 'Juan Sebastian',
                imagen: iconoStudent,
                description: 'El taller de robotica me ayudo a comprender los pasos fundamentales para crear mi robot y participar en competencias .',
            }, {
                id: 20002,
                name: 'Anderson Martinez',
                imagen: iconoStudent,
                description: 'Ser parte del taller de videojuegos me ayudo a entender la programacion de forma divertida.',
            },{
                id: 20003,
                name: 'Ricardo Lopez',
                imagen: iconoStudent,
                description: 'El taller de Arduino me ayudo a entender el funcionamiento de los microcontroladores y a crear una aplicacion totalmente funcional.',
            },{
                id: 20004,
                name: 'Juan Suarez',
                imagen: iconoStudent,
                description: 'Las clases de robotica avanzada me ayudo a entender los mejores algoritmos de programacion de robots.',
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
                <h3 className='my-5 pb-3'>¿Que opinan nuestro Estudiantes?</h3>
            </div>  
            <div className="row align-items-center text-center mt-1 mb-5 pb-2" >
                <div className="col-lg-4 my-5">
                    <img style={{height: "40vh"}} src={studentRabit} alt="rabit Student"/>
                </div>
                <div className="col-lg-7 row d-flex align-items-center justify-content-center ">
                    <div className="image_buttons col-1">
                        <div>
                            { (student >0) &&(
                                <button onClick={()=>setStudent(student-1)} className="btn btn-primary rounded-circle align-items-center "><CaretLeftOutlined  className='pb-1'/></button>
                            )}
                        </div>
                    </div>
                    <div className='image_slider d-flex flex-column col-8 align-items-center border border-2 rounded-3 border-dark p-5 m-1'>
                        <img  src={studentsSaved[student] === undefined ?  iconoStudent : studentsSaved[student].imagen  } alt="icono Student"/>
                        <h4>{studentsSaved[student] === undefined ?  '' : studentsSaved[student].name }</h4>
                        <p>{studentsSaved[student] === undefined ? '': studentsSaved[student].description }</p>
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