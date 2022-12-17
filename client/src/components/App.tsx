/**
 * App structure, session fetch, socket listeners
 */
import { Component, Show } from 'solid-js';
import { Router } from '@solidjs/router';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Routes from '@src/components/Routes';
import CssBaseline from '@suid/material/CssBaseline';
import Container from '@suid/material/Container';
import { createTheme, ThemeProvider } from '@suid/material/styles';
import CookiesPopup from './CookiesPopup';
import styles from './App.module.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Merriweather',
    h1: {
      fontSize: '66px',
      fontWeight: 500,
    },
    h2: {
      fontSize: '56px',
      fontWeight: 500,
      marginBottom: '1rem',
    },
    h3: {
      fontSize: '46px',
    },
    h4: {
      fontSize: '36px',
    },
    h5: {
      fontSize: '26px',
    },
    h6: {
      fontSize: '16px',
    },
    body2: {
      marginBottom: '1rem',
    },
  },
});

const App: Component = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Show when={true}>
        <Router>
          <Container maxWidth="md" class={styles.root}>
            <div>
              <Header />
              <Routes />
            </div>
            <Footer />
          </Container>
          <CookiesPopup />
        </Router>
      </Show>
    </ThemeProvider>
  );
};

export default App;
