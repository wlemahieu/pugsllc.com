/**
 * Default home page view
 */
import { FC } from 'react';
import styles from '@views/Home.module.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Home: FC = () => {
  return (
    <Container maxWidth="xs" className={styles.root}>
      <Typography variant="h4" gutterBottom>
        Welcome
      </Typography>
      <Typography variant="body2" gutterBottom>
        Pugs, LLC is a multi-faceted umbrella of web applications and software. It was founded in 2020 right in the
        heart of Las Vegas, NV. We aim to bring cost-effective, scalable cloud architecture solutions to companies in
        need.
      </Typography>
    </Container>
  );
};

export default Home;
