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
import UpdatePrices from "@/Restaurant/UpdatePrices/UpdatePrices";

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
                <Tab label="Categorías" />
                <Tab label="Platos" />
                <Tab label="Guarniciones" />
                <Tab label="Actualizar Precios" />
            </Tabs>
            <CustomTabPanel value={value} index={0}>
                <Categories
                    categories={props.categories}
                    onDelete={props.deleteCategory}
                    onUpdate={props.updateCategory}
                    onCreate={props.createCategory}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Dishes 
                    menu={props.menu}
                    createDish={props.createDish}
                    updateDish={props.updateDish}
                    categories={props.categories}
                    sideDishes={props.sideDishes}
                    deleteDish={props.deleteDish}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <SideDishes 
                    sideDishes={props.sideDishes}
                    deleteSideDish={props.deleteSideDish}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <UpdatePrices
                    onSubmit={props.handleUpdatePrices}
                    categories={props.categories}/>
            </CustomTabPanel>
        </Container>
    </>)
}

FoodMenu.defaultProps = {
    sideDishes: [],
    categories: [],
    menu: [],
    createDish: function(){},
    updateDish: function(){},
    deleteDish: function(){},
    deleteSideDish: function(){},
    deleteCategory: function(){},
    crateCategory: function(){},
    updatecategory: function(){},
    handleUpdatePrices: function () {},
}

FoodMenu.propTypes = {
    sideDishes: PropTypes.array,
    categories: PropTypes.array,
    createDish: PropTypes.func,
    updateDish: PropTypes.func,
    deleteDish: PropTypes.func,
    deleteSideDish: PropTypes.func,
    deleteCategory: PropTypes.func,
    createCategory: PropTypes.func,
    updateCategory: PropTypes.func,
    handleUpdatePrices: PropTypes.func,
    menu: PropTypes.array
}
