import React from 'react'
import SidebarDash from '../../components/SidebarDash/SidebarAdmin';
import NavbarDash from '../../components/NavbarDash/NavbarAdmin';
import Widgets from '../../components/WidgetsDash/WidgetsAdmin';
import NewElementDash from '../../components/NewElementDash/NewElementDash';
import Users from '../../components/Dashboard/Users';
import {AllTalleres} from '../../components/Dashboard/Talleres';
import { AllClassrooms } from '../../components/Dashboard/Classrooms';
import { AllHomeworks } from '../../components/Dashboard/Homeworks';
import { AllProducts } from '../../components/Dashboard/Products';
import NewTaller from '../../components/DashForms/NewTaller';
import NewProduct from '../../components/DashForms/NewProduct';
import './Dashboard.css'

export const MainAdminDash = () => {
    
    return (
        <>
            <div className='home-Dash'>
                <SidebarDash />
                <div className='home-Container'>
                    <NavbarDash  />
                    <div className='widgets-Dash'>
                        <Widgets type="usuarios" />
                        <Widgets type="talleres" />
                        <Widgets type="clases"/>
                        <Widgets type="productos"/>
                        <Widgets type="tareas"/>
                    </div>
                </div>
            </div>
            
        </>
        
    )
}

export const UsersAdminDash = () => {
    
  return (
      <>
          <div className='home-Dash'>
              <SidebarDash />
              <div className='home-Container'>
                  <NavbarDash  />
                  <div className='mx-5 mt-3'>
                      <Users />
                  </div>
              </div>
          </div>
          
      </>
      
  )
}


export const TalleresAdminDash = () => {
    
  return (
      <>
          <div className='home-Dash'>
              <SidebarDash />
              <div className='home-Container'>
                  <NavbarDash  />
                  <div className='mx-5'>
                      <NewElementDash  type="taller" />
                      <AllTalleres />
                  </div>
              </div>
          </div>
          
      </>
      
  )
}
export const CreateTalleresDash = () => {
    
    return (
        <>
            <div className='home-Dash'>
                <SidebarDash />
                <div className='home-Container'>
                    <NavbarDash  />
                    <div className='mx-5'>
                        <NewTaller />
                    </div>
                </div>
            </div>
            
        </>
        
    )
  }

export const ClasesAdminDash = () => {
    
  return (
      <>
          <div className='home-Dash'>
              <SidebarDash />
              <div className='home-Container'>
                  <NavbarDash  />
                  <div className='mx-5'>
                      <AllClassrooms />
                  </div>
              </div>
          </div>
          
      </>
      
  )
}

export const HomeworkAdminDash = () => {
    
  return (
      <>
          <div className='home-Dash'>
              <SidebarDash />
              <div className='home-Container'>
                  <NavbarDash  />
                  <div className='mx-5'>
                      <AllHomeworks />
                  </div>
              </div>
          </div>
          
      </>
      
  )
}

export const ProductsAdminDash = () => {
    
  return (
      <>
          <div className='home-Dash'>
              <SidebarDash />
              <div className='home-Container'>
                  <NavbarDash  />
                  <div className='mx-5'>
                      <NewElementDash  type="product" />
                      <AllProducts />
                  </div>
              </div>
          </div>
          
      </>
      
  )
}

export const CreateProductDash = () => {
    
    return (
        <>
            <div className='home-Dash'>
                <SidebarDash />
                <div className='home-Container'>
                    <NavbarDash  />
                    <div className='mx-5'>
                        <NewProduct />
                    </div>
                </div>
            </div>
            
        </>
        
    )
  }



export const AdminDash2 = () => {
    
  return (
      <>
          <div className='home-Dash'>
              <SidebarDash />
              <div className='home-Container'>
                  <NavbarDash  />
                  <div className='widgets-Dash'>
                      <Widgets type="estudiantes" />
                  </div>
              </div>
          </div>
          
      </>
      
  )
}

