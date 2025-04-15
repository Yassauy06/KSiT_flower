import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Header = () => {
  return (
    <div>
      <AppBar  position="sticky">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            <Link to="/" style={{color:"inherit ",textDecoration:"none"}}>Tech Marketplace</Link>
          </Typography>
          
          <Box>
            <Button color="inherit" sx={{ marginRight: 2 }}>
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Главная</Link>
            </Button>
            <Button color="inherit" sx={{ marginRight: 2 }}>
              <Link to="/cart" style={{ color: 'inherit', textDecoration: 'none' }}>Корзина</Link>
            </Button>
            <Button color="inherit">
              <Link to="/support" style={{ color: 'inherit', textDecoration: 'none' }}>Техподдержка</Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Carousel 
        autoPlay 
        infiniteLoop 
        showThumbs={false} 
        showStatus={false} 
        interval={3000} 
        transitionTime={1000} 
        swipeable={true}
      >
        <div>
          <img  src="https://o.dns-shop.ru/original/st4/d1809d2943110601952dd422d7b5ab30/2c71f7c707fdfe0802fcd83d1a7d75ce6fe62465c2b7fc050ca9dd966d145d34.jpg" alt="Слайд 1" />
        </div>
        <div>
          <img  src="https://o.dns-shop.ru/original/st1/a0c8aba725f9e56e9d81f707f777f471/ad51d0e491fbd3b51479f8cf4f000ec84ecde7e96d962e2f92f870b65d3b75ce.jpg" alt="Слайд 2" />
        </div>
        <div>
          <img  src="https://o.dns-shop.ru/original/st4/1002c18098b70391b5e9a9e861d4c494/3cbce0b2d15b59cc13f4d52c924d36060a1d38b81fbb7bfd52eeac866139411d.jpg" alt="Слайд 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Header;
