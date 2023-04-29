import React from 'react';
import buttonStyle from './Button.module.css';
import commonStyles from 'C:/Users/leraline/Desktop/projects/react/please-stand-up/src/styles/common.module.css';

const Button = ({children, ...props}) => {

    const classes = `${commonStyles.commonBorder} ${buttonStyle.defaultButton}`;


    return (
        <div>
            <button {...props} className={classes}>
                {children}
            </button>
        </div>
    );
};

export default Button;