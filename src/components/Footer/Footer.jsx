import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Footer.css'
import Logo from "../../assets/Logo.png";
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <>
        <footer >
            <div className="row py-5  bg-info d-flex justify-content-between ">
                <div className="col-12 col-sm-3 text-center my-3 d-flex align-items-center justify-content-center">
                    <img src={Logo}  alt="Logo" width="auto" height="120" className=" mb-3 "/>
                </div>
                <div className="col-12 col-sm-4 d-flex flex-column align-items-start justify-content-center ">
                    <h5 classname='my-3 mx-2' style={{fontSize:'1.2rem'}}>Contactanos</h5>
                    <div className='d-flex align-items-start mt-2 mb-1' >
                        <PhoneInTalkIcon  className=' mx-2 text-white' />
                        <p className='mx-3' style={{fontSize:'0.9rem'}}> +51 999 999 999 </p>
                    </div>
                    <div className='d-flex align-items-start my-1'>
                        <CorporateFareIcon  className='mx-2 text-white' />
                        <p className='mx-3' style={{fontSize:'0.9rem'}}> Cal. 5 Mzn. N Lote 15 Av. Miguel Grau, San Martin de Porres , Lima</p>
                    </div>
                    <div className='d-flex align-items-start my-1'>
                        <EmailIcon  className=' mx-2 text-white' />
                        <p className='mx-3' style={{fontSize:'0.9rem'}}> rabit.informes@gmail.com</p>
                    </div>
                    
                </div>
                <div className="col-12 col-sm-3 d-flex flex-column align-items-start justify-content-center">
                    <h5 classname='my-3 mx-2' style={{fontSize:'1.2rem'}}>Descubre mas</h5>
                    <div className='d-flex align-items-start mt-2 mb-1' >
                        <Link to ='/Talleres' className='text-white' style={{textDecoration:"none"}}><p className='mx-3' style={{fontSize:'1rem'}}> Talleres </p></Link>
                    </div>
                    <div className='d-flex align-items-start my-1'>
                        <Link to ='/Competiciones' className='text-white' style={{textDecoration:"none"}}><p className='mx-3' style={{fontSize:'1rem'}}> Competiciones</p></Link>
                    </div>
                    <div className='d-flex align-items-start my-1'>
                        <Link to ='/Tienda' className='text-white' style={{textDecoration:"none"}}><p className='mx-3' style={{fontSize:'1rem'}}> Tienda</p></Link>
                    </div>
                    
                </div>
                <div className='d-flex justify-content-center mt-5'>
                    <p style={{fontSize:'0.75rem'}}>© RABITTECH 2022 Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer