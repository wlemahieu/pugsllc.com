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
      <Typography variant="h3" gutterBottom>
        Welcome
      </Typography>
      <Typography variant="body1" gutterBottom>
        Pugs, LLC is a multifaceted software and web application development firm. It was founded in 2020 by Wesley
        LeMahieu right in the heart of Las Vegas, NV. We have a wide array of expertise relating to software and web
        applications and bring cost-effective, scalable cloud architecture solutions to individuals or companies in
        need.
      </Typography>
    </Container>
  );
};

export default Home;
