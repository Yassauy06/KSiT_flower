import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Button } from '@mui/material';
import ProductList from './components/ProductList';
import Cart from './pages/Cart';
import Header from './components/Header';
import Support from './pages/support';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import PrivacyPolicy from './pages/PrivacyPolicy';
import zIndex from '@mui/material/styles/zIndex';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Button
          variant="contained"
          color="primary"
          onClick={toggleTheme}
          sx={{
            position: 'fixed',
            zIndex:'1',
            bottom: 90,
            right: 20,
            padding:"20px 0",
            borderRadius: '50px',
            boxShadow: 3,
          }}
        >
          {darkMode ? '🌙' : '☀️'}
        </Button>

        
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} /> </Routes>

        <Footer />
        <ScrollToTopButton />
      </Router>
    </ThemeProvider>
  );
};

export default App;
