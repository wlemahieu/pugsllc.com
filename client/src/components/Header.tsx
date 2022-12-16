import { Component } from 'solid-js';
import styles from '@components/Header.module.css';
import Typography from '@suid/material/Typography';
import logo from '@assets/logo.jpg';

const Header: Component = () => {
  return (
    <header class={styles.root}>
      <img class={styles.logo} src={logo} />
      <Typography variant="h3" gutterBottom>
        pugsllc.com
      </Typography>
    </header>
  );
};

export default Header;
