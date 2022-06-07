import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './main.scss'


const Header = () => {

    const [naV, setNav] = useState(false)

    const changeBackground = () => {
      if(window.scrollY >= 50) {
          setNav(true)
      } else {
          setNav(false)
      }
    }

    window.addEventListener('scroll', changeBackground)

    


    return (
        
        <div className={naV ? 'naV activeNav' : 'naV'}>            
            <div className="ui secondary menu">
            
            <Link to="/men">
            <a className="item">
                <h5>MEN</h5>
            </a>
            </Link>
            <Link to="/women">
            <a className="item">
                <h5>WOMEN</h5>
            </a>
            </Link>
            <Link to="/accessories">
            <a className="item">
                <h5>ACCESSORIES </h5>
            </a> 
            </Link>
            <Link className="logo" to="/">
            <h1>abroro</h1>
            </Link>
            
            <a className="item right floated iconShop">
            <Link to="/cart">
                  <i className="shop icon" />  
                  </Link>        
            </a>
            
              

            
            </div>
           
          
        </div>  
    
    );
};


export default Header;