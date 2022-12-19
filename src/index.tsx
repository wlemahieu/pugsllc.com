/**
 * App entry point, load css & render App component on root
 */
import './reset.css';
import './index.css';
import { render } from 'solid-js/web';
import App from '@src/components/App';
import { FirebaseProvider } from 'solid-firebase';
import { initializeApp as initFirebase } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAplAukEjhFhl8-j9Mzvk-vZw0eRSg8vO8',
  authDomain: 'pugsllc.firebaseapp.com',
  projectId: 'pugsllc',
  storageBucket: 'pugsllc.appspot.com',
  messagingSenderId: '429542448208',
  appId: '1:429542448208:web:619875908166957d6f0555',
};

const app = initFirebase(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'app started');

render(
  () => (
    <FirebaseProvider config={firebaseConfig}>
      <App />
    </FirebaseProvider>
  ),
  document.getElementById('root') as HTMLElement,
);
