import React from 'react';
import classNames from "./Card.module.css";
import Button from '../UI/Button/Button';

const Card = () => {

    return (
    <div className={classNames.container}>
        <div className={classNames.wrapper}>
            <div className={classNames.bannerImage}></div>
                <h1>Toyota Supra</h1>
                <p>Lorem ipsum dolor sit amet, <br/>
                    consectetur adipiscing elit.</p>
            </div>
            <div className={classNames.buttonWrapper}> 
                <Button>m</Button>
                <Button>m</Button>
            </div>
    </div>
    );
};

export default Card;