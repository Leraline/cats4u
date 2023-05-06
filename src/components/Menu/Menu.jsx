import React from 'react';
import classNames from './Menu.module.css'

const Menu = ({children}) => {
    return (
        <div className={classNames.rootStyle}>
            <ul>
                {children}
            </ul>
        </div>
    );
};

export default Menu;