import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';
import PrivacyPolicy from '../pages/PrivacyPolicy';
const Footer = () => {
  return (
    <Box sx={{
      backgroundColor: '#282c34', 
      color: 'white', 
      padding: '20px 0', 
      marginTop: '50px', 
      textAlign: 'center'
    }}>
      <Container>
        <Typography variant="body2" sx={{ marginBottom: 1 }}>
          © {new Date().getFullYear()} Tech Marketplace. Все права защищены.
        </Typography>

        <Box>
          <Link href="/privacy-policy" color="inherit" sx={{ marginRight: 3 }}>
            Политика конфиденциальности
          </Link>
          <Link href="/support" color="inherit">
            Техническая поддержка
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
