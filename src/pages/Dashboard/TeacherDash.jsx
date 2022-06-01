import React, {useEffect, useState} from 'react'
import SidebarDash from '../../components/SidebarDash/SidebarTeacher';
import NavbarDash from '../../components/NavbarDash/NavbarTeacher';
import Widgets from '../../components/WidgetsDash/WidgetsTeacher';
import NewElementDash from '../../components/NewElementDash/NewElementDash';
import { ClassroomsPropios, StudentsPropios } from '../../components/Dashboard/Classrooms';
import {AllTalleres,TalleresPropios} from '../../components/Dashboard/Talleres';
import { HomeworksPropios } from '../../components/Dashboard/Homeworks';
import NewClassroom from '../../components/DashForms/NewClassroom';
import NewHomework from '../../components/DashForms/NewHomework';
import Profile from '../../components/DashForms/Profile';
import './Dashboard.css'

 
export const MainTeacherDash = () => {
    
    return (
        <>
            <div className='home-Dash'>
                <SidebarDash />
                <div className='home-Container'>
                    <NavbarDash  />
                    <div className='widgets-Dash'>
                        <Widgets type="estudiantes" />
                        <Widgets type="talleres" />
                        <Widgets type="clases"/>
                    </div>
                </div>
            </div>
            
        </>
        
    )
}

export const ProfileTeacherDash = () => {
    
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

export const StudentTeacherDash = () => {
    
    return (
        <>
            <div className='home-Dash'>
                <SidebarDash />
                <div className='home-Container'>
                    <NavbarDash  />
                    <div className=''>
                        <StudentsPropios />
                    </div>
                </div>
            </div> 
            
        </>
        
    )
}

export const TalleresTeacherDash = () => {

    const [changed, setChanged] = useState(0);

    const reRender = () => {
        setChanged(changed+1);
        console.log('asda')
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
                        <div className='mx-4 mt-4' style={{fontSize:'22px', textDecorationLine: 'underline'}}><strong>MIS TALLERES</strong></div>
                        <TalleresPropios cambio={changed}/>
                        <div className='mx-4 mt-4' style={{fontSize:'22px', textDecorationLine: 'underline'}}><strong>TODOS LOS TALLERES</strong></div>
                        <AllTalleres func={reRender}/>
                        
                    </div> 
                </div>
            </div>
            
        </>
        
    )
}

export const ClassroomTeacherDash = () => {
    
    return (
        <>
            <div className='home-Dash'>
                <SidebarDash />
                <div className='home-Container'>
                    <NavbarDash  />
                    <div className=''>
                        <NewElementDash  type="classroom" />
                        <ClassroomsPropios />
                    </div>
                </div>
            </div>
            
        </>
        
    )
}

export const CreateClassroomDash = () => {
    
    return (
        <>
            <div className='home-Dash'>
                <SidebarDash />
                <div className='home-Container'>
                    <NavbarDash  />
                    <div className=''>
                        <NewClassroom />
                    </div>
                </div>
            </div>
            
        </>
        
    )
}

export const HomeworkTeacherDash = () => {
    
    return (
        <>
            <div className='home-Dash'>
                <SidebarDash />
                <div className='home-Container'>
                    <NavbarDash  />
                    <div className=''>
                        <NewElementDash  type="homework" />
                        <HomeworksPropios />
                    </div>
                </div>
            </div>
            
        </>
        
    )
}

export const CreateHomeworkDash = () => {
    
    return (
        <>
            <div className='home-Dash'>
                <SidebarDash />
                <div className='home-Container'>
                    <NavbarDash  />
                    <div className=''>
                        <NewHomework />
                    </div>
                </div>
            </div>
            
        </>
        
    )
}


export const TeacherDash2 = () => {
    
    return (
        <>
            <div className='home-Dash'>
                <SidebarDash />
                <div className='home-Container'>
                    <NavbarDash  />
                    <div className=''>
                        prueba
                    </div>
                </div>
            </div>
            
        </>
        
    )
}

