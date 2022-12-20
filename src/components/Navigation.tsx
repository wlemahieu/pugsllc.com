/**
 * Global site menu navigation
 */
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '@components/Navigation.module.css';
import Link from '@mui/material/Link';

const Navigation: FC = () => {
  const navigate = useNavigate();

  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        <li>
          <Link onClick={() => navigate('/')}>Home</Link>
        </li>
        <li>
          <Link onClick={() => navigate('/about')}>About</Link>
        </li>
        <li>
          <Link onClick={() => navigate('/contact')}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
