import React,{useState} from 'react'
import { Modal, Button  } from 'react-bootstrap'
import Logo from '../../assets/Logo.png'
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PaidIcon from '@mui/icons-material/Paid';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ConstructionIcon from '@mui/icons-material/Construction';
import '../../assets/icomoon/style.css'
import './Modal.css'

function ModalContent(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" className='btn btn-primary rounded-3 col-6 align-items-end' onClick={handleShow}>
                Ver Taller
            </Button>
            <Modal show={show} style={{backdropFilter:"blur(5px)"}} onHide={handleClose}>
                <Modal.Header closeButton className="fondoUpper1 border border-0"  >
                    <div className="row d-flex align-items-end" style={{width:" 320px;"}}>
                        <div className="col-3">
                            <img src={Logo} alt=""/>
                        </div>
                        <div className="col-8 text-center">
                            <h3 className='text-white'><strong>{props.name}</strong></h3>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body className="fondoUpper1 border border-0">
                    <div className="col text-center">
                        <p className='text-white mx-4' style={{textAlign:"justify"}}>{props.description}</p>
                    </div>
                    <div className="row">
                        <div className='d-flex text-white mx-4'>
                            <LinearScaleIcon className='mx-3'/>
                            <p>Numero de niveles : {props.numeroNiveles}</p>
                        </div>
                        <div className='d-flex text-white mx-4'>
                            <WatchLaterIcon className='mx-3'/>
                            <p>Horas/nivel : {props.hoursPerLevel}</p>
                        </div>
                        <div className='d-flex text-white mx-4'>
                            <PlayCircleFilledIcon className='mx-3'/>
                            <p>Fecha de inicio : {props.startDate}</p>
                        </div>
                        <div className='d-flex text-white mx-4'>
                            <ContactPageIcon className='mx-3'/>
                            <p>Edad recomendada : {props.ageRange}</p>
                        </div>
                        <div className='d-flex text-white mx-4'>
                            <PaidIcon className='mx-3'/>
                            <p>Inversión/nivel : {props.investmentFirst}</p>
                        </div>
                        <div className='d-flex text-white mx-4'>
                            <CurrencyExchangeIcon className='mx-3'/>
                            <p>Inversion por todos los niveles : {props.investmentTotal}</p>
                        </div>
                        <div className='d-flex text-white mx-4'> 
                            <ConstructionIcon className='mx-3'/>
                            <p>Materiales : {props.materials}</p>
                        </div>
                    </div> 
                    <div className="col d-flex justify-content-end mx-4 pb-3">
                        <button type="button" className="btn btn-dark rounded-pill text-white" style={{fontWeight:"600" }}>Contactar</button>
                    </div>
                    
                </Modal.Body>
                <Modal.Footer className="fondoLower1 border border-0 border-round">
                    
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalContent