import React, { useState, useEffect } from 'react';
import { Container, CardMedia, Typography, Button, Grid, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles'; 

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const theme = useTheme(); 

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); 
  };

  const total = cartItems.reduce((sum, item) => sum + parseInt(item.price), 0);

  return (
    <Container sx={{ marginTop: 5,borderRadius:3,  boxShadow:2,paddingTop:3}}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>Ваша корзина</Typography>
      <Grid container spacing={3}>
        {cartItems.map(item => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Box 
              sx={{ 
                padding: 2, 
                borderRadius: 2, 
                boxShadow: 2, 
                backgroundColor: theme.palette.background.paper, 
                color: theme.palette.text.primary, 
              }}
            >
              <CardMedia
                component="img"
                alt={item.name}
                height="220"  
                image={item.image}
                sx={{ borderRadius: 1 }}
              />
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2" sx={{ color: '#2ecc71' }}>{item.price} Tenge</Typography>
              <Button
                variant="contained"
                color="error"
                onClick={() => removeFromCart(item.id)}
                sx={{ marginTop: 1 }}
              >
                Удалить
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ marginTop: 3, textAlign: 'center' }}>
        <Typography variant="h6">Итого: {total}</Typography>
        <Button variant="contained" sx={{ marginTop: 2, marginBottom: 3 }} onClick={() => alert('Поздравляю с успешной покупкой')}>
          Перейти к оформлению
        </Button>
      </Box>
    </Container>
  );
};

export default Cart;