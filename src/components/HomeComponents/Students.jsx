import React, {useState,useEffect} from 'react'
import studentRabit from '../../assests/studentOpinion.png'
import iconoStudent from '../../assests/iconoStudent.png'

function Students() {
    const [student,setStudent] = useState(0);
    const [allStudents,setAllStudents] = useState([]);


    const createStudents = () => {
        const studentsToPut = [{
                id: 20001,
                name: 'Estudiante 1',
                imagen: iconoStudent,
                description: 'Palabras del estudiante 1 . Palabras del estudiante 1 .Palabras del estudiante 1 Palabras del estudiante 1 .',
            }, {
                id: 20002,
                name: 'Estudiante 2',
                imagen: iconoStudent,
                description: 'Palabras dedl estudiante 2 . Palabras del estudiante 2 .Palabras del estudiante 2 Palabras del estudiante 2 .',
            },{
                id: 20003,
                name: 'Estudiante 3',
                imagen: iconoStudent,
                description: 'Palabras del estudiante 3 . Palabras del estudiante 3 .Palabras del estudiante 3 Palabras del estudiante 3',
            },{
                id: 20004,
                name: 'Estudiante 4',
                imagen: iconoStudent,
                description: 'Palaabras del estudiante 4 . Palabras del estudiante 4 .Palabras del estudiante 4 Palabras del estudiante 4',
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
                <h3>¿Que opinan nuestro Estudiantes?</h3>
            </div>  
            <div className="row align-items-center text-center" >
                <div className="col-lg-5 my-5">
                    <img style={{height: "40vh"}} src={studentRabit} alt="rabit Student"/>
                </div>
                <div className="col-lg-6 row d-flex align-items-center justify-content-center ">
                    <div className="image_buttons col-1">
                        <div>
                            { (student >0) &&(
                                <button onClick={()=>setStudent(student-1)} className="btn btn-primary rounded-circle">L</button>
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
                                <button onClick={()=>setStudent(student+1)} className="btn btn-primary rounded-circle">R</button>
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