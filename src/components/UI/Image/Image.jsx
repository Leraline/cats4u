import React from 'react';
import classNames from './Image.Module.css';

const Image = (props) => {
    return (
      <div className={classNames.imgContainer}>
        <img {...props} />
      </div>
    );
  };
  
  export default Image;