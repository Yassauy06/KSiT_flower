import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const Support = () => {
  return (
    <Container sx={{ marginTop: 5 ,marginBottom:5}}>
      <Typography 
        variant="h4" 
        sx={{ 
          marginBottom: 4, 
          fontWeight: 'bold', 
          color: 'primary.main', 
          textAlign: 'center' 
        }}
      >
        Техническая поддержка
      </Typography>

      <Paper elevation={3} sx={{ padding: 4, borderRadius: 3, backgroundColor: 'background.paper' }}>
        <Typography variant="body1" sx={{ marginBottom: 3, lineHeight: 1.8 }}>
          Если у вас возникли вопросы или проблемы с нашим сервисом, команда технической поддержки всегда готова помочь! 
          Мы ценим каждого клиента и стремимся решить любые возникшие трудности в кратчайшие сроки.
        </Typography>

        <Typography variant="h6" sx={{ marginBottom: 2, color: 'secondary.main' }}>
          Как мы можем вам помочь?
        </Typography>

        <Box sx={{ marginBottom: 4 }}>
          <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
            <li>Проблемы с заказом или оплатой</li>
            <li>Технические ошибки на сайте</li>
            <li>Вопросы по доставке и возврату товаров</li>
            <li>Консультации по выбору продукции</li>
          </ul>
        </Box>

        <Box sx={{  padding: 3, borderRadius: 2 }}>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            📧 Email: <a href="mailto:support@techmarket.com" style={{ textDecoration: 'none', color: '#1976D2' }}>support@techmarket.com</a>
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            📞 Телефон: <a href="tel:+78001234567" style={{ textDecoration: 'none', color: '#1976D2' }}>+7 (800) 123-45-67</a>
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            🕒 Время работы: Пн-Пт, 09:00 - 18:00
          </Typography>
        </Box>

        <Typography variant="body2" sx={{ marginTop: 4, textAlign: 'center', color: 'text.secondary' }}>
          Мы гарантируем, что ваш запрос будет обработан в приоритетном порядке. Благодарим за ваше терпение!
        </Typography>
      </Paper>
    </Container>
  );
};

export default Support;
