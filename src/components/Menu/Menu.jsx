import React from 'react';
import cl from './Menu.module.css'

const Menu = ({children}) => {
    return (
        <div className={cl.rootStyle}>
            <ul>
                {children}
            </ul>
        </div>
    );
};

export default Menu;