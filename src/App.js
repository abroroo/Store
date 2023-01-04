import { BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';
import './App.css';
import React from 'react';
import Header from './containers/Component/Header/Header';
import Home from './containers/Component/Home/Home';
import ProductDetails from './containers/Component/Details/ProductDetails';
import ProductListing from './containers/ProductListing';
import NotFound from './containers/Component/errors/NotFound';
import Men from './containers/Component/Men/Men';
import Women from './containers/Component/Women/Women';
import Accesories from './containers/Component/Accesories/Accesories';
import Cart from './containers/Component/Cart/Cart';
import Footer from './containers/Component/Footer/Footer';
import Checkout from './containers/Component/Checkout/Checkout';
import Exam from './containers/Component/Exam/Exam';

// in app.js we worked with react-router-dom to navigate the links 
function App() {


  // in the main app div show <header /> then naviagate the routes with <Route />
  // all of the things first should be wrapped with <Router /> then all of Route should be inside Routes

  return (
    
      <div className="App">
        <Router>
       <Header />
        <Routes>
        
      <Route path="/" element={<Home />} />
      <Route exact path="/men/product/:productId" element={<ProductDetails />} />
      <Route exact path="/women/product/:productId" element={<ProductDetails />} />
      <Route exact path="/accessories/product/:productId" element={<ProductDetails />} />
      <Route exact path="/men/product/:productId/cart" element={<Cart/>} />
      <Route exact path="/women/product/:productId/cart" element={<Cart/>} />
      <Route exact path="/accessories/product/:productId/cart" element={<Cart/>} />
      <Route exact path="/men" element={<Men />} />
      <Route exact path="/women" element={<Women />} />
      <Route path="/accessories" element={<Accesories />} />
      <Route exact path="/cart" element={<Cart />} />
     <Route exact path="/men/product/:productId/cart/checkout" element={<Checkout />} />
     <Route exact path="/women/product/:productId/cart/checkout" element={<Checkout />} />
     <Route exact path="/accessories/product/:productId/cart/checkout" element={<Checkout />} />
     <Route exact path="/exam" element={<Exam />} />
       <Route path='*' element={<NotFound />} />
      
      </Routes>
      <Footer />
        </Router>
     
      </div>
     
  );
}

export default App;
