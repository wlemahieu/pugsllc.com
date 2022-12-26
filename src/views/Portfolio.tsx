/**
 * Portfolio page view
 */
import { FC } from 'react';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import axsripoff from '@assets/projects/axsripoff-com.png';
import coinsponge from '@assets/projects/coinsponge-com.png';
import wes from '@assets/wes.jpg';

const projects = [
  {
    title: 'axsripoff.com',
    url: 'https://axsripoff.com',
    github: 'https://github.com/wlemahieu/axsripoff.com',
    description:
      'A website where people can share their frustrating experiences with AXS.com without being ignored or blocked.',
    image: axsripoff,
  },
  {
    title: 'Coin Sponge',
    url: 'https://coinsponge.com',
    github: 'https://github.com/wlemahieu/coinsponge.com',
    description:
      'A website for finding crypto related information such as prices, social trends and coins that have real utility such as Nano $XNO.',
    image: coinsponge,
  },
  {
    title: 'Wesley LeMahieu',
    url: 'https://wesleylemahieu.com',
    github: 'https://github.com/wlemahieu/wesleylemahieu.com',
    description:
      'A personal website for Wesley LeMahieu where he does fun things like play with Nano, ThreeJS, React-Three-Fiber and more!',
    image: wes,
  },
];

const Portfolio: FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ height: '100%' }}>
      <Paper sx={{ p: 8, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Portfolio
        </Typography>
        <Typography variant="body1" sx={{ m: 3 }}>
          <b>W</b>
          <span>
            e've built up a portfolio of interesting web applications and software currently in use. Check them out
            below!
          </span>
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {projects.map((project, key) => (
            <Card key={`portfolio-item-${key}`} sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', m: 1 }}>
              <CardMedia sx={{ height: 140 }} image={project.image} title={project.title} />
              <CardContent sx={{ minHeight: '45%' }}>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  startIcon={<OpenInBrowserIcon />}
                  href={project.url}
                  target="_blank"
                  rel="external nofollow noopener"
                >
                  Visit
                </Button>
                <Button
                  size="small"
                  startIcon={<GitHubIcon />}
                  href={project.github}
                  target="_blank"
                  rel="external nofollow noopener"
                >
                  Github
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default Portfolio;
