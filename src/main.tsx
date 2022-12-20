/**
 * App entry point, load css & render App component on root
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';
import App from '@src/components/App';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { createContext } from 'use-context-selector';

export const FirebaseContext = createContext<FirebaseApp | null>(null);

const firebaseConfig = {
  apiKey: 'AIzaSyAplAukEjhFhl8-j9Mzvk-vZw0eRSg8vO8',
  authDomain: 'pugsllc.firebaseapp.com',
  projectId: 'pugsllc',
  storageBucket: 'pugsllc.appspot.com',
  messagingSenderId: '429542448208',
  appId: '1:429542448208:web:619875908166957d6f0555',
};

const app = initializeApp(firebaseConfig);
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LcuhZQjAAAAAGKQjCN-W78vl9yvfC4wQuit1rVB'),
  isTokenAutoRefreshEnabled: true,
});

console.log('appCheck', appCheck);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FirebaseContext.Provider value={app}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
);
