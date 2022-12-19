/**
 * Contact page view
 */
import { Component, createSignal } from 'solid-js';
import styles from '@views/Contact.module.css';
import Button from '@suid/material/Button';
import TextField from '@suid/material/TextField';
import Typography from '@suid/material/Typography';
import Container from '@suid/material/Container';

const Contact: Component = () => {
  const [name, setName] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [company, setCompany] = createSignal('');
  const [phone, setPhone] = createSignal('');

  const onChangeName = (text: string) => setName(text);
  const onChangeEmail = (text: string) => setEmail(text);
  const onChangeCompany = (text: string) => setCompany(text);
  const onChangePhone = (text: string) => setPhone(text);

  return (
    <Container maxWidth="xs" class={styles.root}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <div class={styles.form}>
        <Typography variant="h6" gutterBottom>
          Serious inquiries only please:
        </Typography>
        <TextField
          fullWidth
          id="name"
          label="Name"
          variant="filled"
          value={name()}
          onChange={(e) => onChangeName(e.currentTarget.value)}
          required
        />
        <TextField
          fullWidth
          id="email"
          label="Email"
          variant="filled"
          value={email()}
          onChange={(e) => onChangeEmail(e.currentTarget.value)}
          required
        />
        <TextField
          fullWidth
          id="company"
          label="Company"
          variant="filled"
          value={company()}
          onChange={(e) => onChangeCompany(e.currentTarget.value)}
        />
        <TextField
          fullWidth
          id="phone"
          label="Phone"
          variant="filled"
          value={phone()}
          onChange={(e) => onChangePhone(e.currentTarget.value)}
        />
        <Button fullWidth color="primary" variant="contained" disabled>
          Submit
        </Button>
      </div>
    </Container>
  );
};

export default Contact;
