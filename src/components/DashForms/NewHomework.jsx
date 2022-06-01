import React, {useState, useEffect} from 'react'
import { useForm } from "react-hook-form";
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useAxiosPrivateImage from '../../hooks/useAxiosPrivateImage';
import { useNavigate, useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './newForm.css'

function NewHomework() {
    const { register, handleSubmit } = useForm();
    const [classrooms, setClassrooms] = useState([]);
    const [submited, setSubmited] = useState(false);
    const [currency, setCurrency] = useState('');
    const [file1, setFile1] = useState("");
    const axiosPrivate = useAxiosPrivate();
    const axiosPrivateImage = useAxiosPrivateImage();
    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = (e) => {
        setCurrency(e.target.value);
    };

    const handleImageSubmit = async (name) => {
        const formData = new FormData()
        formData.append('fileAttachedURL', file1)
        formData.append('name', name)
    
        let isMounted = true;
        const controller = new AbortController();
        await axiosPrivateImage
          .put('/api/homework/imageUpload/current', formData, {
            signal: controller.signal})
          .then(res => {
            alert('Image Uploaded Successfully')
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
        
        const {name,description, startDate,endDate} = data;
        const classId = currency
        const fileAttachedURL = ''
        
        let isMounted = true;
        const controller = new AbortController();
        try {
            const response = await axiosPrivate.post('/api/homework',
            JSON.stringify({classId, name,description,startDate,endDate, fileAttachedURL}),{
                signal: controller.signal
            });
            setSubmited(true);
            handleImageSubmit(name);

        } catch (err) {
            console.log(err);
        }

        return () => {
            isMounted = false;
            controller.abort();
        }
    }

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const getClassrooms = async () => {
            try {
                const response = await axiosPrivate.get('/api/classroom/user/current',{
                    signal: controller.signal
                });
                console.log(response.data); 
                isMounted && setClassrooms(response.data);
            } catch (err) {
                console.log(err);
                navigate('/login',{state:{from:location},replace:true});
            }
        };
        getClassrooms();
        return () => {
            isMounted = false;
            controller.abort();
        }

    },[]);


    return (
        <>  
            { submited?
                (<div className='formNew my-2 py-2'> Se ha creado la tarea satisfactoriamente</div>)
                : (<div className=''></div>)
            }
            

            <div className='row'>
                
                <div className='newElement my-3 mx-2 '>
                    <form onSubmit={handleSubmit(handleRegistration)} className='formNew py-4 px-4 '>
                        <div className='formInput'>
                            <label className='labelNew' htmlFor='name'>Nombre de la tarea</label>
                            <input className='inputNew ' type='text' id='name' placeholder='' {...register('name', { required: true })}/>
                        </div>

                        <div className='formInput'>
                            <label className='labelNew' htmlFor='classId'>Seleccione el salon de clase</label>
                            <TextField
                                id="classId"
                                className='inputNew'
                                select
                                label=""
                                value={currency}
                                onChange={handleChange}
                                
                                >
                                {classrooms.map((option) => (
                                    <MenuItem key={option._id} value={option._id} >
                                        {option.name}
                                        
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        
                        <div className='formInput'>
                            <label className='labelNew' htmlFor='startDate'>Fecha de creacion</label>
                            <input className='inputNew' type='text' id='startDate' placeholder='' {...register('startDate')}/>
                        </div>
                        
                        <div className='formInput'>
                            <label className='labelNew' htmlFor='endDate'>Fecha limite de entrega</label>
                            <input className='inputNew' type='text' id='endDate' placeholder='' {...register('endDate')}/>
                        </div>

                        <div className='formInput'>
                            <label className='labelNew' htmlFor='fileAttachedURL'>Documento adjunto</label>
                            <input 
                                className='inputNew' 
                                type='file'
                                accept='*'
                                name='fileAttachedURL'
                                onChange={(e) => setFile1(e.target.files[0])}
                                id='fileAttachedURL' 
                                />
                        </div>

                        <div className='formInput'>
                            <label className='labelNew' htmlFor='description'>Descripción de la tarea</label>
                            <textarea className='inputNew' id='description' placeholder='' style={{ height: 100 }} {...register('description')}/>
                        </div>
                        <div className='formInput'>
                            <input className='buttonNew mx-5' type="submit" value="Submit" />
                        </div>
                        
                    </form>
                    
                </div>
            </div>

            <div className='imgContainer mx-2 w-25'>
                <img className='imgNew' src={
                                            file1
                                            ? URL.createObjectURL(file1)
                                            :'https://res.cloudinary.com/unicloud010/image/upload/v1653336783/imgFondoVacio_bwvzla.png'} alt='taller'/>
            </div>

            
        </>
        
    )
}

export default NewHomework