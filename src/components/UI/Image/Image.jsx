import React from 'react';
import cl from './Image.Module.css';

const Image = ({src, alt}) => {
    return (
        <div className={cl.imgContainer}>
            <img src={src} alt={alt}/>
        </div>
    );
};

export default Image;