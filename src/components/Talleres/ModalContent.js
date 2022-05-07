import React,{useState} from 'react'
import { Modal, Button  } from 'react-bootstrap'
import Logo from '../../assests/Logo.png'
import '../../icomoon/style.css'
import './Modal.css'

function ModalContent() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <Button variant="primary" className='btn btn-primary rounded-3 col-6 align-items-end' onClick={handleShow}>
              Ver Taller
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <div className="row" style={{width:" 320px;"}}>
                    <div className="col-3">
                        <img src={Logo} alt=""/>
                    </div>
                    <div className="col-8 text-center">
                        <h2>ROBÓTICA CON MBOT  KIDS</h2>
                    </div>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="col text-center">
                    <p>Aprende y diviértete programando robots con los <strong>CAMPEONES INTERNACIONALES</strong> del <strong>"CAMPEONATO WARC 2021"</strong> y prepárate para la competición de <strong>MAKEX STARTER 2022</strong></p>
                </div>
                <div className="row">
                    <div className="col-2" >
                      <div className="icon iconModal d-flex align-items-center justify-content-center"> <span className="icon-connection-full"></span></div>
                      <div className="icon iconModal d-flex align-items-center justify-content-center"> <span className="icon-calendar"></span></div>
                      <div className="icon iconModal d-flex align-items-center justify-content-center"> <span className="icon-male"></span></div>
                      <div className="icon iconModal d-flex align-items-center justify-content-center"> <span className="icon-coin-dollar"></span></div>
                      <div className="icon iconModal d-flex align-items-center justify-content-center"> <span className="icon-wrench"></span></div>
                    </div>
                    <div className="col" style={{marginTop: "12px;"}}>
                        <p>NIVELES: 08</p>
                        <p>Horas/ nivel 12 h</p>
                        <p>INICIO: Mayo</p>
                        <p>EDAD: 8 a 13 años</p>
                        <p>INVERSIÓNN/nivel: S/ 199.00</p>
                        <p>INVERSIÓNN/8 niveles: S/ 1499.00</p>
                        <p>MATERIALES:MBOT 1.0</p>
                    </div>
                </div>  
                
            </Modal.Body>
            <Modal.Footer>
                <div className="col">
                    <span className="ico icoModal icon-gmailwhatsapp1"></span><span>965 764 366</span> <br/>
                    <span className="ico icoModal icon-gmail"></span><span>rabit.informes@gmail.com</span> <br/>
                </div>
              </Modal.Footer>
        </Modal>
    </>
  )
}

export default ModalContent