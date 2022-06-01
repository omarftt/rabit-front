import React, {useEffect, useState} from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { Modal } from 'react-bootstrap'
import './NewElementDash.css'

function MyVerticallyCenteredModal(props) {

  const [code, setCode] = useState('');
  const [submitedMsg, setSubmitedMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const axiosPrivate = useAxiosPrivate();

  const enrollElement = async (e) => {
    setSubmitedMsg('')
    setErrorMsg('')

    e.preventDefault();
    const controller = new AbortController();

    try {
      const response = await axiosPrivate.put('/api/classroom/enroll/current',
            JSON.stringify({code}),{
            signal: controller.signal
        });

      setSubmitedMsg('Se ha matriculado satisfactoriamente');
      console.log(response.data);
            

    } catch (err) {
      setErrorMsg('El codigo ingresado no es valido');
      console.log(err);
    }
  }



  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Matricula
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Ingrese el codigo del salon de la clase a la que desea matricularse. El codigo es brindado por el profesor del taller.
        </p>
        <form onSubmit= {enrollElement}>
          <input type="text"
              placeholder='Codigo del taller' 
              className='Input' 
              autoComplete="off"
              onChange = { (e) => setCode(e.target.value)}
              required
          />
          <button type='submit' className='SubmitButton my-3'>Inscribir</button>
        </form>

      </Modal.Body>

      {errorMsg && <Modal.Footer className="ErrorMessage mb-4 justify-content-center"><strong>{errorMsg}</strong></Modal.Footer>}
      {submitedMsg && <Modal.Footer className="SuccessMessage mb-4 justify-content-center"><strong>{submitedMsg}</strong></Modal.Footer>}
    </Modal>
  );
}


function NewEnrollDash({type, func}) {

  const [modalShow, setModalShow] = useState(false);


  return (
        <>
            <div className='newElement newElementSpace align-items-center justify-content-between'>
                <div>
                  <div style={{fontSize:'20px'}}> <strong>Matricularse en un nuevo {type}</strong></div>
                  <br/> 
                  <div style={{fontSize:'12px'}}>Pulse en el icono para matricularse en un nuevo salon de clase</div>
                </div>
                <AddCircleIcon onClick={() => setModalShow(true)} className='mx-5 h-100' style={{width:'35px'}}/>
            </div>

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => {
                setModalShow(false)
                func()}
              }
              
            />
        </>
    
  )
}

export default NewEnrollDash