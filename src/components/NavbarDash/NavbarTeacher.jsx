import React, {useState, useEffect} from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import {useNavigate,useLocation} from 'react-router-dom';
import ProfileImg from '../../assets/profile.png';
import './NavbarDash.css'

function NavbarTeacher() {

  const axiosPrivate = useAxiosPrivate();
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getUser = async () => {
        try {
                const response = await axiosPrivate.get('/api/user/current/profile',{
                    signal: controller.signal
                });
                console.log(response.data.user);
                isMounted && setUser(response.data.user);
            } catch (err) {
                console.log(err);
                navigate('/login',{state:{from:location},replace:true});
            }
        };
        getUser();
        return () => {
            isMounted = false;
            controller.abort();
        }

    },[]);

  return (
      <>
        <div className='navbar-dash '>
            <div className='d-flex mx-5 align-items-center' style={{width:'300px'}}>
                <div >Bienvenido profesor: </div> 
                <h4 className='mx-2 mt-1'><strong>{user.name}</strong></h4>
            </div>
            <div className='wrapper-dash'>
                <img className='avatar-dash' src={
                                user.profileImg
                                ? user.profileImg
                                : ProfileImg } alt='taller'/>
            </div>
        </div>
      </>
    
  )
}

export default NavbarTeacher