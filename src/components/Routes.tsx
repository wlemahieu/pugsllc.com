/**
 * All component routes
 */
import { FC } from 'react';
import { Route, Routes as RouteSwitch } from 'react-router-dom';
import Welcome from '@src/views/Welcome';
import About from '@views/About';
import Terms from '@src/views/Terms';
import Privacy from '@src/views/Privacy';
import Cookies from '@src/views/Cookies';
import Contact from '@views/Contact';
import Portfolio from '@views/Portfolio';
import Domains from '@src/views/Domains';

const Routes: FC = () => {
  return (
    <RouteSwitch>
      <Route path="/" element={<Welcome />} />
      <Route path="/about" element={<About />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/domains" element={<Domains />} />
    </RouteSwitch>
  );
};

export default Routes;
