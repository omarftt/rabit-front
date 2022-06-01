import React, {useState, useEffect} from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import {useNavigate,useLocation} from 'react-router-dom';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import useAuth from "../../hooks/useAuth";
import './Dashboard.css'


export const AllHomeworks = () => {

    const [homeworks, setHomeworks] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const getHomeworks = async () => {
            try {
                const response = await axiosPrivate.get('/api/homework/all',{
                    signal: controller.signal
                });
                console.log(response.data);
                isMounted && setHomeworks(response.data);
            } catch (err) {
                console.log(err);
                navigate('/login',{state:{from:location},replace:true});
            }
        };
        getHomeworks();
        return () => {
            isMounted = false; 
            controller.abort();
        }

    },[]);


    return (
        <>
            <article>
                <h3></h3>
                {homeworks?.length
                ?(
                    <ul className = 'Element'>
                        {homeworks.map((homework,i) =>  
                            <li key={i}>
                                <div className='Element ElementSpace align-items-center justify-content-between'>
                                    <div>
                                        <div style={{fontSize:'20px'}}> <strong>{homework.name}</strong></div>
                                        <br/> 
                                        <div style={{fontSize:'12px'}}>{homework.description}</div>
                                    </div>
                                    <RemoveCircleIcon className='mx-5 h-100' style={{width:'35px'}}/>
                                </div>
                            </li>
                        )}
                    </ul>
                ): <div className='Element ElementSpace align-items-center justify-content-between'>
                        <div>
                            <div style={{fontSize:'20px'}}> <strong>No hay tareas de clase </strong></div>
                            <br/> 
                            <div style={{fontSize:'12px'}}>No se encontraron tareas de clase registradas hasta el momento</div>
                        </div>
                    </div>
                }
                <br/>
            </article>
        </>
    )
}

export const HomeworksPropios = () => {

    const [homeworks, setHomeworks] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    const [deleted, setDeleted] = useState(0);
    const {auth} = useAuth();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const getHomeworks = async () => {
            try {
                const response = await axiosPrivate.get('/api/homework/user/homework',{
                    signal: controller.signal
                });
                console.log(response.data); 
                isMounted && setHomeworks(response.data);
            } catch (err) {
                console.log(err);
                navigate('/login',{state:{from:location},replace:true});
            }
        };
        getHomeworks();
        return () => {
            isMounted = false;
            controller.abort();
        }

    },[deleted]);

    const deleteElement = async (homeworkId) => {
        const controller = new AbortController();
        try {
            const response = await axiosPrivate.delete(`/api/homework/${homeworkId}`,{
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
                {homeworks?.length
                ?(
                    <ul className = 'Element'>
                        {homeworks.map((homework,i) =>  
                            <li key={i}>
                                <div className='Element ElementSpace align-items-center justify-content-between'>
                                    <div>
                                        <div style={{fontSize:'20px'}}> <strong>{homework.name}</strong></div>
                                        <br/> 
                                        <div style={{fontSize:'12px'}}>{homework.description}</div>
                                    </div>
                                    {auth.roles.includes('Teacher')
                                    ?   <div>
                                            <a href={homework.fileAttachedURL} target="_blank">
                                                <FileDownloadIcon  className='mx-0 h-100' style={{width:'35px'}}/>
                                            </a>
                                            <RemoveCircleIcon  onClick={() => deleteElement(homework._id) } className='mx-5 h-100' style={{width:'35px'}}/>
                                            
                                        </div>
                                    :   <a href={homework.fileAttachedURL} target="_blank">
                                            <FileDownloadIcon  className='mx-5 h-100' style={{width:'35px'}}/>
                                        </a> 
                                    }
                                    
                                </div>
                            </li>
                        )}
                    </ul>
                ): <div className='Element ElementSpace align-items-center justify-content-between'>
                        <div>
                            <div style={{fontSize:'20px'}}> <strong>No hay tareas</strong></div>
                            <br/> 
                            <div style={{fontSize:'12px'}}>No se encontraron tareas registradas hasta el momento</div>
                        </div>
                    </div>
                }
                <br/>
            </article>
        </>
    )
}