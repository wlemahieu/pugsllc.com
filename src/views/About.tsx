/**
 * About page view
 */
import { Component } from 'solid-js';
import styles from '@views/About.module.css';
import Typography from '@suid/material/Typography';
import Container from '@suid/material/Container';

const About: Component = () => {
  return (
    <Container maxWidth="xs" class={styles.root}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body2" gutterBottom>
        Pugs, LLC is a multi-faceted umbrella of web applications and software. It was founded in 2020 right in the
        heart of Las Vegas, NV. We aim to bring cost-effective, scalable cloud architecture solutions to companies in
        need.
      </Typography>
    </Container>
  );
};

export default About;
