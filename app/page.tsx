import './globals.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Nav from '@/components/Nav';

const page = () => {
  return (
    <>
      <Nav />
      <Box sx={{ m: 0, p: 4, bgcolor: '#f7f7f7' }}>
        <Typography
          variant="h3"
          sx={{ textAlign: 'center', fontWeight: '400' }}
        >
          The Ultimate AI{' '}
          <Box
            component="span"
            sx={{ color: 'blue', fontWeight: '700' }}
          >
            Productivity Platform
          </Box>{' '}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            fontWeight: '300',
            color: 'text.secondary',
          }}
        >
          Subheading Text
        </Typography>
      </Box>
    </>
  );
};

export default page;
