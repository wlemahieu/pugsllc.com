/**
 * We use cookies to give you the best online experience. By clicking "Accept Cookies" or clicking into any content on this site, you agree to allow cookies to be placed. To find out more visit ourcookie policy

 */

import { Component, createSignal, Show } from 'solid-js';
import Button from '@suid/material/Button';
import Link from '@suid/material/Link';
import { useNavigate } from '@solidjs/router';
import styles from '@components/CookiesPopup.module.css';
import useMediaQuery from '@suid/material/useMediaQuery';

const CookiesPopup: Component = () => {
  const navigate = useNavigate();
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  const [accepted, setAccepted] = createSignal(false);

  const onAccept = () => {
    setAccepted(true);
  };

  const RejectButton = () => (
    <Button
      class={`${styles.btn} ${minWidth1000() ? styles.wideBtn : ''}`}
      color="error"
      variant="contained"
      size="small"
    >
      Cookie Settings
    </Button>
  );

  const Verbiage = () => (
    <div class={styles.verbiage}>
      We use cookies to give you the best online experience. By clicking "Accept Cookies" or clicking into any content
      on this site, you agree to allow cookies to be placed. To find out more visit our{' '}
      <Link onClick={() => navigate('/cookies')}>cookie policy.</Link>
    </div>
  );

  const AcceptButton = () => (
    <Button
      class={`${styles.btn} ${minWidth1000() ? styles.wideBtn : ''}`}
      color="success"
      variant="contained"
      onClick={onAccept}
    >
      Accept Cookies
    </Button>
  );

  const WideView = () => (
    <div class={styles.root}>
      <RejectButton />
      <Verbiage />
      <AcceptButton />
    </div>
  );

  const NarrowView = () => (
    <div class={`${styles.root} ${!minWidth1000() ? styles.narrow : ''}`}>
      <Verbiage />
      <div class={styles.narrowBtns}>
        <RejectButton />
        <AcceptButton />
      </div>
    </div>
  );

  return <Show when={!accepted()}>{minWidth1000() ? <WideView /> : <NarrowView />}</Show>;
};

export default CookiesPopup;
