/**
 * About page view
 */
import { FC } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import wes from '@assets/wes.jpg';
import lucky from '@assets/lucky.jpg';
import lucy from '@assets/lucy.jpg';

const avatarStyle = { width: '150px', height: '150px', margin: 'auto' };

const About: FC = () => {
  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 8, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          About
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: 4 }}>
          Our team is energetic, efficient &amp; small yet powerful!
        </Typography>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Managing Member:
          </Typography>
          <Box>
            <Avatar src={wes} sx={avatarStyle} variant="circular" alt="A white guy in Thailand." />
            <span>Wesley LeMahieu</span>
          </Box>
        </Box>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            CEO (Chief Energy Officer)
          </Typography>
          <Box>
            <Avatar src={lucy} sx={avatarStyle} variant="circular" alt="A black pug named Lucy." />
            <span>Lucy</span>
          </Box>
        </Box>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            CFO (Chief Food Officer)
          </Typography>
          <Box>
            <Avatar src={lucky} sx={avatarStyle} variant="circular" alt="A tan pug named Lucky." />
            <span>Lucky</span>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default About;
