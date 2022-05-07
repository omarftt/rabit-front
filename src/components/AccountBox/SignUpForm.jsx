import React, {useContext} from 'react'
import {Marginer} from './Marginer'
import { AccountContext } from './AccountContext';
import './Common.css'


function SignUpForm() {
    const {switchToSignIn} = useContext(AccountContext);
  return (
    <>
        <div className="BoxContainerCommon">
            <form className="FormContainer">
                <input type="text" placeholder='Nombres' className='Input'/>
                <input type="text" placeholder='Apellidos' className='Input'/>
                <input type="email" placeholder='Email' className='Input'/>
                <input type="password" placeholder='Contraseña' className='Input'/>
                <input type="password" placeholder='Repetir Contraseña' className='Input'/>
                <input type="text" placeholder='Codigo de estudiante' className='Input'/>
            </form>
            <Marginer direction='vertical' margin="1.6em"/>
            <button type='submit' className='SubmitButton'>Registrarse</button>
            <Marginer direction='vertical' margin="1em"/>
            <div className='MutedLink py-3' href="#">
                Ya tienes una cuenta?<a className='BoldLink ' href='#' onClick={switchToSignIn}> Ingresa aqui</a>
            </div>
        </div>
    </>
  )
}

export default SignUpForm