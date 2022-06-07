import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './cart.scss';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { removeSelectedProducts, selectedProducts } from '../../../redux/actions/productAction';



const Cart = () => {

    const product = useSelector(state => state.product);
   
    const {productId} = useParams();
    
    
    const dispatch = useDispatch();

    const { image, title, description, price} = product;
  
 
    const [pricePcs, setPricePcs] = useState(price);
   
    const fetchProductDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
            console.log('Error!', err.message)
        })
        dispatch(selectedProducts(response.data)) 
    }


    const handleProdQuantity = (e) => {
             
        setPricePcs(parseInt(e.target.value) * price);
        console.log(pricePcs);
    }
    


useEffect(() => {
    if(productId && productId !== "") fetchProductDetails();
    

    return () => {
        dispatch(removeSelectedProducts())
    }
}, [productId]) 








    return (
      <div className="main-div">
        
         
         
         
         {/* <section className="section-pagetop bg">
         
             <h3 className="title-page">CART</h3>
        
         </section> */}
         
         <section className="section-content padding-y">
         <div className="container">
         <h3 className='cart-title'>CART</h3>
         <div className="row">
             <main className="col-md-9">
            
         <div className="main-div2">
         
         <table className="table table-borderless table-shopping-cart">
         <thead className="text-muted">
         
         <tr className="small text-uppercase">
         <th scope="col" className="productColTitle" >Product</th>
         <th scope="col" width="120">Quantity</th>
         <th scope="col" width="120">Price</th>
         <th scope="col" className="text-right" width="200"> </th>
         </tr>
         </thead>
         <tbody>
         <tr>
             <td>
                 <figure className="itemside">
                     <div className="aside"><img src={image} className="img-sm" style={{height: 450, width: 300}}/></div>
                     <figcaption className="title-text">
                         <p className="title text-dark">{title}</p>
                         {/* <p className="text-muted small">Size: XL, Color: blue, <br /> Brand: Gucci</p> */}
                     </figcaption>
                 </figure>
             </td>
             <td> 
                 <select className="form-control" id="UserSelect" onChange={handleProdQuantity} >
                     <option defaultValue={1}>1</option>
                     <option value={2}>2</option>  
                     <option value={3}>3</option>  
                     <option value={4}>4</option>  
                 </select> 
             </td>
             <td> 
                 <div className="price-wrap"> 
                     <var className="price" >${pricePcs}</var> 
                     {/* <small className="text-muted"> </small>  */}
                 </div> 
             </td>
             <td className="text-right"> 
             {/* <a data-original-title="Save to Wishlist" title="" href="" className="btn btn-light mr-2" data-toggle="tooltip"> </a>  */}
             <a href="" className="btn btn-light"> Remove</a>
             </td>
             <td className="total-table">

             <div className="total">

{/* <form>
                <div className="form-group">
                    <label>Have coupon?</label>
                    <div className="input-group">
                        <input type="text" className="form-control" name="" placeholder="Coupon code" />
                        <span className="input-group-append"> 
                            <button className="btn btn-dark">Apply</button>
                        </span>
                    </div>
                </div>
            </form> */}
{/* 
<dl className="total-price">
<dt>Total price:</dt>
<dd className="text-right">USD 568</dd>
</dl>
<dl className="dlist-align">
<dt>Discount:</dt>
<dd className="text-right">USD 658</dd>
</dl> */}
<dl className="dlist-align">
<dt>Total: <strong>$ {pricePcs}</strong></dt>
{/* <dd className="text-right  h5"></dd> */}
</dl>

{/* <p className="text-center mb-3">
<img src="assets/images/misc/payments.png" height="26" />
</p> */}



</div> 
             </td>
         </tr>
         
         </tbody>
        
         </table>
        
        


        
         </div> 
         
         {/* <div className="alert alert-dark mt-3">
             <p className="icontext"><i className="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks</p>
         </div> */}
        
             </main>
             
                <div className='cont-purch-buttons'>
                <Link to=""> <p className="continue-button">  Continue shopping </p></Link>
                   
                   
          <Link to="checkout"><p className="purchase-button"> Make Purchase  </p> </Link>

                
            
   
   {/* // javascript:history.back() */}
</div>  
             
         </div>
         
         </div> 
         </section>


        
      
     </div>
    );
};



export default Cart;






/*

<tr>
             <td>
                 <figure className="itemside">
                     <div className="aside"><img src="assets/images/items/2.jpg" className="img-sm" /></div>
                     <figcaption className="info">
                         <a href="#" className="title text-dark">Product name  goes here nice</a>
                         <p className="text-muted small">Size: XL, Color: blue, <br /> Brand: Gucci</p>
                     </figcaption>
                 </figure>
             </td>
             <td> 
                 <select className="form-control">
                     <option>1</option>
                     <option>2</option>  
                     <option>3</option>  
                     <option>4</option>  
                 </select> 
             </td>
             <td> 
                 <div className="price-wrap"> 
                     <var className="price">$149.97</var> 
                     <small  className="text-muted"> $75.00 each </small>  
                 </div> 
             </td>
             <td className="text-right"> 
             <a data-original-title="Save to Wishlist" title="" href="" className="btn btn-light mr-2" data-toggle="tooltip"> <i className="fa fa-heart"></i></a> 
             <a href="" className="btn btn-light btn-round"> Remove</a>
             </td>
         </tr>
         <tr>
             <td>
                 <figure className="itemside">
                     <div className="aside"><img src="assets/images/items/3.jpg" className="img-sm" /></div>
                     <figcaption className="info">
                         <a href="#" className="title text-dark">Another name of some product goes just here</a>
                         <p className="small text-muted">Size: XL, Color: blue,  Brand: Tissot</p>
                     </figcaption>
                 </figure>
             </td>
             <td> 
                 <select className="form-control">
                     <option>1</option>
                     <option>2</option>  
                     <option>3</option>  
                 </select> 
             </td>
             <td> 
                 <div className="price-wrap"> 
                     <var className="price">$98.00</var> 
                     <small className="text-muted"> $578.00 each</small> 
                 </div> 
             </td>
             <td className="text-right"> 
                 <a data-original-title="Save to Wishlist" title="" href="" className="btn btn-light mr-2" data-toggle="tooltip"> <i className="fa fa-heart"></i></a> 
                 <a href="" className="btn btn-light btn-round"> Remove</a>
             </td>
         </tr>*/