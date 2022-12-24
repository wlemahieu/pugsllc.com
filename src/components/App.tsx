/**
 * App structure, session fetch, socket listeners
 */
import { FC, useEffect, useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useLocation } from 'react-router';

import Header from '@components/Header';
import Footer from '@components/Footer';
import Routes from '@src/components/Routes';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CookiesPopup from './CookiesPopup';
import styles from './App.module.css';
import { getApp } from 'firebase/app';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
// import { createContext, useContextSelector } from 'use-context-selector';

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
      fontSize: '18px',
      fontWeight: 600,
    },
    body2: {
      marginBottom: '1rem',
    },
  },
});

const Components: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView();
    }
  }, [location.pathname]);

  return (
    <Container maxWidth="md" className={styles.root} ref={ref}>
      <Header />
      <Routes />
      <Footer />
    </Container>
  );
};

const App: FC = () => {
  // connect to the local firebase functions emulator
  if (!import.meta.env.PROD) {
    const region = 'us-west1';
    const functions = getFunctions(getApp(), region);
    connectFunctionsEmulator(functions, '127.0.0.1', 5001);
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Components />
        <CookiesPopup />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
