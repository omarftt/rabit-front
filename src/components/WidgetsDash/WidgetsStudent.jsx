import React from 'react'
import './Widgets.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function WidgetsStudent({type}) {

    const amount = '-';

    let data;
    switch(type){
        case "asistencias":
            data={
                title: "Asistencias",
                link:"Ver todas mis asistencias",
            }
        break;
        case "tareas":
            data={
                title: "Tareas",
                link:"Ver todas mis tareas",
            }
        break;
        case "clases":
            data={
                title: "Clases",
                link:"Ver todas mis clases",
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

export default WidgetsStudent