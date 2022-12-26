/**
 * About page view
 */
import { FC } from 'react';
import styles from '@views/About.module.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import wes from '@assets/wes.jpg';
import lucky from '@assets/lucky.jpg';
import lucy from '@assets/lucy.jpg';

const About: FC = () => {
  return (
    <Container maxWidth="xs" className={styles.root}>
      <Typography variant="h3" gutterBottom>
        About
      </Typography>
      <Typography variant="body1" gutterBottom style={{ marginBottom: '3rem' }}>
        Our small team is very energetic, efficient &amp; powerful!
      </Typography>
      <div className={styles.memberBlock}>
        <Typography variant="h6" gutterBottom>
          Managing Member:
        </Typography>
        <div>
          <Avatar
            src={wes}
            sx={{ width: '150px', height: '150px' }}
            variant="circular"
            className={styles.member}
            alt="A white guy in Thailand."
          />
          <span>Wesley LeMahieu</span>
        </div>
      </div>
      <div className={styles.memberBlock}>
        <Typography variant="h6" gutterBottom>
          CEO (Chief Energy Officer)
        </Typography>
        <div>
          <Avatar
            src={lucy}
            sx={{ width: '150px', height: '150px' }}
            variant="circular"
            className={styles.member}
            alt="A black pug named Lucy."
          />
          <span>Lucy</span>
        </div>
      </div>
      <div className={styles.memberBlock}>
        <Typography variant="h6" gutterBottom>
          CFO (Chief Food Officer)
        </Typography>
        <div>
          <Avatar
            src={lucky}
            sx={{ width: '150px', height: '150px' }}
            variant="circular"
            className={styles.member}
            alt="A tan pug named Lucky."
          />
          <span>Lucky</span>
        </div>
      </div>
    </Container>
  );
};

export default About;
