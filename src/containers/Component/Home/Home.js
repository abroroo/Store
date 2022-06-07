import React, { useState } from 'react';
import Header from '../Header/Header';
import './main.scss'


const Home = () => {




    return (
        <>
        <div className='headerCustom'></div>
            <div className='text-in-between'>
                <h1>Paradise Found</h1>
                <p>Ease into warm weather style</p>
                <a className='capital'>SPRING, SUMMER, AUTUMN</a>
                
            </div>
            <div>
                    <div className='catalog'>
                        <div className='white-dress'>
                        <img src={require('./images/white-indian.jpg')} height="750" width="500" alt="white-dress"  />
                        </div>
                        <div className='black-dress'>
                        <img src={require('./images/black-indian.jpg')} height="750" width="500" alt="black-dress"  />
                        </div>
                        
                    </div>
                    <div className='text-in-between'>
                <h1>Hay, Cool, Collected</h1>
                
                <a className='capital'>SEE THE EDITORIAL</a>
                
            </div>
                    <div className='wide-img'></div>
                    <div className='text-in-between'>
                <h1>Set the Tone</h1>
                <p>Perfect Layering Piece</p>
                <a className='capital'>SEE THE COLLECTION</a>
                
            </div>
            <div className='catalog'>
                        <div className='white-dress'>
                        <img src={require('./images/white-dress2.jpg')} height="750" width="500" alt="white-dress"  />
                        <h2>White Hay</h2>
                        <a className='capital'>SHOP THE DRESS</a>
                        </div>
                        <div className='black-dress'>
                        <img src={require('./images/black-dress-women.jpg')} height="750" width="500" alt="black-dress"  />
                        <h2>Geen Black Hay</h2>
                        <a className='capital'>SHOP THE WEAR</a>
                        </div>
                        
                </div>
                    <div className='wide-img2'></div>
                    <div className='text-in-between'>
                <h1>Night Out</h1>
                <p>Perfectly layering pieces for the evening</p>
               </div>
               <div className='catalog'>
                        <div className='white-dress'>
                        <img src={require('./images/white-green-women.jpg')} height="750" width="500" alt="white-dress"  />
                        <h2>Evening Dresses</h2>
                        <a className='capital'>SHOP EVENINGS</a>
                        </div>
                        <div className='black-dress'>
                        <img src={require('./images/evening-dress.jpg')} height="750" width="500" alt="black-dress"  />
                        <h2>Evening Wear</h2>
                        <a className='capital'>SHOP WEAR</a>
                        </div>
                        
                </div>
                <div className='wide-img3'></div>



                </div>
        </>
    );
};



export default Home;


// style={{ backgroundImage:`url(${bgImage})`}}