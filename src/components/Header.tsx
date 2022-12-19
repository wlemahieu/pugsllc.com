import { Component } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import styles from '@components/Header.module.css';
import Typography from '@suid/material/Typography';
import logo from '@assets/logo.png';
import Navigation from '@components/Navigation';
import Link from '@suid/material/Link';

const Header: Component = () => {
  const navigate = useNavigate();
  return (
    <header class={styles.root}>
      <Link onClick={() => navigate('/')} color="inherit" class={styles.link}>
        <img class={styles.logo} src={logo} />
        <Typography variant="h1" gutterBottom>
          Pugs, LLC
        </Typography>
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
