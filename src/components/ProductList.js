import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import {
  Grid, 
  Container, 
  Typography, 
  Pagination ,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Filter from './Filter'; 


const ProductList = () => {
  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [productsPerPage] = useState(9); 
  const [loading, setLoading] = useState(true); 

  const [categoryFilter, setCategoryFilter] = useState(''); 
  const [priceFilter, setPriceFilter] = useState(''); 
  const [searchQuery, setSearchQuery] = useState(''); 

  const sections = [
      {
        title: 'Какие товары можно купить по распродаже?',
        content: (
          <>
            <Typography variant="body1" paragraph>
            В интернет-магазине Технодом представлены разные виды техники. По сниженной стоимости можно приобрести:
            </Typography>
            <List>
              <ListItem><ListItemText primary="смартфоны и гаджеты;" /></ListItem>
              <ListItem><ListItemText primary="ноутбуки и компьютеры;" /></ListItem>
              <ListItem><ListItemText primary="фото- и видеотехнику;" /></ListItem>
              <ListItem><ListItemText primary="бытовую технику;" /></ListItem>
              <ListItem><ListItemText primary="технику для кухни." /></ListItem>
              <ListItem><ListItemText primary="В каждом разделе вы найдете актуальные модели с описанием и характеристиками. По акции можно приобрести новые смартфоны и гаджеты, купить ноутбуки и кондиционеры известных брендов. Вы также можете выбрать габаритную технику с хорошей скидкой. Посудомоечные машины, холодильники, стиральные машины — в раздел распродажи попадает самая разная продукция. Благодаря этому можно сэкономить на обустройстве кухни и ванной, покупке электроники для работы и развлечений." /></ListItem>
            </List>
          </>
          
        ),
      },
    {
          title: 'Почему техника продается со скидкой?',
          content: (
            <>
            
              <List>
                <ListItem><ListItemText primary="Распродажа состоит из новых товаров, которые можно купить в рассрочку или оплатить сразу. Скидка предоставляется в рамках акционного предложения и действует определенное время. Таким образом покупатели Технодома получают возможность приобрести новую брендовую технику по сниженной цене." /></ListItem>
               </List>
            </>
          ),
        },
        {
          title:"Как выбрать технику по акции?",
          content:(
            <>
              <List>
              <ListItem><ListItemText primary="Чтобы воспользоваться акционным предложением, достаточно выбрать нужную категорию в разделе распродажи и подобрать для себя подходящую модель. В описании товара вы увидите полную цену, процент скидки и сумму с учетом скидки. Так, вы сможете сразу подсчитать сумму скидки и оценить выгоду от покупки. Также можно следить за изменением цены на товар, нажав кнопку «Узнать о снижении цены» в верхней части описания." /></ListItem>

              </List>
            </>

          )
        },
        {
          title:"Как заказать товары со скидкой?",
          content:(
            <>
              <List>
              <ListItem><ListItemText primary="Чтобы купить бытовую технику и электронику по распродаже, достаточно добавить товар в корзину и оформить заказ. Вы можете получить товар с доставкой по Казахстану или воспользоваться самовывозом из магазинов Технодом. Доставка осуществляется бесплатно на заказы от 10.000 тенге, оплатить товар можно картой или наличными, оформить покупку в рассрочку." /></ListItem>

              </List>
            </>

          )
        }
        
      ]
  
  useEffect(() => {
    axios
      .get('https://67d58416d2c7857431f0a3e7.mockapi.io/market/')
      .then((response) => {
        setProducts(response.data); 
        setFilteredProducts(response.data); 
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let tempProducts = products;

    if (categoryFilter) {
      tempProducts = tempProducts.filter(product => product.category === categoryFilter);
    }

    if (priceFilter) {
      tempProducts = tempProducts.filter(product => parseInt(product.price) <= priceFilter);
    }

    if (searchQuery) {
      tempProducts = tempProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(tempProducts);
  }, [categoryFilter, priceFilter, searchQuery, products]);

  
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  if (loading) {
    return <Typography variant="h5">Загрузка...</Typography>;
  }

  return (
    <div>
      <Container>
        <Typography variant="h4" sx={{ marginBottom: 3, marginTop: 3 }}>
          Наши товары
        </Typography>

        <Filter 
          categories={categoryFilter} 
          priceRange={priceFilter} 
          searchQuery={searchQuery}
          onCategoryChange={(e) => setCategoryFilter(e.target.value)}
          onPriceChange={(e) => setPriceFilter(e.target.value)}
          onSearchChange={(e) => setSearchQuery(e.target.value)}
        />

        <Grid container spacing={3}>
          {currentProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>

        <Pagination
          count={Math.ceil(filteredProducts.length / productsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          sx={{ marginTop: 3, marginBottom: 3, display: 'flex', justifyContent: 'center' }}
        />

      </Container>
      <Container maxWidth="lg" sx={{ marginTop: 5 }}>
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
    </div>
  );
};

export default ProductList;
