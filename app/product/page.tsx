'use client';
import '../globals.css';
import { useTheme } from '@mui/material/styles';
import Nav from '@/app/components/Nav';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const page = () => {
  const theme = useTheme();

  return (
    <>
      <Nav />
      <Typography variant="h1">Product Page</Typography>
    </>
  );
};

export default page;
