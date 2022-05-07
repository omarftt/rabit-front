import React, {useEffect, useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import ImgTalleres from '../../assests/ImgTalleres.png'
import Curso1 from '../../assests/curso.jpg'
import Filter from '../Talleres/Filter'


function ListItem(props) {
  
  return (
      <motion.div
      animate={{opacity:1}} 
      initial={{opacity:0}} 
      exist={{opacity:0}}
      layout 
      className="card  border border-3 rounded-3 border-success col-12 col-sm-8 col-md-5 col-lg-3 m-3 p-0" style={{width: "18rem"}}>
        <img src={Curso1} className="card-img-top rounded-bottom rounded-3" alt="..." />
        <div className="d-flex flex-column row card-body align-items-center justify-content-between">
            <h5 className="card-title my-2">{props.name}</h5>
            <p className="card-text ">{props.description}</p>
            <a href="/" className="btn btn-primary rounded-3 col-6 align-items-end">Ver Taller</a>
        </div>         
      </motion.div>
  )
}

function TalleresComp() {
  const [talleres, setTalleres] = useState([]);
  const [filtered,setFiltered] = useState([]);
  const [activeFilter,setActiveFilter] = useState(0);

    
  const createTalleres = () => {
      const talleres = [{
            id: 10001,
            name: 'Robotica con mTiny',
            edadCode: [1] ,
            description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
          }, {
            id: 10002,
            name: 'Programación de videojuegos',
            edadCode: [2] ,
            description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
          },{
            id: 10003,
            name: 'Robotica Kids con mBot',
            edadCode: [2] ,
            description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
          },{
            id: 10004,
            name: 'Robotica con mBot',
            edadCode: [3] ,
            description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
          },{
            id: 10005,
            name: 'Mat Vit',
            edadCode: [3] ,
            description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
          },{
            id: 10006,
            name: 'Maker Kids con Halocode',
            edadCode: [3] ,
            description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
          },{
            id: 10007,
            name: 'Maker Kids con Arduino',
            edadCode: [3] ,
            description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
          },{
            id: 10008,
            name: 'Child Comunication',
            edadCode: [3] ,
            description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
          },{
            id: 10009,
            name: 'Robotica Teens con Arduino',
            edadCode: [4] ,
            description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
          },{
            id: 10010,
            name: 'Maker Teens con Halocode',
            edadCode: [4] ,
            description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
          },{
            id: 10011,
            name: 'Maker Teens con Arduino',
            edadCode: [4] ,
            description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
          }
        ]

      setTalleres(talleres)
      setFiltered(talleres)
  };


  useEffect( () => {
      createTalleres();
  },[]);

  const listTalleres = filtered.map((taller) =>
    <ListItem key={taller.id} name={taller.name} description={taller.description}/>
  );

  

  return (
    <>
        
        <div className="container-fluid intro">
            <div className="row mt-2">
                <div className="d-flex flex-column justify-content-center col-12 col-sm-6 px-5 ">
                    <h1 className="py-2 my-4">
                        <strong>Aprende de nuestros talleres</strong>
                    </h1>
                    <h6 className="pt-1 pb-5">
                        Lörem ipsum väggord tetrarad men dont. Juvis lusk doplagisk. Era suprakrati trer. 
                        Antida suprahära linde monopp i ösent. Lörem ipsum väggord tetrarad men dont. Juvis lusk doplagisk. Era suprakrati trer. 
                        Antida suprahära linde monopp i ösent.
                    </h6>
                    <div className="d-flex justify-content-center col-11">
                        <button type="button" className="btn btn-success btn-outline-info rounded-pill px-5 border border-success " style={{fontWeight:"600"}}>Ingresar</button>
                    </div>
                    
                </div>
                <div className="d-flex justify-content-center align-items-center col-12 col-sm-6 ">
                    <img className="w-75 w-md-auto  img-fluid my-5" src={ImgTalleres}  alt="Logo"  />
                </div>
                

            </div>
        </div>
        <div className="container-fluid ">
            
            <div className="d-flex justify-content-center align-items-center flex-row">
                <hr className="bg-primary border-3 border-top border-primary position-relative top-50 " width="25%" />
                <div className="col-9 bg-primary my-5 py-5 rounded-3 border border-primary text-white">
                    
                    <p className="px-4">Lörem ipsum väggord tetrarad men dont. Juvis lusk doplagisk. Era suprakrati trer. 
                        Antida suprahära linde monopp i ösent. </p>
                        
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