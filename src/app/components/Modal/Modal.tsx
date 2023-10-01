import React, { ReactNode } from 'react';
import styles from './Modal.module.css'

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => (
  <div 
    onClick={onClose}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000,
    }}
  >
    <div 
      onClick={(e) => e.stopPropagation()}
      className={styles.modal}
      style={{
        backgroundColor: 'var(--secondary-color)',
        padding: '1rem',
        borderRadius: '10px',
        width: '80%',
        maxWidth: '500px',
        position: 'relative', 
      }}
    >
      {children}
      <button className={styles.closeButton} onClick={onClose}></button>
    </div>
  </div>
);

export default Modal;