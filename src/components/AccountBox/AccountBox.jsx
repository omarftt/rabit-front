
import React , {useState} from 'react'
import { motion} from "framer-motion";
import { AccountContext } from "./AccountContext";
import styled from 'styled-components'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import Logo from "../../assests/Logo.png"
import './AccountBox.css'


const BackDrop = styled(motion.div)`
    width: 160%;
    height: 550px;
    position:absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(-20deg);
    top:-330px;
    left: -70px;
    background: rgb(2,0,36);
    background: linear-gradient(58deg, rgba(2,0,36,1) 0%, rgba(8,63,144,1) 35%, rgba(48,138,221,1) 100%);
`;

const backdropVariants = {
    expanded: {
      width: "233%",
      height: "1050px",
      borderRadius: "20%",
      transform: "rotate(-20deg)",
    },
    collapsed: {
      width: "160%",
      height: "550px",
      borderRadius: "50%",
      transform: "rotate(-20deg)",
    },
  };
  const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
  }



function AccountBox(props) {
    const [isExpanded,setExpanded] = useState(false);
    const [active,setActive] = useState("signin");


    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 -1500);
    }


    const switchToSignUp = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signup");
        },400);
    }

    const switchToSignIn = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signin");
        },400);
    }

    const contextValue = {switchToSignUp,switchToSignIn};


  return (
    <>
        <AccountContext.Provider value={contextValue}>

        <div className="BoxContainer">
            <div className="TopContainer ">
                <BackDrop 
                    initial={false} 
                    animate={isExpanded? "expanded":"collapse"} 
                    variants={backdropVariants}
                    transition={expandingTransition}
                />
                <img className=" me-auto mx-3  " src={Logo}  alt="Logo" width="60" height="63" style={{zIndex:1}} />
                {active === 'signin' && <div className="HeaderContainer align-items-center">
                                            <div className='HeaderText '>Bienvenidos</div>
                                            <div className='SmallText '>Ingresa tu usuario para continuar</div>
                                        </div>
                }
                {active === 'signup' && <div className="HeaderContainer align-items-center">
                                            <div className='HeaderText '>Crear una cuenta</div>
                                            <div className='SmallText '>Registra tus datos para continuar</div>
                                        </div>
                }
            </div>
            <div className="InnerContainer">
                {active === 'signin' && <LoginForm />}
                {active === 'signup' && <SignUpForm />}
            </div>
        </div>
        </AccountContext.Provider>
    </>
    
  )
}

export default AccountBox