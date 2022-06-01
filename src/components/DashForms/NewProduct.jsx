import React, {useState, useEffect} from 'react'
import { useForm } from "react-hook-form";
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useAxiosPrivateImage from '../../hooks/useAxiosPrivateImage';
import Switch from '@mui/material/Switch';
import './newForm.css'

function NewProduct() {
    const { register, handleSubmit } = useForm();
    const [submited, setSubmited] = useState(false);
    const [file1, setFile1] = useState("");
    const [file2, setFile2] = useState("");
    const axiosPrivate = useAxiosPrivate();
    const axiosPrivateImage = useAxiosPrivateImage();

    const handleImageSubmit = async (imgtype, name) => {
        const formData = new FormData()
        if (imgtype === 'imgfront') {
            formData.append('imgfront', file1) 
        }else {
            formData.append('imgmodal', file2)
        }

        formData.append('name', name)
    
        let isMounted = true;
        const controller = new AbortController();
        await axiosPrivateImage
          .put(`api/products/imageUpload/${imgtype}`, formData, {
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

        const {name,category,price,description,isAvailable} = data;
        const imgfront = ''
        const imgmodal = ''

        let isMounted = true;
        const controller = new AbortController();
        try {
            const response = await axiosPrivate.post('/api/products',
            JSON.stringify({name,category,price,description,imgfront,imgmodal,isAvailable}),{
                signal: controller.signal
            });
            console.log('aquiwdas',response.data);
            setSubmited(true);

            handleImageSubmit('imgfront',name);
            handleImageSubmit('imgmodal',name);

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
                (<div className='formNew my-2 py-2'> Se ha creado el producto satisfactoriamente</div>)
                : (<div className=''></div>)
            }
            

            <div className='row'>
                
                <div className='newElement my-3 mx-2 '>
                    <form onSubmit={handleSubmit(handleRegistration)} className='formNew py-4 px-4 '>
                        <div className='formInput'>
                            <label className='labelNew' htmlFor='name'>Nombre del producto</label>
                            <input className='inputNew ' type='text' id='name' placeholder='' {...register('name', { required: true })}/>
                        </div>
                        <div className='formInput'>
                            <label className='labelNew' htmlFor='category'>Categoria del producto</label>
                            <input className='inputNew' type='number' id='category' placeholder='' {...register('category', { required: true })}/>
                        </div>
                        
                        <div className='formInput'>
                            <label className='labelNew' htmlFor='price'>Precio</label>
                            <input className='inputNew' type='text' id='price' placeholder='' {...register('price', { required: true })}/>
                        </div>
                        <div className='formInput'>
                            <label className='labelNew' htmlFor='isAvailable'>¿El producto esta disponible?</label>
                            <Switch name="isAvailable" defaultChecked {...register('isAvailable')} />
                        </div>
                        <div className='formInputDescription'>
                            <label className='labelNew' htmlFor='description'>Descripción del producto</label>
                            <textarea className='inputNew' id='description' placeholder='' style={{ height: 150  }} {...register('description')}/>
                        </div>
                        <div className='formInput'>
                            <label className='labelNew' htmlFor='imgfront'>Imagen del producto</label>
                            <input 
                                className='inputNew' 
                                type='file'
                                accept='image/*'
                                name='imgfront'
                                onChange={(e) => setFile1(e.target.files[0])}
                                id='imgfront' 
                                />
                        </div>
                        <div className='formInput'>
                            <label className='labelNew' htmlFor='imgmodal'>Imagen del modal del producto</label>
                            <input 
                                className='inputNew' 
                                type='file'
                                accept='image/*'
                                name='imgmodal'
                                onChange={(e) => setFile2(e.target.files[0])}
                                id='imgmodal'
                                />
                        </div>
                        <input className='buttonNew' type="submit" value="Submit" />
                        
                    </form>
                    
                </div>
            </div>
            
            <div className='imgContainer mx-2 w-25'>
                <img className='imgNew' src={
                                            file1
                                            ? URL.createObjectURL(file1)
                                            :'https://res.cloudinary.com/unicloud010/image/upload/v1653336783/imgFondoVacio_bwvzla.png'} alt='taller'/>
            </div>
            <div className='imgContainer mx-2 w-25'>
                <img className='imgNew' src={
                                            file2
                                            ? URL.createObjectURL(file2)
                                            :'https://res.cloudinary.com/unicloud010/image/upload/v1653336783/imgFondoVacio_bwvzla.png'} alt='taller'/>
            </div>
            
            
        </>
        
    )
}

export default NewProduct