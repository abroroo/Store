import React, { useEffect } from 'react';
import './checkout.scss';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { removeSelectedProducts, selectedProducts } from '../../../redux/actions/productAction';



const Checkout = () => {

	const product = useSelector(state => state.product);
   
    const {productId} = useParams();
    
    
    const dispatch = useDispatch();

    const { image, title, description, price} = product;
  
    

   
    const fetchProductDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
            console.log('Error!', err.message)
        })
        dispatch(selectedProducts(response.data)) 
    }


useEffect(() => {
    if(productId && productId !== "") fetchProductDetails();

    return () => {
        dispatch(removeSelectedProducts())
    }
}, [productId]) 







    return (
        <div className="body">
            <div className='headerC'>
		<h3>Checkout</h3>
	</div>

	<div className='main'>
		
		<section className="checkout-form">
			<form action="#!" method="get">
				<h6>Contact information</h6>
				<div className="form-control">
					<label for="checkout-email">E-mail</label>
					<div>
						<span className="fa fa-envelope"></span>
						<input type="email" id="checkout-email" name="checkout-email" placeholder="Enter your email..." />
					</div>
				</div>
				<div className="form-control">
					<label for="checkout-phone">Phone</label>
					<div>
						<span className="fa fa-phone"></span>
						<input type="tel" name="checkout-phone" id="checkout-phone" placeholder="Enter you phone..." />
					</div>
				</div>
				<br />
				<h6>Shipping address</h6>
				<div className="form-control">
					<label for="checkout-name">Full name</label>
					<div>
						<span className="fa fa-user-circle"></span>
						<input type="text" id="checkout-name" name="checkout-name" placeholder="Enter you name..." />
					</div>
				</div>
				<div className="form-control">
					<label for="checkout-address">Address</label>
					<div>
						<span className="fa fa-home"></span>
						<input type="text" name="checkout-address" id="checkout-address" placeholder="Your address..." />
					</div>
				</div>
				<div className="form-control">
					<label for="checkout-city">City</label>
					<div>
						<span className="fa fa-building"></span>
						<input type="text" name="checkout-city" id="checkout-city" placeholder="Your city..." />
					</div>
				</div>
				<div className="form-group">
					<div className="form-control">
						<label for="checkout-country">Country</label>
						<div>
							<span className="fa fa-globe"></span>
							<input type="text" name="checkout-country" id="checkout-country" placeholder="Your country..." list="country-list" />
							<datalist id="country-list">
								<option value="India"></option>
								<option value="USA"></option>
								<option value="Russia"></option>
								<option value="Japan"></option>
								<option value="Egypt"></option>
							</datalist>
						</div>
					</div>
					<div className="form-control">
						<label for="checkout-postal">Postal code</label>
						<div>
							<span className="fa fa-archive"></span>
							<input type="numeric" name="checkout-postal" id="checkout-postal" placeholder="Your postal code..." />
            </div>
					</div>
				</div>
				<div className="form-control checkbox-control">
					<input type="checkbox" name="checkout-checkbox" id="checkout-checkbox" />
					<label for="checkout-checkbox">Save this information for next time</label>
				</div>
				<div className="form-control-btn">
					<button>Pay</button>
				</div>
			</form>
		</section>

		<section className="checkout-details">
			<div className="checkout-details-inner">
				<div className="checkout-lists">
					<div className="card">
						{/* <div className="card-image"><img src={image} alt="" /></div> */}
						<div className="card-details">
							<div className="card-name">{title}</div>
							<div className="card-price">${price} <span>${price + 10}</span></div>
							{/* <div className="card-wheel">
								<button>-</button>
								<span>1</span>
								<button>+</button>
							</div> */}
						</div>
					</div>
					
				</div>
				<div className="checkout-shipping">
					<h6>Shipping</h6>
					<p>Free</p>
				</div>
				<div className="checkout-total">
					<h6>Total</h6>
					<p>{price}</p>
				</div>
			</div>
		</section>

	</div>
        </div>
    );
};



export default Checkout;