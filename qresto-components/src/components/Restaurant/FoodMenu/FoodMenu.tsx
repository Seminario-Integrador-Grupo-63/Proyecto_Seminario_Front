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
import { SideDishes } from './SideDishes/SideDishes';
import { Categories } from '../Categories/Categories';

export const FoodMenu = (props: any) => {
    const [value, setValue] = useState(0);
    const [containerHeight, setContainerHeight] = useState('85vh')

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    const handleScroll = () => {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop
        const newHeight = window.innerHeight - scrollPosition
        setContainerHeight(`${newHeight}px`)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (<>
        <Container
            maxWidth={false}
            sx={{
                width: '100%',
                height: containerHeight,
                transition: 'height 0.3s ease', // Agregado para una transición suave
            }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example">
                <Tab label="Categorias" />
                <Tab label="Platos" />
                <Tab label="Guarniciones" />
                <Tab label="Actualizar Precios" />
            </Tabs>
            <CustomTabPanel value={value} index={0}>
                <Categories categories={props.categories} onDelete={props.deleteCategory}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Dishes dishes={props.dishes} deleteDish={props.deleteDish}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <SideDishes sideDishes={props.sideDishes}
                deleteSideDish={props.deleteSideDish}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                Actualizar Precios
            </CustomTabPanel>
        </Container>
    </>)
}

FoodMenu.defaultProps = {
    dishes: [],
    sideDishes: [],
    categories: [],
    deleteDish: function(){},
    deleteSideDish:function(){},
    deleteCategory:function(){}
}

FoodMenu.propTypes = {
    dishes: PropTypes.array,
    sideDishes: PropTypes.array,
    categories: PropTypes.array,
    deleteDish: PropTypes.func,
    deleteSideDish: PropTypes.func,
    deleteCategory: PropTypes.func
}
