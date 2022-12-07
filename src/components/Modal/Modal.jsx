import React from 'react';
import styles from './Modal.module.css'
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends React.Component {

componentDidMount(){
  window.addEventListener('keydown', this.onCloseModalEscKey)
};

componentWillUnmount() {
  window.removeEventListener('keydown', this.onCloseModalEscKey)
};

  onCloseModalOverlayClick = (data) => {
   if(data.target === data.currentTarget){
    this.props.clickHandler('')
   };
  };

  onCloseModalEscKey = (e) => {
    if(e.code === "Escape"){
    return this.props.clickHandler('')
    };
  };
  
  render() {
    return createPortal(
      <div 
      className={styles.Overlay}
      onClick={this.onCloseModalOverlayClick}
      >
        <div className={styles.Modal}>
          <img 
          src={this.props.largeImg} alt="" 
          />
        </div>
      </div>,
      modalRoot,
    );
  };
};
