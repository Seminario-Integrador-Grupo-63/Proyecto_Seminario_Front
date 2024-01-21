import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Box,
  Tabs,
  Tab,
} from '@mui/material';
import { CustomTabPanel } from '@/Common/CustomTabPanel';
import { Dishes } from './Dishes/Dishes';

export const FoodMenu = (props: any) => {
  const [value, setValue] = useState(0);
  const [containerHeight, setContainerHeight] = useState('95vh');

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const newHeight = window.innerHeight - scrollPosition;
    setContainerHeight(`${newHeight}px`);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          border: '1px solid gray',
          borderRadius: '8px',
          width: '95%',
          height: containerHeight,
          transition: 'height 0.3s ease', // Agregado para una transición suave
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Categorias" />
            <Tab label="Platos" />
            <Tab label="Guarniciones" />
            <Tab label="Actualizar Precios" />
          </Tabs>
          <CustomTabPanel value={value} index={0}>
            Categorías
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Dishes dishes={props.dishes} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Guarniciones
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            Actualizar Precios
          </CustomTabPanel>
        </Box>
      </Container>
    </>
  );
};

FoodMenu.defaultProps = {
  dishes: [],
  
};

FoodMenu.propTypes = {
  dishes: PropTypes.array,
};
