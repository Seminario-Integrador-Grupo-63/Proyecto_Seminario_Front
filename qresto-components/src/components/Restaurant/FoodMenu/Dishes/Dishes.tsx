import React from 'react';
import PropTypes from 'prop-types';
import { DishCard } from '../Dishes/DishCard/DishCard';
import {Container} from '@mui/material'

export const Dishes = (props: any) => {
    return (<>
        <Container maxWidth={false}>
            <p>Acá hay que iterar un array de dishes</p>
            <DishCard/>

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


