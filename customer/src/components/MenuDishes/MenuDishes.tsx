import styles from './MenuDishes.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {Container} from '@mui/material'
import { CustomerAppBar } from '../CustomerAppBar/CustomerAppBar';
import {Grid} from '@mui/material'
import {theme} from '../theme'
import { CustomerContainer } from '../CustomerContainer/CustomerContainer';
import { dishes } from '../FakeData/DishesFakeData';
import { ButtonDish } from './ButtonDish';

export const MenuDishes = (props: any) => {

    const createDish = (dish) => {
        return(
            <Grid
                key={dish.id}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '2.5vh',
                    marginBottom: '2.5vh'
                }}>
                <ButtonDish 
                    dish={dish}
                    onClick={props.onClickDish}/>
            </Grid>
        )
    }

    return (<>
        <CustomerContainer>
            <CustomerAppBar 
                title={props.title}
                goBackEnabled={true}
                searchEnabled={true}/>
            <Grid 
                sx={{
                    width: '97%',
                    overflowY: 'scroll',
                    '&::-webkit-scrollbar':{
                        width:0,
                    }
                }}>
                {props.dishes.map(dish => createDish(dish))}
            </Grid>
        </CustomerContainer>
    </>);
}

MenuDishes.defaultProps =
{
    dishes: dishes,
    title: 'Title',
    onClickDish: function(){}
}

MenuDishes.propTypes = 
{
    dishes: PropTypes.array,
    title: PropTypes.string,
    onClickDish: PropTypes.func
}

