import React from 'react';
import modalStyle from './Modal.module.css';
import commonStyles from 'C:/Users/leraline/Desktop/projects/react/please-stand-up/src/styles/common.module.css';

const Modal = ({children, visible, setVisible}) => {

    const rootClasses = [modalStyle.defaultModal, commonStyles.commonBorder];

    if(visible) {
        rootClasses.push(modalStyle.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick= {() => setVisible(false)}>
            <div className={modalStyle.modalContent} onClick={(e => e.stopPropagation())}>
                {children}
            </div>
        </div>
    );
};

export default Modal;