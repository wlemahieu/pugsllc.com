/**
 * Global site menu navigation
 */
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '@components/Navigation.module.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Navigation: FC = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    const target = event.target as HTMLElement;
    const path = target.innerText.toLowerCase();
    const url = path === 'home' ? '/' : `/${path}`;
    navigate(url);
  };

  return (
    <nav className={styles.root}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Home" />
        <Tab label="About" />
        <Tab label="Contact" />
      </Tabs>
    </nav>
  );
};

export default Navigation;
