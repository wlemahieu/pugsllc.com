/**
 * Global site menu navigation
 */
import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const defaultTab = 'welcome';
const tabs = ['welcome', 'about', 'portfolio', 'contact'];

const findTabIdx = (tab: string) => tabs.findIndex((t) => t === tab);

const Navigation: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [key, setKey] = useState<number | null>(0);

  useEffect(() => {
    const p = location.pathname.replace('/', '');
    const newPath = !p ? defaultTab : p;
    const idx = findTabIdx(newPath);
    if (idx > -1) {
      setKey(idx);
    } else {
      setKey(null);
    }
  }, [location.pathname]);

  const handleChange = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLElement;
    const { id } = target;
    const url = id === defaultTab ? '/' : `/${id}`;
    const idx = findTabIdx(id);
    setKey(idx);
    navigate(url);
  };

  return (
    <nav>
      <Box sx={{ textAlign: 'center', m: 3, height: '100%' }}>
        <Tabs value={key} onChange={handleChange} centered sx={{ height: '100%' }}>
          {tabs.map((tab, idx) => (
            <Tab key={`key-${idx}`} label={tab} id={tab} value={idx} />
          ))}
        </Tabs>
      </Box>
      <Divider />
    </nav>
  );
};

export default Navigation;
