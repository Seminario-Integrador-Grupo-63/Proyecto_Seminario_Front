import styles from './MenuDishes.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { CustomerHeader } from '@/Customer/CustomerHeader/CustomerHeader';
import {Grid} from '@mui/material'
import { CustomerContainer } from '@/Customer/CustomerContainer/CustomerContainer';
import { dishes } from '@/Common/FakeData/DishesData';
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
            <CustomerHeader
                title={props.title}
                onGoBack={props.onGoBack}
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
    onClickDish: function(){},
    onGoBack: function(){}
}

MenuDishes.propTypes = 
{
    dishes: PropTypes.array,
    title: PropTypes.string,
    onClickDish: PropTypes.func,
    onGoBack: PropTypes.func
}

