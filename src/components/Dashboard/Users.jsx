import React, {useState, useEffect} from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import {useNavigate,useLocation} from 'react-router-dom';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import './Dashboard.css'


function Users() {

    const [users, setUsers] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/api/user/all',{
                    signal: controller.signal
                });
                console.log(response.data);
                isMounted && setUsers(response.data);
            } catch (err) {
                console.log(err);
                navigate('/login',{state:{from:location},replace:true});
            }
        };
        getUsers();
        return () => {
            isMounted = false;
            controller.abort();
        }

    },[]);


    return (
        <>
            <article>
                <h3>Lista de usuarios registrados</h3>
                {users?.length
                ?(
                    <ul className = 'Element'>
                        {users.map((user,i) =>  
                            <li key={i}>
                                <div className='Element ElementSpace align-items-center justify-content-between'>
                                    <div>
                                        <div style={{fontSize:'20px'}}> <strong>{user.name}</strong></div>
                                        <br/> 
                                        <div style={{fontSize:'12px'}}>{user.email}</div>
                                    </div>
                                    <RemoveCircleIcon className='mx-5 h-100' style={{width:'35px'}}/>
                                </div>
                            </li>
                        )}
                    </ul>
                ): <div className='Element ElementSpace align-items-center justify-content-between'>
                        <div>
                            <div style={{fontSize:'20px'}}> <strong>No hay usuarios </strong></div>
                            <br/> 
                            <div style={{fontSize:'12px'}}>No se encontraron usuarios registrados hasta el momento</div>
                        </div>
                    </div>
                }
                <br/>
            </article>
        </>
    )
}

export default Users