import React from 'react'
import './Login.css'
import AccountBox from '../../components/AccountBox/AccountBox'



function Login() {
  return (
      <>
        <div className='container-fluid LoginContainer' 
        style={{  background: "linear-gradient(58deg, rgba(2,0,36,1) 0%, rgba(8,63,144,1) 35%, rgba(48,138,221,1) 100%)"}}>
            <AccountBox/>
        </div>
      </>
    
  )
}

export default Login