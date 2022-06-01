import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import ClassIcon from '@mui/icons-material/Class';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupsIcon from '@mui/icons-material/Groups';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import useLogout from '../../hooks/useLogout';
import Logo from '../../assets/Logo.png';
import './SidebarDash.css'

function SidebarAdmin() {
    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/login');
    }


    return (
        <>
            <div className='sidebar bg-info'>
                <div className='sidebar-top'>
                    <img
                    src={Logo}
                    alt=""
                    />
                </div>
                <hr className='  bg-white mt-2 mb-3' />
                <div className='sidebar-center'>
                    <ul>
                        <p className='sidebar-title text-white '>PRINCIPAL</p>
                        <Link to='/admin' className='text-white'>
                            <li>
                                <DashboardIcon className='text-white' />
                                <span className='text-white'>Dashboard</span>
                            </li>
                        </Link>

                        <p className='sidebar-title text-white '>PESTAÑAS</p>

                        <Link to={'/admin/students'}>
                            <li>
                                <GroupsIcon className='text-white'/>
                                <span className='text-white'>Usuarios</span>
                            </li>
                        </Link>

                        <Link to={'/admin/talleres'}>
                            <li>
                                <SchoolIcon className='text-white' />
                                <span className='text-white'>Talleres</span>
                            </li>
                        </Link>
                        
                        <Link to={'/admin/clases'}>
                            <li>
                                <LibraryBooksIcon className='text-white' />
                                <span className='text-white'>Clases</span>
                            </li>
                        </Link>

                        <Link to={'/admin/homeworks'}>
                            <li>
                                <ClassIcon className='text-white' />
                                <span className='text-white'>Tareas</span>
                            </li>
                        </Link>

                        <Link to={'/admin/products'}>
                            <li>
                                <Inventory2Icon className='text-white' />
                                <span className='text-white'>Productos</span>
                            </li>
                        </Link>
                        
                        <p className='sidebar-title text-white '>CERRAR</p>
                        <li>
                            <LogoutIcon className='text-white' />
                            <span className='text-white' onClick={signOut}>Cerrar Sesion</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
        
    )
}

export default SidebarAdmin