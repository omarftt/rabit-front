import React, {useEffect, useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import ImgTalleres from '../../assets/ImgTalleres.png'
import Curso1 from '../../assets/curso.jpg'
import iconoTalleres1 from '../../assets/iconoTalleres1.png'
import iconoTalleres2 from '../../assets/iconoTalleres2.png'
import iconoTalleres3 from '../../assets/iconoTalleres3.png'
import Filter from '../Talleres/Filter'
import ModalContent from './ModalContent';
import { listaTalleresOri } from './listTalleres';


function ListItem(props) {

  
  return (
      <motion.div
      animate={{opacity:1}} 
      initial={{opacity:0}} 
      exist={{opacity:0}}
      layout 
      className="card  border border-3 rounded-3 border-success col-12 col-sm-8 col-md-5 col-lg-3 m-3 p-0" style={{width: "18rem"}}>
        <img src={props.imgPath} className="card-img-top rounded-bottom rounded-3" alt="..." />
        <div className="d-flex flex-column row card-body align-items-center justify-content-between" >
            <h5 className="card-title my-2">{props.name}</h5>
            <p className="card-text ">{props.description}</p>
            <ModalContent 
              name = {props.name}
              description = {props.description}
              numeroNiveles = {props.numeroNiveles}
              hoursPerLevel = {props.hoursPerLevel}
              startDate = {props.startDate}
              ageRange = {props.ageRange}
              investmentFirst = {props.investmentFirst}
              investmentTotal = {props.investmentTotal}
              materials = {props.materials}
              colorStyle = {props.colorStyle}
              imgPath = {props.imgPath}
              />
        </div>
      </motion.div>

  )
}

function TalleresComp() {
  const [talleres, setTalleres] = useState([]);
  const [filtered,setFiltered] = useState([]);
  const [activeFilter,setActiveFilter] = useState(0);

    
  const createTalleres = () => {
      const talleres = listaTalleresOri

      setTalleres(talleres)
      setFiltered(talleres)
  };


  useEffect( () => {
      createTalleres();
  },[]);

  const listTalleres = filtered.map((taller) =>
    <ListItem key={taller.id}
              name={taller.name} 
              description={taller.description}
              numeroNiveles = {taller.numeroNiveles}
              hoursPerLevel = {taller.hoursPerLevel}
              startDate = {taller.startDate}
              ageRange = {taller.ageRange}
              investmentFirst = {taller.investmentFirst}
              investmentTotal = {taller.investmentTotal}
              materials = {taller.materials}
              colorStyle = {taller.colorStyle}
              imgPath = {taller.imgPath}/>

  );

  

  return (
    <>
        
        <div className="container-fluid intro">
            <div className="row mt-2">
                <div className="d-flex flex-column justify-content-center align-items-center col-12 col-sm-6 px-5 ">
                    <h1 className="py-2 my-4 ">
                        <strong>Aprende de nuestros talleres</strong>
                    </h1>
                    <h6 className="pt-4 pb-5 w-75" style={{textAlign:"justify"}}>
                    En RABIT TECH, tenemos como objetivo promover la excelencia academia a través de nuestros 
                    colaboradores y brindar al estudiante una educación integral y de calidad para fortalecer 
                    las competencias que rigen este nuevo siglo.

                    </h6>
                    
                </div>
                <div className="d-flex justify-content-center align-items-center col-12 col-sm-6 ">
                    <img className="w-75 w-md-auto  img-fluid my-5" src={ImgTalleres}  alt="Logo"  />
                </div>
                

            </div>
        </div>
        <div className="container-fluid ">
            
            <div className="d-flex justify-content-center align-items-center flex-row">
                <hr className="bg-primary border-3 border-top border-primary position-relative top-50 " width="25%" />
                <div className="col-9 bg-primary my-5 py-4 px-4 rounded-3 border border-secondary border-2 text-white d-flex flex-column align-items-center">
                    
                    <h4 className='mb-5'><strong>Nuestra Metodología</strong></h4>
                    <div className='d-flex row justify-content-around'>
                      <div className='d-flex flex-column align-items-center col-12 col-md-5 col-lg-3 mx-2 px-2'>
                        <img src={iconoTalleres1} alt="IconTaller1" style={{maxHeight:'96px' , maxWidth:'96px'}}/>
                        <p><strong>Clases virtuales</strong></p>
                        <p style={{fontSize:'0.8rem', textAlign:"justify"}}>Talleres con espacios virtuales propios para aprender desde cualquier lugar.</p>
                      </div>
                      <div className='d-flex flex-column align-items-center col-12 col-md-5 col-lg-3 mx-2 px-2'>
                        <img src={iconoTalleres2} alt="IconTaller2" style={{maxHeight:'96px' , maxWidth:'96px'}}/>
                        <p><strong>Metodologia de EpC</strong></p>
                        <p style={{fontSize:'0.8rem', textAlign:"justify"}}>Desarrolla el pensamiento crítico para plantear y resolver problemas.</p>
                      </div>
                      <div className='d-flex flex-column align-items-center col-12 col-md-5 col-lg-3 mx-2 px-2'>
                        <img src={iconoTalleres3} alt="IconTaller3" style={{maxHeight:'96px' , maxWidth:'96px'}}/>
                        <p><strong>Grupos de pequeños</strong></p>
                        <p style={{fontSize:'0.8rem', textAlign:"justify"}}>Salones de clase con reducido numero de estudiantes, para una enseñanza personalizada</p>
                        
                      </div>

                    </div>
                        
                </div>
                <hr className="bg-primary border-3 border-top border-primary position-relative top-50 " width="25%" />
            </div>
            
            <div>
                <div className="d-flex justify-content-center align-items-center my-5 filter-container" >
                    <div className="arrow-left mx-3 "></div>
                    <Filter 
                      talleres={talleres} 
                      setFiltered={setFiltered} 
                      activeFilter={activeFilter}
                      setActiveFilter={setActiveFilter}
                    />
                    <div className="arrow-right mx-3"></div>
                </div>
                
            </div>
            <motion.div 
              animate={{opacity:1}} 
              initial={{opacity:0}} 
              exist={{opacity:0}}
              layout 
              className="row justify-content-center mb-5">
                <AnimatePresence>
                  <div className="row cards col-10 d-flex justify-content-center ">
                    {listTalleres}
                  </div>
                </AnimatePresence>
                
            </motion.div>
        </div>
    </>
  )
}

export default TalleresComp