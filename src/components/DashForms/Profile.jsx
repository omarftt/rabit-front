import React, {useState, useEffect} from 'react'
import { useForm } from "react-hook-form";
import {useNavigate,useLocation} from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useAxiosPrivateImage from '../../hooks/useAxiosPrivateImage';
import useAuth from '../../hooks/useAuth';
import './newForm.css'


function Profile() {
    const { register, handleSubmit } = useForm();
    const [submited, setSubmited] = useState(false);
    const [user, setUser] = useState('');
    const [file, setFile] = useState("");
    const [userChanged, setUserChanged] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPrivate = useAxiosPrivate();
    const axiosPrivateImage = useAxiosPrivateImage();
    const { auth } = useAuth();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const getUser = async () => {
            try {
                const response = await axiosPrivate.get('/api/user/current/profile',{
                    signal: controller.signal
                });
                console.log(response.data.user);
                isMounted && setUser(response.data.user);
            } catch (err) {
                console.log(err);
                navigate('/login',{state:{from:location},replace:true});
            }
        };
        getUser();
        return () => {
            isMounted = false;
            controller.abort();
        }

    },[userChanged]);




    const handleImageSubmit = async () => {
        const formData = new FormData()
        formData.append('profileImg', file)
        formData.append('userId', user._id)
        
    
        let isMounted = true;
        const controller = new AbortController();
        await axiosPrivateImage
          .put('/api/user/imageUpload/current', formData, {
            signal: controller.signal})
          .then(res => {
              
            alert('Image Uploaded Successfully')
            setUserChanged(userChanged+1);
          })
          .catch(err => {
            console.log(err)
          })


        return () => {
            
            isMounted = false;
            controller.abort();
        }
    }

    const handleRegistration = async (data) => {
        const {name, lastname} = data;
        const nameToSend = name || user.name;
        const lastnameToSend = lastname || user.lastname;

        let isMounted = true;
        const controller = new AbortController();
        try {
            const response = await axiosPrivate.put('/api/user/update',
            JSON.stringify({nameToSend ,lastnameToSend}),{
                signal: controller.signal
            });
            console.log(response.data);
            setSubmited(true);
            handleImageSubmit();

        } catch (err) {
            console.log(err);
        }

        return () => {
            
            isMounted = false;
            controller.abort();
        }
    }

    return (
        <>  
            { submited?
                (<div className='formNew my-2 py-2'> Se ha actualizado el perfil satisfactoriamente</div>)
                : (<div className=''></div>)
            }
            

            <div className='bottomProfile'>
                
                <div className='newElement my-3 mx-2 '>
                    
                    <div className='rightProfile mx-5'>
                        <form onSubmit={handleSubmit(handleRegistration)} className='py-4 px-4 '>
                            <div className='formInputProfile my-2'>
                                <label className='labelNew' style={{ width:'140px' }} htmlFor='name'>Nombres:</label>
                                <input className='inputNew ' type='text' id='name' placeholder={user.name} {...register('name')}/>
                            </div>
                            <div className='formInputProfile my-2'>
                                <label className='labelNew' htmlFor='lastname'>Apellidos:</label>
                                <input className='inputNew' type='text' id='lastname' placeholder={user.lastname} {...register('lastname')}/>
                            </div>
                            
                            <div className='formInputProfile my-2'>
                                <label className='labelNew ' htmlFor='email'>Correo Electronico:</label>
                                <input className='inputNew' type='text' id='email' disabled placeholder={user.email} />
                            </div>
                            <div className='formInputProfile my-2'>
                                <label className='labelNew' htmlFor='role'>Rol de usuario:</label>
                                <input className='inputNew' type='text' id='role' disabled placeholder={auth.roles}/>
                            </div>
                            <div className='formInputProfile my-2'>
                                <label className='labelNew' htmlFor='profileImg'>Foto de perfil</label>
                                <input 
                                    className='inputNew' 
                                    type='file'
                                    accept='image/*'
                                    name='profileImg'
                                    onChange={(e) => setFile(e.target.files[0])}
                                    id='profileImg' />
                            </div>
                            <div className='formInputProfile my-3 '>
                                <input className='buttonNew' type="submit" value="Submit" />
                            </div>
                            
                        </form>
                    </div>
                    <div className='leftProfile'>
                        <img className='imgProfile' src={
                            user.profileImg
                            ? user.profileImg
                            :'https://res.cloudinary.com/unicloud010/image/upload/v1653603808/profile_bbpwgy.png'} alt='taller'/>
                    </div>

                    
                    
                </div>
            </div>
            
        </>
        
    )
}

export default Profile