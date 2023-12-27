import React from 'react';
import PropTypes from 'prop-types';
import { DishCard } from '../Dishes/DishCard/DishCard';
import {Container} from '@mui/material'
import { dishes } from '@/components/Common/FakeData/DishesData';

export const Dishes = (props: any) => {
    return (<>
        <Container maxWidth={false}>
        <div>
                {dishes.map(dish => <DishCard dish={dish} />)}
            </div>

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


