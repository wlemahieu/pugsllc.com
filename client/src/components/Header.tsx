import { Component } from 'solid-js';
import styles from '@components/Header.module.css';
import Typography from '@suid/material/Typography';
import logo from '@assets/logo.jpg';
import Navigation from '@components/Navigation';

const Header: Component = () => {
  return (
    <header class={styles.root}>
      <img class={styles.logo} src={logo} />
      <Typography variant="h1" gutterBottom>
        Pugs, LLC
      </Typography>
      <Navigation />
    </header>
  );
};

export default Header;
