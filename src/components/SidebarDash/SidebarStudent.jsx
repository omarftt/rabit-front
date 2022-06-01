import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LogoutIcon from '@mui/icons-material/Logout';
import useLogout from '../../hooks/useLogout';
import Logo from '../../assets/Logo.png';
import './SidebarDash.css'

function SidebarStudent() {
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
                        <Link to='/student' className='text-white'>
                            <li>
                                <DashboardIcon className='text-white' />
                                <span className='text-white'>Dashboard</span>
                            </li>
                        </Link>

                        <p className='sidebar-title text-white '>PESTAÑAS</p>
                        
                        <Link to='/student/profile' className='text-white'>
                            <li>
                                <PersonIcon className='text-white'/>
                                <span className='text-white'>Mi perfil</span>
                            </li>
                        </Link>
                        

                        <Link to='/student/myClassrooms' className='text-white'>
                            <li>
                                <SchoolIcon className='text-white' />
                                <span className='text-white'>Clases</span>
                            </li>
                        </Link>

                        <Link to='/student/myHomeworks' className='text-white'>
                            <li>
                                <LibraryBooksIcon className='text-white' />
                                <span className='text-white'>Tareas</span>
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

export default SidebarStudent