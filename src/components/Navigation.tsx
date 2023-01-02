/**
 * Global site menu navigation
 */
import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import kebabCase from 'lodash/kebabCase';

const defaultTab = 'welcome';
const tabs = ['welcome', 'about', 'portfolio', 'domains', 'contact'];

const findTabIdx = (tab: string) => tabs.findIndex((t) => kebabCase(t) === tab);

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
    const url = id === defaultTab ? '/' : `/${kebabCase(id)}`;
    const idx = findTabIdx(id);
    setKey(idx);
    navigate(url);
  };

  return (
    <nav>
      <Box
        sx={{
          textAlign: 'center',
          mt: 3,
          mb: 3,
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Tabs
          value={key}
          onChange={handleChange}
          centered
          sx={{ height: '100%' }}
          variant="scrollable"
          scrollButtons={true}
          allowScrollButtonsMobile
        >
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
