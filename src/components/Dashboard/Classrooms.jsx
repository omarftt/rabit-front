import React, {useState, useEffect} from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import {useNavigate,useLocation} from 'react-router-dom';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import useAuth from "../../hooks/useAuth";
import './Dashboard.css'


export const AllClassrooms = () => {

    const [classrooms, setClassrooms] = useState();
    const axiosPrivate = useAxiosPrivate();
    const [deleted, setDeleted] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const getClassrooms = async () => {
            try {
                const response = await axiosPrivate.get('/api/classroom/all',{
                    signal: controller.signal
                });
                console.log(response.data);
                isMounted && setClassrooms(response.data);
            } catch (err) {
                console.log(err);
                navigate('/login',{state:{from:location},replace:true});
            }
        };
        getClassrooms();
        return () => {
            isMounted = false;
            controller.abort();
        }

    },[deleted]);

    const deleteElement = async (classroomId) => {
        const controller = new AbortController();
        try {
            const response = await axiosPrivate.delete(`/api/classroom/${classroomId}`,{
                signal: controller.signal
            });
            console.log(response.data);
            setDeleted(deleted + 1);
            

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <article>
                <h3></h3>
                {classrooms?.length
                ?(
                    <ul className = 'Element'>
                        {classrooms.map((classroom,i) =>  
                            <li key={i}>
                                <div className='Element ElementSpace align-items-center justify-content-between'>
                                    <div>
                                        <div style={{fontSize:'20px'}}> <strong>{classroom.name}</strong></div>
                                        <br/> 
                                        <div style={{fontSize:'12px'}}>{classroom.description}</div>
                                    </div>
                                    <RemoveCircleIcon onClick={() => deleteElement(classroom._id) } className='mx-5 h-100' style={{width:'35px'}}/>
                                </div>
                            </li>
                        )}
                    </ul>
                ): <div className='Element ElementSpace align-items-center justify-content-between'>
                        <div>
                            <div style={{fontSize:'20px'}}> <strong>No hay salones de clase </strong></div>
                            <br/> 
                            <div style={{fontSize:'12px'}}>No se encontraron salones de clase registrados hasta el momento</div>
                        </div>
                    </div>
                }
                <br/>
            </article>
        </>
    )
}


export const ClassroomsPropios = (props) => {

    const [classrooms, setClassrooms] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    const [deleted, setDeleted] = useState(0);
    const {auth} = useAuth();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const getClassrooms = async () => {
            try {
                const response = await axiosPrivate.get('/api/classroom/user/current',{
                    signal: controller.signal
                });
                console.log(response.data); 
                isMounted && setClassrooms(response.data);
            } catch (err) {
                console.log(err);
                navigate('/login',{state:{from:location},replace:true});
            }
        };
        getClassrooms();
        return () => {
            isMounted = false;
            controller.abort();
        }

    },[deleted, props.cambio]);

    const deleteElement = async (classroomId) => {
        const controller = new AbortController();
        try {
            const response = await axiosPrivate.delete(`/api/classroom/${classroomId}`,{
                signal: controller.signal
            });
            console.log(response.data);
            setDeleted(deleted + 1);
            

        } catch (err) {
            console.log(err);
        }
    }

    const unenrollElement = async (classroomId) => {
        const controller = new AbortController();
        const email = auth.email;
        try {
            const response = await axiosPrivate.put(`/api/classroom/unenroll/${classroomId}`,
                JSON.stringify({email}),{
                signal: controller.signal
            });
            console.log(response.data);
            setDeleted(deleted + 1);
            

        } catch (err) {
            console.log(err);
        }
    }


    return (
        <>
            <article>
                <h3></h3>
                {classrooms?.length
                ?(
                    <ul className = 'Element'>
                        {classrooms.map((classroom,i) =>  
                            <li key={i}>
                                <div className='Element ElementSpace align-items-center justify-content-between'>
                                    <div>
                                        <div style={{fontSize:'20px'}}> <strong>{classroom.name}</strong></div>
                                        <br/> 
                                        <div style={{fontSize:'12px'}}>{classroom.description}</div>
                                    </div>
                                    {auth.roles.includes('Teacher')
                                    ?<RemoveCircleIcon onClick={() => deleteElement(classroom._id) } className='mx-5 h-100' style={{width:'35px'}}/>
                                    :<RemoveCircleIcon onClick={() => unenrollElement(classroom._id) } className='mx-5 h-100' style={{width:'35px'}}/>
                                    }
                                </div>
                            </li>
                        )}
                    </ul>
                ): <div className='Element ElementSpace align-items-center justify-content-between'>
                        <div>
                            <div style={{fontSize:'20px'}}> <strong>No hay salones de clase </strong></div>
                            <br/> 
                            <div style={{fontSize:'12px'}}>No se encontraron salones de clase registrados hasta el momento</div>
                        </div>
                    </div>
                }
                <br/>
            </article>
        </>
    )
}



export const StudentsPropios = () => {

    const [classrooms, setClassrooms] = useState();
    const [myStudents, setMyStudents] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const getMyStudents = async () => {
            try {
                const response = await axiosPrivate.get('/api/classroom/user/current',{
                    signal: controller.signal
                });
                console.log(response.data); 
                isMounted && setClassrooms(response.data);

                const currentClassrooms = response.data;
                let currentStudents = [];
                currentClassrooms.forEach(classroom => {
                    classroom.students.forEach(student => {
                        currentStudents.push([classroom.name, student]);
                    });
                }
                );
                console.log(currentStudents)
                setMyStudents(currentStudents);


            } catch (err) {
                console.log(err);
                navigate('/login',{state:{from:location},replace:true});
            }
        };
        getMyStudents();

        console.log('mis estudiantes',myStudents)
        return () => {
            isMounted = false;
            controller.abort();
        }

    },[]);

    return (
        <>
            <article>
                <h3></h3>
                {myStudents?.length
                ?(
                    <ul className = 'Element'>
                        {myStudents.map((myStudent,i) =>  
                            <li key={i}>
                                <div className='Element ElementSpace align-items-center justify-content-between'>
                                    <div>
                                        <div style={{fontSize:'20px'}}> <strong>{myStudent[1].name}</strong></div>
                                        <br/> 
                                        <div style={{fontSize:'12px'}}>{myStudent[1].email}</div>
                                        <br/> 
                                        <div style={{fontSize:'12px'}}>{myStudent[0]}</div>
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                ): <div className='Element ElementSpace align-items-center justify-content-between'>
                        <div>
                            <div style={{fontSize:'20px'}}> <strong>No tienes estudiantes inscritos </strong></div>
                            <br/> 
                            <div style={{fontSize:'12px'}}>No se encontraron estudiantes inscritos en ninguna de tus clases hasta el momento</div>
                        </div>
                    </div>
                }
                <br/>
            </article>
        </>
    )
}
