/**
 * App structure, session fetch, socket listeners
 */
import { Component, createContext, onMount, Show } from 'solid-js';
import { createStore, SetStoreFunction, Store } from 'solid-js/store';
import { Router } from '@solidjs/router';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Routes from '@src/Routes';
import CssBaseline from '@suid/material/CssBaseline';
import Container from '@suid/material/Container';
import { createTheme, ThemeProvider } from '@suid/material/styles';
import CookiesPopup from './CookiesPopup';

const functionURL = 'https://pugsllc-com-b3us3jciya-uw.a.run.app';

const v1GetMyUser = async (): Promise<string> => {
  const url = import.meta.env.PROD ? functionURL : 'http://localhost:3333';
  const path = '/v1/me';
  const results = await fetch(`${url}${path}`, {
    method: 'GET',
    credentials: 'include',
  });
  return await results.text();
};

interface DefaultValuesI {
  sessionID: string;
}

type StoreT = [Store<DefaultValuesI>, SetStoreFunction<DefaultValuesI>];

const defaultValues: DefaultValuesI = {
  sessionID: '',
};

export type AppContextT = DefaultValuesI;
export const AppContext = createContext<AppContextT>();

const theme = createTheme({
  typography: {
    fontFamily: 'Merriweather',
    h1: {
      fontSize: '65px',
      fontWeight: 500,
    },
    h2: {
      fontSize: '55px',
      fontWeight: 500,
      marginBottom: '1rem',
    },
    h3: {
      fontSize: '45px',
    },
    h4: {
      fontSize: '35px',
    },
    h5: {
      fontSize: '25px',
    },
    h6: {
      fontSize: '15px',
    },
    body2: {
      marginBottom: '1rem',
    },
  },
});

const App: Component = () => {
  const [state, setState]: StoreT = createStore(defaultValues);

  onMount(async () => {
    const sessionID = await v1GetMyUser();
    setState('sessionID', () => sessionID);
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContext.Provider value={state}>
        <Show when={true}>
          <Router>
            <Container
              maxWidth="md"
              sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <Header />
              <Routes />
              <Footer />
              <CookiesPopup />
            </Container>
          </Router>
        </Show>
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default App;
