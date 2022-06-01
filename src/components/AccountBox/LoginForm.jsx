import React, {useContext, useRef, useState, useEffect} from 'react'
import useAuth from '../../hooks/useAuth';
import axios from '../../api/axios'
import {Marginer} from './Marginer'
import {Link, useNavigate, useLocation} from 'react-router-dom';
import { AccountContext } from './AccountContext';
import './Common.css'

const LOGIN_URL = '/auth/local/login';

function LoginForm() {
 
    const {switchToSignUp} = useContext(AccountContext);
    const {setAuth} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/Dashboard'; 

    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect( () => {
      userRef.current.focus();
    }, [])

    useEffect(() => {
      setErrMsg('');
    },[email,password])

    const handleSubmit = async (e) => {
      e.preventDefault();

      try{
        const response = await axios.post(LOGIN_URL, 
                          JSON.stringify({email, password}),
                          {
                            headers: {'Content-Type': 'application/json'},
                            withCredentials:true
                          }
        );
        console.log(response);

        
        const accessToken = response?.data?.token;
        const roles = response?.data?.role;
        setAuth({email,password,roles,accessToken});
        console.log(roles)
        setEmail(''); 
        setPassword('');

        if (roles.includes('Teacher')) {
          navigate('/teacher');
        } else if (roles.includes('Student')) {
          navigate('/student');
        } else if(roles.includes('Admin')){
          navigate('/admin');
        } else {
          navigate('/login');
        }
        //navigate(from)
        
      } catch (err){
        console.log(err)
        if(!err?.response){
          setErrMsg('No Server response');
        } else if (err.response?.status === 400){
          setErrMsg('Missing Email or Password');
        } else if (err.response?.status === 401){
          setErrMsg('Unauthroized or invalid credentials');
        } else {
          setErrMsg('Login Failed');
        } 
        errRef.current.focus();
      }
    }

    return (
      <>
        
          <section className="BoxContainerCommon">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <form className="FormContainer" onSubmit= {handleSubmit}>
                <input type="email"
                       placeholder='Email' 
                       className='Input'
                       style={{width:'100%'}}
                       ref={userRef} 
                       autoComplete="off"
                       onChange = { (e) => setEmail(e.target.value)}
                       value = {email}
                       required
                />
                <input type="password" 
                       placeholder='Contraseña' 
                       className='Input'
                       style={{width:'100%'}}
                       autoComplete="off"
                       onChange = { (e) => setPassword(e.target.value)}
                       value = {password}
                       required
                />
                <button type='submit' className='SubmitButton my-3'>Ingresar</button>

            </form>
            <Marginer direction='vertical' margin={10}/>
            <a className='MutedLink' href='#'>Olvidaste tu contraseña?</a>
            <Marginer direction='vertical' margin="0.6em"/>
            
            <Marginer direction='vertical' margin="0.5em"/>
            <div className='MutedLink' >
                No tienes una cuenta?<a className='BoldLink' href='#' onClick={switchToSignUp}> Registrate</a>
            </div>
          </section>

      </>
    
    )
}

export default LoginForm