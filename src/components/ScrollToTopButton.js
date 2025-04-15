import React from 'react';
import { Fab } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Fab 
      color="primary" 
      aria-label="scroll to top" 
      onClick={scrollToTop} 
      sx={{
        position: 'fixed', 
        bottom: 20, 
        right: 20, 
        boxShadow: 3
      }}
    >
      <ArrowUpwardIcon />
    </Fab>
  );
};

export default ScrollToTopButton;
