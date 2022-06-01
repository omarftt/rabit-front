import React, {useState, useEffect} from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import {useNavigate,useLocation} from 'react-router-dom';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import './Dashboard.css'


export const AllProducts = () => {

    const [products, setProducts] = useState();
    const axiosPrivate = useAxiosPrivate();
    const [deleted, setDeleted] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const getProducts = async () => {
            try {
                const response = await axiosPrivate.get('/api/products',{
                    signal: controller.signal
                });
                console.log(response.data);
                isMounted && setProducts(response.data);
            } catch (err) {
                console.log(err);
                navigate('/login',{state:{from:location},replace:true});
            }
        };
        getProducts();
        return () => {
            isMounted = false;
            controller.abort();
        }

    },[deleted]);

    const deleteElement = async (productId) => {
        const controller = new AbortController();
        try {
            const response = await axiosPrivate.delete(`/api/products/${productId}`,{
                signal: controller.signal
            });
            console.log(response.data);
            setDeleted(deleted + 1);
            

        } catch (err) {
            console.log(err);
        }
    }


    return (
        <>
            <article>
                <h3></h3>
                {products?.length
                ?(
                    <ul className = 'Element'>
                        {products.map((product,i) =>  
                            <li key={i}>
                                <div className='Element ElementSpace align-items-center justify-content-between'>
                                    <div>
                                        <div style={{fontSize:'20px'}}> <strong>{product.name}</strong></div>
                                        <br/> 
                                        <div style={{fontSize:'12px'}}>{product.description}</div>
                                    </div>
                                    <RemoveCircleIcon onClick={() => deleteElement(product._id) } className='mx-5 h-100' style={{width:'35px'}}/>
                                </div>
                            </li>
                        )}
                    </ul>
                ): <div className='Element ElementSpace align-items-center justify-content-between'>
                        <div>
                            <div style={{fontSize:'20px'}}> <strong>No hay productos </strong></div>
                            <br/> 
                            <div style={{fontSize:'12px'}}>No se encontraron productos registrados hasta el momento</div>
                        </div>
                    </div>
                }
                <br/>
            </article>
        </>
    )
}
