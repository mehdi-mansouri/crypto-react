import React from 'react';

//Gif
import spinner from '../gif/spinner.gif'

const loader = () => {
    return (
        <div>
            <img src={spinner} alt='Loding'/>
            <h1>Loding ....</h1>
        </div>
    );
};

export default loader;