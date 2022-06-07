import React, { useEffect } from 'react';
import ProductComponents from './Component/ProductList/ProductComponents'
import { useSelector, useDispatch } from 'react-redux';
import { setProduct } from  '../../src/redux/actions/productAction';
import axios from 'axios';

// this is component that will fetch all products from an api and store it in products variable

const ProductListing = () => {
    
    // useSelector allows us to access state 
    // so here we gived products list from an api as a value for state

    const products = useSelector(state => state)
    // useDispatch is smth that sends the type of action to reducer
    // so useDispatch can be used as variable dispatch here
    const dispatch = useDispatch()

    // async means srazu start fetching right ftom the start
    const fetchProducts = async () => {
        // const res = fetch('https://fakestoreapi.com/products')
        //     .then(res=>res.json())
        //     .then(json=>console.log(json))

        // and wait for the it to finish before execute codes below it
        const response = await axios.get('https://fakestoreapi.com/products')
            .catch(e => console.log("Error", e.message))
            dispatch(setProduct(response.data)) // setProduct is action type declared in seperate file and imported here

            console.log(response)
    }

    // useEffect enables to execute the code once all of the ui is loaded 
    // fetch data once the website has been loaded
    useEffect(() => {
        fetchProducts()
    }, []) // do it only once at a time when there is a real change in values of state not in every refresh


console.log('Products log: ', products )

// in home path '/' show this productListing.js 
// we build the jsx component separately and put it here 
    return (
        <div className="ui grid container">
            <ProductComponents />
        </div>
    );
};


// export the function so we can import it in other files
export default ProductListing;