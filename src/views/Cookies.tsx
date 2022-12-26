/**
 * Cookies page view
 */
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const Cookies: FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ pl: 5, pr: 5 }}>
      <Typography variant="h3">Cookies Policy</Typography>
      <Typography variant="body2">Last updated: December 16, 2022</Typography>
      <Typography variant="body2">
        This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can
        understand what type of cookies We use, or the information We collect using Cookies and how that information is
        used. This Cookies Policy has been created with the help of the{' '}
        <Link href="https://www.termsfeed.com/cookies-policy-generator/" target="_blank">
          TermsFeed Cookies Policy Generator
        </Link>
        .
      </Typography>
      <Typography variant="body2">
        Cookies do not typically contain any information that personally identifies a user, but personal information
        that we store about You may be linked to the information stored in and obtained from Cookies. For further
        information on how We use, store and keep your personal data secure, see our Privacy Policy.
      </Typography>
      <Typography variant="body2">
        We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the
        Cookies We use.
      </Typography>
      <Typography variant="h3">Interpretation and Definitions</Typography>
      <Typography variant="h4">Interpretation</Typography>
      <Typography variant="body2">
        The words of which the initial letter is capitalized have meanings defined under the following conditions. The
        following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
      </Typography>
      <Typography variant="h4">Definitions</Typography>
      <Typography variant="body2">For the purposes of this Cookies Policy:</Typography>
      <ul>
        <li>
          <strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or
          &quot;Our&quot; in this Cookies Policy) refers to Pugs, LLC, 401 RYLAND ST STE 200-A, RENO, NV 89502 USA.
        </li>
        <li>
          <strong>Cookies</strong> means small files that are placed on Your computer, mobile device or any other device
          by a website, containing details of your browsing history on that website among its many uses.
        </li>
        <li>
          <strong>Website</strong> refers to Pugs, LLC, accessible from{' '}
          <Link onClick={() => navigate('/')}>https://pugsllc.com/</Link>
        </li>
        <li>
          <strong>You</strong> means the individual accessing or using the Website, or a company, or any legal entity on
          behalf of which such individual is accessing or using the Website, as applicable.
        </li>
      </ul>
      <Typography variant="h3">The use of the Cookies</Typography>
      <Typography variant="h4">Type of Cookies We Use</Typography>
      <Typography variant="body2">
        Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on your personal
        computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web
        browser.
      </Typography>
      <Typography variant="body2">
        We use both session and persistent Cookies for the purposes set out below:
      </Typography>
      <ul>
        <li>
          <Typography variant="body2">
            <strong>Necessary / Essential Cookies</strong>
          </Typography>
          <Typography variant="body2">Type: Session Cookies</Typography>
          <Typography variant="body2">Administered by: Us</Typography>
          <Typography variant="body2">
            Purpose: These Cookies are essential to provide You with services available through the Website and to
            enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user
            accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use
            these Cookies to provide You with those services.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Functionality Cookies</strong>
          </Typography>
          <Typography variant="body2">Type: Persistent Cookies</Typography>
          <Typography variant="body2">Administered by: Us</Typography>
          <Typography variant="body2">
            Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering
            your login details or language preference. The purpose of these Cookies is to provide You with a more
            personal experience and to avoid You having to re-enter your preferences every time You use the Website.
          </Typography>
        </li>
      </ul>
      <Typography variant="h4">Your Choices Regarding Cookies</Typography>
      <Typography variant="body2">
        If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your
        browser and then delete the Cookies saved in your browser associated with this website. You may use this option
        for preventing the use of Cookies at any time.
      </Typography>
      <Typography variant="body2">
        If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some
        features may not function properly.
      </Typography>
      <Typography variant="body2">
        If You'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help
        pages of your web browser.
      </Typography>
      <ul>
        <li>
          <Typography variant="body2">
            For the Chrome web browser, please visit this page from Google:{' '}
            <Link
              href="https://support.google.com/accounts/answer/32050"
              rel="external nofollow noopener"
              target="_blank"
            >
              https://support.google.com/accounts/answer/32050
            </Link>
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            For the Internet Explorer web browser, please visit this page from Microsoft:{' '}
            <Link href="http://support.microsoft.com/kb/278835" rel="external nofollow noopener" target="_blank">
              http://support.microsoft.com/kb/278835
            </Link>
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            For the Firefox web browser, please visit this page from Mozilla:{' '}
            <Link
              href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
              rel="external nofollow noopener"
              target="_blank"
            >
              https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
            </Link>
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            For the Safari web browser, please visit this page from Apple:{' '}
            <Link
              href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
              rel="external nofollow noopener"
              target="_blank"
            >
              https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
            </Link>
          </Typography>
        </li>
      </ul>
      <Typography variant="body2">
        For any other web browser, please visit your web browser's official web pages.
      </Typography>
      <Typography variant="h4">More Information about Cookies</Typography>
      <Typography variant="body2">
        You can learn more about cookies here:{' '}
        <Link href="https://www.termsfeed.com/blog/cookies/" target="_blank">
          All About Cookies by TermsFeed
        </Link>
        .
      </Typography>
      <Typography variant="h4">Contact Us</Typography>
      <Typography variant="body2">If you have any questions about this Cookies Policy, You can contact us:</Typography>
      <ul>
        <li>
          <Typography variant="body2">
            By email: <Link href="mailto:legal@pugsllc.com">legal@pugsllc.com</Link>
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            By visiting this page on our website:{' '}
            <Link onClick={() => navigate('/cookies')}>https://pugsllc.com/cookies</Link>
          </Typography>
        </li>
      </ul>
    </Box>
  );
};

export default Cookies;
