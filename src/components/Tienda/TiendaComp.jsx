import React,{useEffect, useState} from 'react'
import imgTienda from '../../assets/TiendaRabit.png'
import CheckBox from './CheckBox'
import { motion, AnimatePresence } from "framer-motion";
import ModalTienda from './ModalTienda';
import './TiendaComp.css'
import { listaProductsOri } from './listProductos';


function ListItemTienda(props) {
  
    return (  
        <motion.div
        animate={{opacity:1}} 
        initial={{opacity:0}} 
        exist={{opacity:0}}
        layout 
        className="cardTienda border border-0 rounded-3 border-dark col-10 col-sm-8 col-md-5 col-lg-3 mx-3 my-4 p-0 ">

                <img src={props.imgfront} alt="producto1" className="bd-placeholder-img "  height="250"/>
                <div className="card-body d-flex flex-column justify-content-between">
                    <p className="card-text" style={{height:"40px"}} ><strong>{props.name}</strong></p>
                    <div className="d-flex justify-content-between align-items-center py-1 ">
                        <div className="btn-group col-4 mx-2">
                          <ModalTienda imgmodal={props.imgmodal}/>
                        </div>
                        <div className='col-6 d-flex flex-column align-items-start justify-content-around mx-4 px-2'>
                          <div className="letraTienda my-1 " style={{fontSize:'12px'}}>Costo:</div>
                          <div className='d-flex'>
                              <div class="letraTienda" style={{fontSize:'24px'}}><strong>S/. {props.precio}</strong></div>
                          </div>
                        </div>
                        
                    </div>
                </div>
        </motion.div>
    )
  }


function TiendaComp() {
    const [filters,setFilters] = useState([]);
    const [products,setProducts] = useState([]);
    const [filtered,setFiltered] = useState([]);

    const createProducts = () => {
        const productos = listaProductsOri
  
        setProducts(productos)
        setFiltered(productos)
    };


    useEffect( () => {
        createProducts();
        handleFilters(filters);
    },[]);

    useEffect(() => {
        showFilteredResults(filters);
    },[filters])

    const showFilteredResults = (filters) => {
        if(filters.length === 0){
            setFiltered(products)
        }else{
            const filteredResults = products.filter(product => {
                return filters.every(filter => {
                    return product.productCode.includes(filter)
                })
            })
            setFiltered(filteredResults)
        }
    }

    const handleFilters = (filters) => {
        const newFilters = [...filters]; 
        setFilters(newFilters);
    }
    
    const listProducts = filtered.map((product) => 
        <ListItemTienda 
          key={product.id} 
          name={product.name}
          precio={product.precio} 
          imgfront={product.imgfront}
          imgmodal={product.imgmodal}/>
        
    )

  return (
    <>  
        <section className="container">
            <div className="row py-5 text-center">
                  <h2><strong>Compra productos a precio de distribuidor</strong></h2>
            </div>
        </section>
        <div className="container-fluid "> 
            <div className="row bg-white ">
              <div className=" filtro col-md-3 d-flex justify-content-center text-white ">
                  <div className=" bg-warning border border-2 border-secondary rounded-3 py-3 px-4 ">
                    <div className="text-center">
                      <img src={imgTienda} alt="imagen_tienda" style={{maxHeight:"20vh" , maxWidth: "20vh"}} />
                    </div>
                    <h3 className="text-left my-3">Filtros</h3>
                    <CheckBox
                        handleFilters={filters => handleFilters(filters)}
                    />
                  </div>
              </div>
              <div className=" col-md-9 mt-2">
                  <div className=" bg-white mb-5 border border-1 border-warning rounded-3">
                    <div className="container px-0 my-4">
                        <div className="row d-flex justify-content-center g-3">
                          <AnimatePresence>
                              {listProducts}
                          </AnimatePresence>
                        </div>
                    </div>
                  </div>
              </div> 
            </div>
        </div>
    </>
  )
}

export default TiendaComp