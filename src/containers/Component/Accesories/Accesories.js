import axios from 'axios';
import React, { useEffect } from 'react';
import { accessoryProducts } from '../../../redux/actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './accesories.scss';

const Women = () => {

    const accessoryProduct = useSelector(state => state.accessoryProducts.accessoryProduct)

    const dispatch = useDispatch();

    const fetchAccessoryProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products/category/jewelery")
            .catch((err) => {
                console.log('Error!', err.message)
            })
            dispatch(accessoryProducts(response.data))
            console.log(response)
    }

    useEffect(() => {
        fetchAccessoryProducts()
    }, [])


    const renderAccessoryProducts = accessoryProduct?.map((acc) => {

        const { image, id, title, price} = acc
    
           return (
               <>
                      
               <div className='outerDiv parent' key={id} >
                <Link to={`product/${id}`}> 
                    <div>
                        <div style={{height: 400, width: 500}}>
                            <div className='image'><img src={image} alt={id} style={{width: 200, height: 300}}></img></div>
                            <div className='parent'>
                                <div className='child1 textC'>{title}</div>
                                 <div className='child2 textC'>$ {price}</div>
                            </div>
                        </div>
                    </div>
                </Link> 
            </div> 
               </>
              
               
            
           )
       })
    


    return (
        <div>
            {renderAccessoryProducts}
        </div>
    );
};



export default Women;