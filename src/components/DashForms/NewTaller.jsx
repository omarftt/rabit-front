import React, {useState, useEffect} from 'react'
import { useForm } from "react-hook-form";
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useAxiosPrivateImage from '../../hooks/useAxiosPrivateImage';
import Switch from '@mui/material/Switch';
import './newForm.css'


function NewTaller() {
    const { register, handleSubmit } = useForm();
    const [submited, setSubmited] = useState(false);
    const [file, setFile] = useState("");
    const axiosPrivate = useAxiosPrivate();
    const axiosPrivateImage = useAxiosPrivateImage();

    const handleImageSubmit = async (name) => {
        const formData = new FormData()
        formData.append('tallerImage', file)
        formData.append('name', name)
    
        let isMounted = true;
        const controller = new AbortController();
        await axiosPrivateImage
          .put('/api/taller/imageUpload/current', formData, {
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
        const {name, edadCode, description,descriptionModal,duration,inversion, isVisible,startDate} = data;
        const tallerImage = ''

        let isMounted = true;
        const controller = new AbortController();
        try {
            const response = await axiosPrivate.post('/api/taller',
            JSON.stringify({name, edadCode, description,descriptionModal,duration,inversion, isVisible,startDate,tallerImage}),{
                signal: controller.signal
            });
            console.log(response.data);
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

    return (
        <>  
            { submited?
                (<div className='formNew my-2 py-2'> Se ha creado el taller satisfactoriamente</div>)
                : (<div className=''></div>)
            }
            

            <div className='row'>
                
                <div className='newElement my-3 mx-2 '>
                    <form onSubmit={handleSubmit(handleRegistration)} className='formNew py-4 px-4 '>
                        <div className='formInput'>
                            <label className='labelNew' htmlFor='name'>Nombre del taller</label>
                            <input className='inputNew ' type='text' id='name' placeholder='' {...register('name', { required: true })}/>
                        </div>
                        <div className='formInput'>
                            <label className='labelNew' htmlFor='edadCode'>Categoria de edad</label>
                            <input className='inputNew' type='number' id='edadCode' placeholder='' {...register('edadCode', { required: true })}/>
                        </div>
                        
                        <div className='formInput'>
                            <label className='labelNew' htmlFor='duration'>Duración</label>
                            <input className='inputNew' type='text' id='duration' placeholder='' {...register('duration')}/>
                        </div>
                        <div className='formInput'>
                            <label className='labelNew' htmlFor='inversion'>Inversión</label>
                            <input className='inputNew' type='text' id='inversion' placeholder='' {...register('inversion')}/>
                        </div>
                        <div className='formInput'>
                            <label className='labelNew' htmlFor='startDate'>Proxima fecha de inicio</label>
                            <input className='inputNew' type='text' id='startDate' placeholder='' {...register('startDate')}/>
                        </div>
                        <div className='formInput'>
                            <label className='labelNew' htmlFor='isVisible'>¿El taller sera visible?</label>
                            <Switch name="isVisible" defaultChecked {...register('isVisible')} />
                        </div>
                        <div className='formInput'>
                            <label className='labelNew' htmlFor='description'>Descripción del Taller</label>
                            <textarea className='inputNew' id='description' placeholder='' style={{ height: 200 }} {...register('description')}/>
                        </div>
                        <div className='formInput'>
                            <label className='labelNew' htmlFor='descriptionModal'>Descripción del modal</label>
                            <textarea className='inputNew' id='descriptionModal' placeholder='' style={{ height: 200 }} {...register('descriptionModal')}/>
                        </div>
                        <div className='formInput'>
                            <label className='labelNew' htmlFor='tallerImage'>Imagen del taller</label>
                            <input 
                                className='inputNew' 
                                type='file'
                                accept='image/*'
                                name='tallerImage'
                                onChange={(e) => setFile(e.target.files[0])}
                                id='tallerImage' />
                        </div>
                        <input className='buttonNew' type="submit" value="Submit" />
                        
                    </form>
                    
                </div>
            </div>

            <div className='imgContainer mx-2'>
                <img className='imgNew' src={
                                            file
                                            ? URL.createObjectURL(file)
                                            :'https://res.cloudinary.com/unicloud010/image/upload/v1653336783/imgFondoVacio_bwvzla.png'} alt='taller'/>
            </div>
            
            
        </>
        
    )
}

export default NewTaller