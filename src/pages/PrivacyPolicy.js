import React from 'react';
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: '1. Сбор и использование информации',
      content: (
        <>
          <Typography variant="body1" paragraph>
            Мы собираем личную информацию, которую вы предоставляете нам при регистрации, оформлении заказа,
            подписке на новости или при обратной связи. Это может включать:
          </Typography>
          <List>
            <ListItem><ListItemText primary="Имя и фамилия" /></ListItem>
            <ListItem><ListItemText primary="Адрес электронной почты" /></ListItem>
            <ListItem><ListItemText primary="Телефон" /></ListItem>
            <ListItem><ListItemText primary="Адрес доставки" /></ListItem>
            <ListItem><ListItemText primary="Платежная информация (например, номер карты)" /></ListItem>
          </List>
        </>
      ),
    },
    {
      title: '2. Использование информации',
      content: (
        <>
          <Typography variant="body1" paragraph>
            Мы используем вашу информацию для:
          </Typography>
          <List>
            <ListItem><ListItemText primary="Оформления и обработки заказов" /></ListItem>
            <ListItem><ListItemText primary="Предоставления информации о товарах, услугах и акциях" /></ListItem>
            <ListItem><ListItemText primary="Обработки запросов на поддержку" /></ListItem>
            <ListItem><ListItemText primary="Улучшения качества обслуживания" /></ListItem>
          </List>
        </>
      ),
    },
    {
      title: '3. Защита информации',
      content: (
        <Typography variant="body1" paragraph>
          Мы принимаем все необходимые меры для защиты вашей личной информации с помощью современных технологий безопасности.
        </Typography>
      ),
    },
    {
      title: '4. Cookies (файлы cookie)',
      content: (
        <Typography variant="body1" paragraph>
          Мы используем файлы cookie для улучшения качества сервиса, персонализации контента и рекламы.
        </Typography>
      ),
    },
    {
      title: '5. Доступ и исправление данных',
      content: (
        <Typography variant="body1" paragraph>
          Вы имеете право запросить доступ к вашей личной информации и внести изменения или удалить её.
        </Typography>
      ),
    },
    {
      title: '6. Изменения в Политике конфиденциальности',
      content: (
        <Typography variant="body1" paragraph>
          Мы оставляем за собой право обновлять эту Политику конфиденциальности. Изменения вступают в силу сразу
          после их публикации.
        </Typography>
      ),
    },
    {
      title: '7. Контактная информация',
      content: (
        <>
          <Typography variant="body1" paragraph>
            Если у вас есть вопросы, свяжитесь с нами:
          </Typography>
          <List>
            <ListItem><ListItemText primary="Email: support@example.com" /></ListItem>
            <ListItem><ListItemText primary="Телефон: +7 (123) 456-7890" /></ListItem>
          </List>
        </>
      ),
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ marginTop: 5 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
        Политика конфиденциальности
      </Typography>
      {sections.map((section, index) => (
        <Accordion key={index} sx={{ marginBottom: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              {section.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>{section.content}</AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default PrivacyPolicy;
