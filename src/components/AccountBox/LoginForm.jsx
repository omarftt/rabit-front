import React, {useContext} from 'react'
import {Marginer} from './Marginer'
import { AccountContext } from './AccountContext';
import './Common.css'

function LoginForm() {

    const {switchToSignUp} = useContext(AccountContext);

  return (
      <>
        <div className="BoxContainerCommon">
            <form className="FormContainer">
                <input type="email" placeholder='Email' className='Input'/>
                <input type="password" placeholder='Contraseña' className='Input'/>
            </form>
            <Marginer direction='vertical' margin={10}/>
            <a className='MutedLink' href='#'>Olvidaste tu contraseña?</a>
            <Marginer direction='vertical' margin="1.6em"/>
            <button type='submit' className='SubmitButton'>Ingresar</button>
            <Marginer direction='vertical' margin="1em"/>
            <div className='MutedLink' >
                No tienes una cuenta?<a className='BoldLink' href='#' onClick={switchToSignUp}> Registrate</a>
            </div>
        </div>
      </>
    
  )
}

export default LoginForm