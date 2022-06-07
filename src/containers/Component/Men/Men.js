import axios from 'axios';
import React, { useEffect } from 'react';
import { mensProducts } from '../../../redux/actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './men.scss';

const Men = () => {

    const mensProduct = useSelector(state => state.mensProducts.mensProduct);
    
    const dispatch = useDispatch();

    const fetchMensProducts = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/category/men's clothing`)
        .catch((err) => {
            console.log('Error!', err.message)
        })
        dispatch(mensProducts(response.data)) 
       // console.log(response)
    }


    // console.log(mensProducts)

   const renderMensProducts = mensProduct?.map((men) => {

    const { image, id, title, price} = men

       return (
           
               <div className='outerDiv parent' key={id} >
            <Link to={`product/${id}`}> 
                <div>
                    <div style={{height: 600, width: 500}}>
                        <div className='image'><img src={image} alt={id} style={{width: 300, height: 500}}></img></div>
                        <div className='parent'>
                            <div className='child1 textC'>{title}</div>
                             <div className='child2 textC'>$ {price}</div>
                        </div>
                    </div>
                </div>
            </Link> 
        </div> 
           
        
        
        
       )
   })

    useEffect(() => {
        fetchMensProducts()
    }, [])

    return (
        
        <>
        {renderMensProducts}
        </>
    );
};



export default Men;



