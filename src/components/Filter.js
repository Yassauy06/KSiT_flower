import React from 'react';
import { TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const Filter = ({ kategories, priceRange, searchQuery, onCategoryChange, onPriceChange, onSearchChange }) => {
  return (
    <div>
      <TextField
        label="Поиск по названию"
        value={searchQuery}
        onChange={onSearchChange}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Категория</InputLabel>
        <Select
          label="Категория"
          value={kategories}
          onChange={onCategoryChange}
        >
          <MenuItem value="">Все</MenuItem>
          <MenuItem value="Ноутбуки">Ноутбуки</MenuItem>
          <MenuItem value="Телефоны">Телефоны</MenuItem>
          <MenuItem value="Наушники">Наушники</MenuItem>
          <MenuItem value="Компьютеры">Компьютеры</MenuItem>
          <MenuItem value="Мониторы">Мониторы</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Цена до"
        type="number"
        value={priceRange}
        onChange={onPriceChange}
        fullWidth
        margin="normal"
      />
      
      
    </div>
  );
};

export default Filter;
