import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const domains = [
  {
    url: 'marijuanalocators.com',
    markets: ['Cannabis', 'Entertainment'],
    price: '$250,000',
  },
  {
    url: 'medicalmarijuanalocators.com',
    markets: ['Health', 'Cannabis'],
    price: '$125,000',
  },
  {
    url: 'marijuana.gs',
    markets: ['Cannabis', 'Entertainment'],
    price: '$50,000',
  },
  {
    url: 'marijuana.gs',
    markets: ['Cannabis', 'Entertainment'],
    price: '$75,000',
  },
  {
    url: 'psilocyn.co',
    markets: ['Mental Health', 'Entertainment'],
    price: '$125,000',
  },
  {
    url: 'psilocyn.doctor',
    markets: ['Mental Health'],
    price: '$100,000',
  },
  {
    url: 'psilocyn.info',
    markets: ['Mental Health'],
    price: '$75,000',
  },
  {
    url: 'psilocybin.doctor',
    markets: ['Mental Health'],
    price: '$100,000',
  },
  {
    url: 'psilocybin.gs',
    markets: ['Mental Health'],
    price: '$75,000',
  },
  {
    url: 'purple.poker',
    markets: ['Poker', 'Entertainment'],
    price: '$150,000',
  },
];

const Domains = () => {
  return (
    <Container maxWidth="md">
      <TableContainer component={Paper}>
        <Table sx={{ overflow: 'hidden' }} aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Domain URL</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Markets</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Asking Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {domains.map((row, key) => {
              return (
                <TableRow key={`key-${key}`} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.url}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.markets.join(', ')}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.price}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Domains;
