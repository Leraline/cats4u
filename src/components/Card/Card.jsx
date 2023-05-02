import React from 'react';
import cl from "./Card.module.css";
import Button from '../UI/Button/Button';

const Card = () => {

    return (
    <div className={cl.container}>
        <div className={cl.wrapper}>
            <div className={cl.bannerImage}></div>
                <h1>Toyota Supra</h1>
                <p>Lorem ipsum dolor sit amet, <br/>
                    consectetur adipiscing elit.</p>
            </div>
            <div className={cl.buttonWrapper}> 
                <Button>m</Button>
                <Button>m</Button>
            </div>
    </div>
    );
};

export default Card;