import axios from 'axios';
import React, { useEffect } from 'react';
import { womensProducts } from '../../../redux/actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './women.scss';

const Women = () => {

    const womensProduct = useSelector(state => state.womensProducts.womensProduct)

    const dispatch = useDispatch();

    const fetchWomensProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products/category/women's clothing")
            .catch((err) => {
                console.log('Error!', err.message)
            })
            dispatch(womensProducts(response.data))
            console.log(response)
    }

    useEffect(() => {
        fetchWomensProducts()
    }, [])


    const renderWomensProducts = womensProduct?.map((women) => {

        const { image, id, title, price} = women
    
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
    


    return (
        <div>
            {renderWomensProducts}
        </div>
    );
};



export default Women;