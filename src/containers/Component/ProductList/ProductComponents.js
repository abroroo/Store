import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './main.css';


// this is just a function that will redurn JSX to use inside ProductListing.js

const ProductComponents = () => {

    // useSelector allows us to access state 
    // now we're passing in object of all products to the variable named products 
    // with the help of useSelector, cuz we need to access state
    // why we need to access state, it's cuz we passed in the fetched data as a value of state
    const products = useSelector(state => state.listOfAllProducts.products)

   console.log(products)

// renderList is function to pass in inside return of main function
// if we have complex logic, we can create function like this and just pass it in to render return 
// we basically saying check if products exist, then map over all of the products 
// 
    const renderList = products?.map((product) => {
// we are making refernece to keys in fetched data from an api which is now equal to product since we passed state value to it to map over
    const {image, id, title, category, price} = product

        return (
            <div className='four wide column' key={id} >
                <Link to={`product/${id}`}>
                <div className='ui link cards' >
                <div className='card' style={{height: 520}}>
                    <div className='image image-custom'><img src={image} alt={id} style={{width: 280, height: 350}}></img></div>
                    <div className='content'>
                        <div className='header'>{title}</div>
                        <div className='meta price'>$ {price}</div>
                        <div className='meta'>{category}</div>
                    </div>
                </div>
            </div>
                </Link>
            
        </div>
        )
        
    }) 
    
    return (
        <>
        {renderList}
        </>
    );
};


export default ProductComponents;