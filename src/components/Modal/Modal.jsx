import React from 'react';
import styles from './Modal.module.css'
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends React.Component {
  render() {
    return createPortal(
      <div className={styles.Overlay}>
        <div className={styles.Modal}>
          <img src="" alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}
