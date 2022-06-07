import React from 'react';
import './main.scss'

const Loader = () => {
    return (
        <div className="main">
            <div className="loader"></div>
            <div className="loader-label"><span>loading...</span><br />97%</div>
        </div>
    );
};



export default Loader;