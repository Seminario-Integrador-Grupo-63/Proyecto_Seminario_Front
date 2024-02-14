import styles from './ListOrders.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { CustomerHeader } from '@/Customer/CustomerHeader/CustomerHeader';
import { CustomerContainer } from '@/Customer/CustomerContainer/CustomerContainer';
import {Grid} from '@mui/material'
import { OrderButton } from './OrderButton';
import { Footer } from '@/Customer/Footer/Footer';

export const ListOrders = (props: any) => {
    const createOrder = (order) => {
        return(
            <Grid 
                key={order.id}
                container
                sx={{
                    padding: '15px'
                }}>
                <OrderButton
                    onClick={props.onOrderClick}
                    order={order}/>
            </Grid>
        )
    }

    return (<>
        <CustomerContainer>
            <CustomerHeader
                goBackEnabled={true}
                onGoBack={props.onGoBack}
                title={'Órdenes'}/>
                {props.orders.map(order => createOrder(order))}
            <Footer
                text={''}
                buttonVisible={false}/>
        </CustomerContainer>
    </>);   
}

ListOrders.defaultProps =
{
    orders: [],
    onGoBack: function(){},
    onOrderClick: function(){}
}

ListOrders.propTypes = 
{
    orders: PropTypes.array,
    onGoBack: PropTypes.func,
    onOrderClick: PropTypes.func,
    
}


