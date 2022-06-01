import React from 'react'
import { useNavigate } from 'react-router-dom';
import './NewElementDash.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';

function NewElementDash({type}) {
  const navigate = useNavigate();

  const goingToForm = async () => {
      navigate(`/form/${type}`)
  }

  return (
        <>
            <div className='newElement newElementSpace align-items-center justify-content-between'>
                <div>
                  <div style={{fontSize:'20px'}}> <strong>Crear un nuevo {type}</strong></div>
                  <br/> 
                  <div style={{fontSize:'12px'}}>Pulse en el icono para crear un nuevo {type}</div>
                </div>
                <AddCircleIcon onClick={goingToForm } className='mx-5 h-100' style={{width:'35px'}}/>
            </div>
        </>
    
  )
}

export default NewElementDash