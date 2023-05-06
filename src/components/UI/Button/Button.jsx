import React from 'react';
import buttonStyle from './Button.module.css';

const Button = ({ children, ...props }) => {
    const classes = `${buttonStyle.defaultButton}`;
  
    return (
      <div>
        <button
          {...props}
          className={classes}>
          {children}
        </button>
      </div>
    );
  };
  
  export default Button;