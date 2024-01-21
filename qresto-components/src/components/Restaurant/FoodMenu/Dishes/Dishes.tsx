import React from 'react';
import PropTypes from 'prop-types';
//import { DishCard } from '../Dishes/DishCard/DishCard';
import {Container} from '@mui/material'


export const Dishes = (props: any) => {
    return (<>
        <Container maxWidth={false}>
             <div >
                 {props.onDish()}
            </div>

        </Container>
        
    </>);
}

Dishes.defaultProps =
{
    onDish: function(){} 
}

Dishes.propTypes = 
{
    onDish: PropTypes.func
}


