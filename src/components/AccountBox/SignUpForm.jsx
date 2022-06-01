import React, {useContext, useState} from 'react'
import {Marginer} from './Marginer'
import { AccountContext } from './AccountContext';
import { useForm } from "react-hook-form";
import axios from '../../api/axios'
import './Common.css'


function SignUpForm() {
    const { register, handleSubmit } = useForm();
    const [errMsg, setErrMsg] = useState('');
    const [submitedMsg, setSubmitedMsg] = useState('');
    const {switchToSignIn} = useContext(AccountContext);

    const handleRegistration = async (data) => {
        setErrMsg('');
        setSubmitedMsg('');

        const {name,lastname,email,password,passwordRepeated,userCode} = data;
        let roles = [];
        const profileImg = '';
        if(password !== passwordRepeated){
            setErrMsg('Passwords do not match');
            return;
        }
        if(userCode.startsWith('S20')){
            roles = ['Student'];
        } else if(userCode.startsWith('T50')){
            roles = ['Teacher'];
        } else if(userCode.startsWith('A90')){
            roles = ['Admin'];
        } else {
            setErrMsg('User code is not valid');
            return;
        }

        try{
            const response = await axios.post('/auth/local/register',
                JSON.stringify({name,lastname,email,password,roles,profileImg}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
            console.log(response);
            setSubmitedMsg('El usuario se ha registrado correctamente');
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <>
            <div className="BoxContainerCommon">
                {errMsg && <div className="ErrorMessage mb-4 "><strong>{errMsg}</strong></div>}
                {submitedMsg && <div className="SuccessMessage mb-4 "><strong>{submitedMsg}</strong></div>}
                <form onSubmit={handleSubmit(handleRegistration)} className="FormContainer">
                    <input type="text" placeholder='Nombres' className='Input' id='name' {...register('name', { required: true })}/>
                    <input type="text" placeholder='Apellidos' className='Input' id='lastname' {...register('lastname', { required: true })}/>
                    <input type="email" placeholder='Email' className='Input' id='email' {...register('email', { required: true })}/>
                    <input type="password" placeholder='Contraseña' className='Input' id='password' {...register('password', { required: true })}/>
                    <input type="password" placeholder='Repetir Contraseña' className='Input' id='passwordRepeated' {...register('passwordRepeated', { required: true })}/>
                    <input type="text" placeholder='Codigo de estudiante' className='Input' id='userCode' {...register('userCode', { required: true })}/>
                    
                    <Marginer direction='vertical' margin="1.6em"/>
                    <button type='submit' className='SubmitButton'>Registrarse</button>
                    <Marginer direction='vertical' margin="1em"/>
                </form>
                
                <div className='MutedLink py-3' href="#">
                    Ya tienes una cuenta?<a className='BoldLink ' href='#' onClick={switchToSignIn}> Ingresa aqui</a>
                </div>
            </div>
        </>
    )
}

export default SignUpForm