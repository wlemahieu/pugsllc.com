/**
 * Default welcome page view
 */
import { FC } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';

const Welcome: FC = () => {
  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 8, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Welcome
        </Typography>
        <Typography variant="body1" gutterBottom>
          <b>P</b>
          <span>
            ugs, LLC is a multifaceted software and web application development firm. Founded in 2020 by Wesley LeMahieu
            in the heart of Las Vegas, NV. With a wide array of expertise relating to software and web applications, we
            aim to bring cost-effective, scalable cloud architecture solutions to individuals or companies in need.
          </span>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Welcome;
