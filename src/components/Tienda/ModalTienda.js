import React,{useState} from 'react'
import { Modal, Button  } from 'react-bootstrap'
import './TiendaComp.css'


function ModalTienda(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" className='btn border-primary rounded-2 align-items-end py-3' style={{fontSize:'10px'}} onClick={handleShow}>
                Mas información
            </Button>
            <Modal show={show} size="md" style={{backdropFilter:"blur(5px)"}} onHide={handleClose}>
                <Modal.Body className='p-0 m-0 '>
                    <img className="w-100 border-secondary rounded-3" src={props.imgmodal}  alt="Logo"  />
                    
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalTienda