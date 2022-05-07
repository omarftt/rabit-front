import React, {useState} from 'react'
import {Checkbox} from 'antd'



const sections = [
    {
        "_id": 1,
        "name": "Ofertas",
    },
    {
        "_id": 2,
        "name": "Kits Educativos",
    },
    {
        "_id": 3,
        "name": "Robots Educativos",
    },
    {
        "_id": 4,
        "name": "Componentes electronicos",
    },
    {
        "_id": 5,
        "name": "Estructuras mecanicas",
    },
    {
        "_id": 6,
        "name": "Piezas mecanicas",
    },
    {
        "_id": 7,
        "name": "5-7 años",
    },
    {
        "_id": 8,
        "name": "8-9 años",
    },
    {
        "_id": 9,
        "name": "10-12 años",
    },
    {
        "_id": 10,
        "name": "13-17 años",
    }
]


function CheckBox(props) {
    const [checked,setChecked] = useState([]);

    const handleToggle = (value) => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if(currentIndex === -1){
            newChecked.push(value);
        }else{
            newChecked.splice(currentIndex,1);
        }
        setChecked(newChecked);
        props.handleFilters(newChecked);
    
    }

    const renderCheckboxList = () => sections.map((section,index) => (
        <React.Fragment key={index}>
            <h6 className='my-3'>{index=== 0 ? "Por tipo de producto": <></>} </h6>
            <h6 className='my-3'>{index=== 6 ? "Por edades" : <></>} </h6>
            <Checkbox 
                onChange = {() => handleToggle(section._id)} 
                type="checkbox"
                checked ={checked.indexOf(section._id) !== -1 ? true : false}
                className = "mx-3 my-0"
            />
            
            
            <span>{section.name}</span>
            <br /> 
        </React.Fragment>
    ))

    
    return (
        <div>
            {renderCheckboxList()}
        </div>
    )
}

export default CheckBox