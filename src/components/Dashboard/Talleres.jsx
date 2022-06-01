import React, {useState, useEffect} from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import {useNavigate,useLocation} from 'react-router-dom';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import useAuth from "../../hooks/useAuth";
import './Dashboard.css'


export const AllTalleres = (props) => {

    const [talleres, setTalleres] = useState();
    const axiosPrivate = useAxiosPrivate();
    const [deleted, setDeleted] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const {auth} = useAuth();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const getTalleres = async () => {
            try {
                const response = await axiosPrivate.get('/api/taller',{
                    signal: controller.signal
                });
                console.log(response.data);
                isMounted && setTalleres(response.data);
            } catch (err) {
                console.log(err);
                navigate('/login',{state:{from:location},replace:true});
            }
        };
        getTalleres();
        return () => {
            isMounted = false;
            controller.abort();
        }

    },[deleted]);

    const enrollElement = async (tallerId) => {
        const controller = new AbortController();
        const email = auth.email;
        try {
            const response = await axiosPrivate.put(`/api/taller/enroll/current/${tallerId}`,
                JSON.stringify({email}),{
                signal: controller.signal
            });
            console.log(response.data);
            setDeleted(deleted + 1);
            props.func()
            

        } catch (err) {
            console.log(err);
        }
    }

    const deleteElement = async (tallerId) => {
        const controller = new AbortController();
        try {
            const response = await axiosPrivate.delete(`/api/taller/${tallerId}`,{
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
                {talleres?.length
                ?(
                    <ul className = 'Element' style={{listStyleType: "none"}} >
                        {talleres.map((taller,i) =>  
                            <li key={i}>
                                <div className='Element ElementSpace align-items-center justify-content-between'>
                                    <div>
                                        <div style={{fontSize:'20px'}}> <strong>{taller.name}</strong></div>
                                        <br/> 
                                        <div style={{fontSize:'12px'}}>{taller.description}</div>
                                    </div>
                                    {auth.roles.includes('Admin')
                                    ?<RemoveCircleIcon onClick={() => deleteElement(taller._id) } className='mx-5 h-100' style={{width:'35px'}}/>
                                    :<AddToQueueIcon onClick={() => enrollElement(taller._id) } className='mx-5 h-100' style={{width:'35px'}}/>
                                    }
                                    
                                </div>
                            </li>
                        )}
                    </ul>
                ): <div className='Element ElementSpace align-items-center justify-content-between'>
                        <div>
                            <div style={{fontSize:'20px'}}> <strong>No hay talleres </strong></div>
                            <br/> 
                            <div style={{fontSize:'12px'}}>No se encontraron talleres registrados hasta el momento</div>
                        </div>
                    </div>
                }
                <br/>
            </article>
        </>
    )
}


export const TalleresPropios = (props) => {

    const [talleres, setTalleres] = useState();
    const axiosPrivate = useAxiosPrivate();
    const [deleted, setDeleted] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const {auth} = useAuth();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getOwnTalleres = async () => {
            try {
                const response = await axiosPrivate.get('/api/taller/user/unique',{
                    signal: controller.signal
                });
                console.log(response.data);
                isMounted && setTalleres(response.data);
            } catch (err) {
                console.log(err);
                navigate('/login',{state:{from:location},replace:true});
            }
        };
        getOwnTalleres();
        return () => {
            isMounted = false;
            controller.abort();
        }

    },[deleted, props.cambio]);

    const unenrollElement = async (tallerId) => {
        const controller = new AbortController();
        const email = auth.email;
        try {
            const response = await axiosPrivate.put(`/api/taller/unenroll/${tallerId}`,
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
                {talleres?.length
                ?(
                    <ul className = 'Element' style={{listStyleType: "none"}} >
                        {talleres.map((taller,i) =>  
                            <li key={i}>
                                <div className='Element ElementSpace align-items-center justify-content-between'>
                                    <div>
                                        <div style={{fontSize:'20px'}}> <strong>{taller.name}</strong></div>
                                        <br/> 
                                        <div style={{fontSize:'12px'}}>{taller.description}</div>
                                    </div>
                                    <RemoveCircleIcon onClick={() => unenrollElement(taller._id) } className='mx-5 h-100' style={{width:'35px'}}/>
                                </div>
                            </li>
                        )}
                    </ul>
                ): <div className='Element ElementSpace align-items-center justify-content-between'>
                        <div>
                            <div style={{fontSize:'20px'}}> <strong>No hay talleres </strong></div>
                            <br/> 
                            <div style={{fontSize:'12px'}}>No se encontraron talleres registrados hasta el momento</div>
                        </div>
                    </div>
                }
                <br/>
            </article>
        </>
    )
}
