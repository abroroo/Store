import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { removeSelectedProducts, selectedProducts } from '../../../redux/actions/productAction';
import Loader from '../Loader/Loader';
import './details.scss';
import Skeleton  from "react-skeleton";
import { Link } from 'react-router-dom';
// this component is for another page for showing product details when clicked on the product
const ProductDetails = () => {
     // berdagi ProductId fetched data ni product dagana danglashtirdik with the help of useSelector
    const product = useSelector(state => state.product);
    // useParams allows access to the key value of the data from api
    // we called is productsId cuz we want the 'productsId' key from an api object
    const {productId} = useParams();
    
    // dispatch allows to send type of action to the reducer
    const dispatch = useDispatch();

    const { image, title, description, price} = product;
  
    

    // function to fetch the product details
    const fetchProductDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
            console.log('Error!', err.message)
        })
        dispatch(selectedProducts(response.data)) // selectedProducts is an action that was imported 
        // response.data is the axios syntax for actually fetched data
        // cuz axios also gave "response" a value that specifies object type, blah blah blah
    }


useEffect(() => {
    if(productId && productId !== "") fetchProductDetails();

    return () => {
        dispatch(removeSelectedProducts())
    }
}, [productId]) // execute when productsId is updated




    // jsx to show details of products 
    return (
        <div className='ui grid container' id="outerDiv" >
            {Object.keys(product).length === 0 ? (
                <div id='parent'>
                    <Skeleton id="child" count={1} />
                    <Skeleton id="child" count={1} />
                </div>
                
            ) : (
                <div className=''>
                    <div className='ui two column stackable center aligned grid'>
                        
                        <div className='middle aligned row'>
                            <div className='column lp'>
                                <img style={{height: 450, width: 300}}  src={image} alt="product-img"></img>
                            </div>
                            <div className='column rp'>
                                <h3>{title}</h3>
                                <h4>${price}</h4>
                                
                                <p>{description}</p>
                                <Link to="cart">
                                <div className='ui vertical animated button secondary' tabIndex='0'>
                                    <div className='hidden content'>
                                        <i className='shop icon'></i>
                                    </div>
                                   <div className='visible content' style={{fontFamily: "Jost', sans-serif"}}>Add to Cart</div> 
                                    
                                </div>
                                </Link>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};



export default ProductDetails;



// <div className='ui grid container'>
// {Object.keys(product).length === 0 ? (
//     <Loader />
// ) : (
//     <div className='ui placeholder segment'>
//         <div className='ui two column stackable center aligned grid'>
//             <div className='ui vertical divider'>AND</div>
//             <div className='middle aligned row'>
//                 <div className='column lp'>
//                     <img src={image} alt="product-img"></img>
//                 </div>
//                 <div className='column rp'>
//                     <h1>{title}</h1>
//                     <h2>
//                         <a className='ui teal tag label'>${price}</a>
//                     </h2>
//                     <h3 className='ui brown block header'>{category}</h3>
//                     <p>{description}</p>
//                     <div className='ui vertical animated button' tabIndex='0'>
//                         <div className='hidden content'>
//                             <i className='shop icon'></i>
//                         </div>
//                         <div className='visible content'>Add To Cart</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// )}
// </div>