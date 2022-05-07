import React from 'react';
import Logo from "../../assests/Logo.png";

function Footer() {
  return (
    <>
        <footer >
            <div className="row py-1 bg-primary">
                <div className="col-4 text-center text-end my-3">
                    <img src={Logo} alt="rabit logo" className="rabit-logo mb-3 h-100"/>
                </div>
                <div className="col-8 d-flex flex-column justify-content-center ">
                    <p className="icon icon-office  px-3"> CAL. 5 MZA. N LOTE. 15 APV. MIGUEL GRAU LIMA / LIMA / SAN MARTIN DE PORRES</p>
                    <p className="icon icon-whatsapp px-3"> +51 999 999 999 </p>
                    <p className="icon icon-facebook2  "><a className= "text-white px-3" href="https://www.facebook.com/RABITTECH"> www.facebook.com/RABITTECH</a></p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer