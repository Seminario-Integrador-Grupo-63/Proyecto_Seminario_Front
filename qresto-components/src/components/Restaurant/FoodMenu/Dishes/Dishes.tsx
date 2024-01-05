import React from 'react';
import PropTypes from 'prop-types';
import { DishCard } from '../Dishes/DishCard/DishCard';
import {
    Container,
    Grid
} from '@mui/material'
import { dishes } from '@/Common/FakeData/DishesData';

export const Dishes = (props: any) => {
    return (<>
        <Container 
            maxWidth={false}>
            <Grid container spacing={2}>
                {dishes.map((dish, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <DishCard dish={dish} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    </>);
}

Dishes.defaultProps =
{
    dishes: []
}

Dishes.propTypes = 
{
    dishes: PropTypes.array
}


