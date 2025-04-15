import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

const ProductCard = ({ product }) => {
  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3, height: 450, display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        alt={product.name}
        height="200"
        image={product.image}
        sx={{ borderRadius: 1 }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '18px' }}>
          {product.name}
        </Typography>
        <Typography variant="body2" sx={{ color: '#2ecc71', fontSize: '16px', marginTop: 1 }}>
          {product.price} Tenge
        </Typography>
        <Typography variant="body2" sx={{ color: '#7f8c8d', fontSize: '14px', marginTop: 1 }}>
          {product.description}
        </Typography>
      </CardContent>
    
      <Box sx={{ padding: 2, marginTop: 'auto' }}>
        <Button variant="contained" sx={{ width: '100%' }} onClick={addToCart}>
          Добавить в корзину
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
