import React from 'react';
import styles from './Footer.module.css';
import { Logo } from './Logo/Logo';

const Footer: React.FC = () => {
  return <footer className={styles.footer}>
    <Logo />
    Footer content goes here</footer>;
}

export default Footer;