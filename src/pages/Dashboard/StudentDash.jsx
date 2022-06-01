import React, {useState, useEffect} from 'react'
import SidebarDash from '../../components/SidebarDash/SidebarStudent';
import NavbarDash from '../../components/NavbarDash/NavbarStudent';
import Widgets from '../../components/WidgetsDash/WidgetsStudent';
import NewEnrollDash from '../../components/NewElementDash/NewEnrollDash';
import Profile from '../../components/DashForms/Profile';
import { HomeworksPropios } from '../../components/Dashboard/Homeworks';
import { ClassroomsPropios } from '../../components/Dashboard/Classrooms';


import './Dashboard.css'

export const MainStudentDash = () => {
    
    return (
        <>
            <div className='home-Dash'>
                <SidebarDash />
                <div className='home-Container'>
                    <NavbarDash  />
                    <div className='widgets-Dash'>
                        <Widgets type="asistencias" />
                        <Widgets type="tareas" />
                        <Widgets type="clases"/>
                    </div>
                </div>
            </div>
            
        </>
        
    )
}

export const ProfileStudentDash = () => {
    
    return (
        <>
            <div className='home-Dash'>
                <SidebarDash />
                <div className='home-Container'>
                    <NavbarDash  />
                    <div className=''>
                        <Profile />
                    </div>
                </div>
            </div>
            
        </>
        
    )
}

export const AttendanceStudentDash = () => {
    
    return (
        <>
            <div className='home-Dash'>
                <SidebarDash />
                <div className='home-Container'>
                    <NavbarDash  />
                    <div className=''>
                        Mis asistencias
                    </div>
                </div>
            </div> 
            
        </>
        
    )
}

export const ClassroomStudentDash = () => {

    const [changed, setChanged] = useState(0);

    const reRender = () => {
        setChanged(changed+1);
        console.log('Re-render- function called')
    }

    useEffect(() => {
        console.log('reRender')
    },[changed]);

    
    return (
        <>
            <div className='home-Dash'>
                <SidebarDash />
                <div className='home-Container'>
                    <NavbarDash  />
                    <div className=''>
                        <NewEnrollDash  type="classroom" func={reRender} />
                        <ClassroomsPropios cambio={changed} />
                    </div>
                </div>
            </div>
            
        </>
        
    )
}


export const HomeworksStudentDash = () => {
    
    return (
        <>
            <div className='home-Dash'>
                <SidebarDash />
                <div className='home-Container'>
                    <NavbarDash  />
                    <div className=''>
                        <HomeworksPropios />
                    </div>
                </div>
            </div>
            
        </>
        
    )
}