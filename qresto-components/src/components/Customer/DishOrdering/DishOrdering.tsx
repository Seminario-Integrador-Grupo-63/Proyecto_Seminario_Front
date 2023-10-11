// import styles from './DishOrdering.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { CustomerContainer } from '@/Customer/CustomerContainer/CustomerContainer';
import { CustomerHeader } from '@/Customer/CustomerHeader/CustomerHeader';
import { Box, Typography } from '@mui/material';
import { theme } from '@/Common/Theme/themes';
import { SideDishSelector } from './SideDishSelector';
import {Grid} from '@mui/material'
import { AdderFooter } from '../AdderFooter/AdderFooter';

export const DishOrdering = (props: any) => {
    const addDish = (totalPrice, units) => {
        const orderDetails = []
        for (let i = 0; i < units; i++){
            orderDetails.push({
                dish: props.dish,
                sideDish: null,
                customer: props.customer,
                subtotal: props.dish.price
            })
        }
        props.onAdd(orderDetails)
    }

    if(props.dish != null){
        return (<>
            <CustomerContainer>
                <CustomerHeader
                    title={props.dish.name}
                    goBackEnabled={true}
                    onGoBack={props.goBack}/>
                <Box
                    component="img"
                    sx={{
                        height: 'auto',
                        width: '100%',
                        marginBottom: '3vh'
                    }}
                    alt=""
                    src={props.dish.image}/>
                <Grid
                    sx={{
                        width: '90vw'
                    }}>
                    <Box 
                        sx={{
                            background: theme.palette.secondary.light,
                            borderRadius: '5px',
                            padding: '10px',
                            marginBottom: '3vh'
                        }}>
                        <Typography>
                            {props.dish.description}
                        </Typography>
                    </Box>

                    <SideDishSelector 
                        title={'Guarniciones'}
                        sideDishes={props.dish.sideDishes}/>
                </Grid>
                <AdderFooter 
                    dish={props.dish}
                    onAdd={addDish}
                    />
            </CustomerContainer>
        </>);
    } else {
        return (<></>)
    }
}

DishOrdering.defaultProps =
{
    dish: null,
    goBack: function(){},
    customer: '',
    onAdd: function(){}
}

DishOrdering.propTypes = 
{
    dish: PropTypes.object,
    goBack: PropTypes.func,
    customer: PropTypes.string,
    onAdd: PropTypes.func
}
/**
console.log(" ")
console.log("DishOrdering")
console.log(": ", )
*/

