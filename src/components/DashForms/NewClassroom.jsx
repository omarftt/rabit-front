import React, {useState, useEffect} from 'react'
import { useForm } from "react-hook-form";
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import Switch from '@mui/material/Switch';
import { useNavigate, useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './newForm.css'

function NewClassroom() {
    const { register, handleSubmit } = useForm();
    const [submited, setSubmited] = useState(false);
    const axiosPrivate = useAxiosPrivate();
    const [talleres, setTalleres] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const [currency, setCurrency] = React.useState('');


    const handleChange = (e) => {
        setCurrency(e.target.value);
      };


    const handleRegistration = async (data) => {
        const {name,zoomLink,timeStart,description} = data;
        const tallerId = currency
        
        let isMounted = true;
        const controller = new AbortController();
        try {
            const response = await axiosPrivate.post('/api/classroom',
            JSON.stringify({name,zoomLink,timeStart,tallerId,description}),{
                signal: controller.signal
            });
            console.log('midata',response.data);
            setSubmited(true);

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

        const getOwnTalleres = async () => {
            try {
                const response = await axiosPrivate.get('/api/taller/user/unique',{
                    signal: controller.signal
                });
                console.log(response.data);
                
                isMounted && setTalleres(response.data);
            } catch (err) {
                console.log(err);
                navigate('/login',{state:{from:location},replace:true});
            }
        };
        getOwnTalleres();
        return () => {
            isMounted = false;
            controller.abort();
        }

    },[]);


    return (
        <>  
            { submited?
                (<div className='formNew my-2 py-2'> Se ha creado el salon de clase satisfactoriamente</div>)
                : (<div className=''></div>)
            }
            

            <div className='row'>
                
                <div className='newElement my-3 mx-2 '>
                    <form onSubmit={handleSubmit(handleRegistration)} className='formNew py-4 px-4 '>
                        <div className='formInput'>
                            <label className='labelNew' htmlFor='name'>Nombre del salon de clase</label>
                            <input className='inputNew ' type='text' id='name' placeholder='' {...register('name', { required: true })}/>
                        </div>
                        
                        <div className='formInput'>
                            <label className='labelNew' htmlFor='zoomLink'>Link de Zoom de la clase</label>
                            <input className='inputNew' type='text' id='zoomLink' placeholder='' {...register('zoomLink')}/>
                        </div>
                        
                        <div className='formInput'>
                            <label className='labelNew' htmlFor='timeStart'>Fecha de inicio</label>
                            <input className='inputNew' type='text' id='timeStart' placeholder='' {...register('timeStart')}/>
                        </div>

                        <div className='formInput'>
                            <label className='labelNew' htmlFor='tallerId'>Taller del salon</label>
                            <TextField
                                id="tallerId"
                                className='inputNew'
                                select
                                label=""
                                value={currency}
                                onChange={handleChange}
                                
                                >
                                {talleres.map((option) => (
                                    <MenuItem key={option._id} value={option._id} >
                                        {option.name}
                                        
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>

                        <div className='formInput'>
                            <label className='labelNew' htmlFor='description'>Descripción del Taller</label>
                            <textarea className='inputNew' id='description' placeholder='' style={{ height: 100 }} {...register('description')}/>
                        </div>
                        <div className='formInput'>
                            <input className='buttonNew mx-5' type="submit" value="Submit" />
                        </div>
                        
                    </form>
                    
                </div>
            </div>

            
        </>
        
    )
}

export default NewClassroom