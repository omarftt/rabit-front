import React,{useEffect, useState} from 'react'
import imgTienda from '../../assests/TiendaRabit.png'
import imgProducto from '../../assests/productN1.jpg'
import CheckBox from './CheckBox'
import { motion, AnimatePresence } from "framer-motion";


function ListItemTienda(props) {
  
    return (  
        <motion.div
        animate={{opacity:1}} 
        initial={{opacity:0}} 
        exist={{opacity:0}}
        layout 
        className="card border border-1 rounded-1 border-dark col-12 col-sm-8 col-md-5 col-lg-3 mx-2 my-3 p-0 " style={{width: "18rem"}}>

                <img src={imgProducto} alt="producto1" className="bd-placeholder-img "  height="250"/>
                <div className="card-body">
                    <p className="card-text">{props.name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <a href="index.html"><button type="button" className="btn btn-sm btn-outline-secondary">mas información</button></a>
                        </div>
                        <small className="text-primary">S/.199.00</small>
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
        const productos = [{
              id: 50001,
              name: 'mBot Basico',
              productCode: [2,3,8,9,10] ,
              description: 'Paquete de componentes de robotica basico mBot para niños ',
            }, {
              id: 50002,
              name: 'mBot 2.0',
              productCode: [2,3,9,10] ,
              description: 'Paquete de componentes de robotica avanzado mBot para jovenes',
            },{
              id: 50003,
              name: 'Sensor ultrasonico I',
              productCode: [1,4,8,9,10] ,
              description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            },{
              id: 50004,
              name: 'Sensor ultrasonico II',
              productCode: [4,8,9,10] ,
              description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            },{
              id: 50005,
              name: 'Chasis de mBot',
              productCode: [5,8,9,10] ,
              description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            },{
              id: 50006,
              name: 'Tornillos',
              productCode: [6,8,9,10] ,
              description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            },{
              id: 50007,
              name: 'mTiny',
              productCode: [3,7] ,
              description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            },{
              id: 50008,
              name: 'Sensor infrarrojo',
              productCode: [4,8,9,10] ,
              description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            },{
              id: 50009,
              name: 'Piezas para mBot',
              productCode: [6,8,9,10] ,
              description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            },{
              id: 50010,
              name: 'Bateria de Litio',
              productCode: [1,4,8,9,10] ,
              description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            },{
              id: 10011,
              name: 'Pilas recargables',
              productCode: [4,8,9,10] ,
              description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            }
          ]
  
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
        <ListItemTienda key={product.id} name={product.name}/>
        
    )

  return (
    <>
        <section className="container">
            <div className="row py-lg-5">
                <div className="col-lg-7 d-flex align-items-center justify-content-center">
                <h2>Compra Productos a precio distribuidor</h2>
                </div>
                <div className="col-lg-5 text-center">
                <img src={imgTienda} alt="imagen_tienda" style={{maxHeight:"40vh" , maxWidth: "40vh"}} />
                </div>
            </div>
        </section>
        <div className="container"> 
            <div className="row">
            <div className="col-md-3 d-flex justify-content-center ">
                <div className="filtro bg-gray rounded-3 py-3 px-4 ">
                    <h3 className="text-left my-3">Filtros</h3>
                    <CheckBox
                        handleFilters={filters => handleFilters(filters)}
                    />
                </div>
            </div>
            <div className=" col-md-9 mt-4">
                <div className="album bg-light">
                <div className="container">
                    <div className="row d-flex justify-content-center row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-xl-3 g-3">
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