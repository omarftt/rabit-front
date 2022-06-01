import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import ClassIcon from '@mui/icons-material/Class';
import LogoutIcon from '@mui/icons-material/Logout';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GroupsIcon from '@mui/icons-material/Groups';
import useLogout from '../../hooks/useLogout';
import Logo from '../../assets/Logo.png';
import './SidebarDash.css'

function SidebarTeacher() {
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
                        <Link to='/teacher' className='text-white'>
                            <li>
                                <DashboardIcon className='text-white' />
                                <span className='text-white'>Dashboard</span>
                            </li>
                        </Link>
                        

                        <p className='sidebar-title text-white '>PESTAÑAS</p>
                        <Link to='/teacher/profile' className='text-white'>
                            <li>
                                <PersonIcon className='text-white'/>
                                <span className='text-white'>Mi perfil</span>
                            </li>
                        </Link>
                        

                        <Link to='/teacher/mystudents' className='text-white'>
                            <li>
                                <GroupsIcon className='text-white'/>
                                <span className='text-white'>Estudiantes</span>
                            </li>
                        </Link>
                        

                        <Link to='/teacher/talleres' className='text-white'>
                            <li>
                                <SchoolIcon className='text-white' />
                                <span className='text-white'>Talleres</span>
                            </li>
                        </Link>
                        

                        <Link to='/teacher/classrooms' className='text-white'>
                            <li>
                                <ClassIcon className='text-white' />
                                <span className='text-white'>Clases</span>
                            </li>
                        </Link>
                        

                        <Link to='/teacher/homework' className='text-white'>
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

export default SidebarTeacher