import React from 'react'
import './Widgets.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function WidgetsAdmin({type}) {

    const amount = '-';

    let data;
    switch(type){
        case "usuarios":
            data={
                title: "Usuarios",
                link:"Ver todos los usuarios",
            }
        break;
        case "talleres":
            data={
                title: "Talleres",
                link:"Ver todos los talleres",
            }
        break;
        case "clases":
            data={
                title: "Clases",
                link:"Ver todas las clases",
            }
        break;
        case "productos":
            data={
                title: "Productos",
                link:"Ver todos los productos",
            }
        break;
        case "tareas":
            data={
                title: "Tareas",
                link:"Ver todas las tareas",
            }
        break;
        default:
        break;
    }


    return (
        <>
            <div className='current-widget'>
                <div className="left-widget">
                    <span className='title-widget'>{data.title}</span>
                    <span className='counter-widget'>{amount}</span>
                    <span className='link-widget'>{data.link}</span>
                </div>
                <div className="right-widget">
                    <KeyboardArrowUpIcon />
                </div>
            </div>
        </>
        
    )
}

export default WidgetsAdmin