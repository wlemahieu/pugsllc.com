import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '@components/Header.module.css';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import logo from '@assets/logo.png';
import Navigation from '@components/Navigation';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';

const Header: FC = () => {
  const navigate = useNavigate();
  return (
    <header>
      <Box sx={{ textAlign: 'center' }}>
        <Avatar
          className={styles.logo}
          src={logo}
          onClick={() => navigate('/')}
          variant="square"
          sx={{
            height: '310px',
            width: '310px',
          }}
        />
        <Link onClick={() => navigate('/')} color="inherit" className={styles.link}>
          <Typography variant="h1" gutterBottom>
            Pugs, LLC
          </Typography>
        </Link>
        <Divider />
      </Box>
      <Navigation />
    </header>
  );
};

export default Header;
