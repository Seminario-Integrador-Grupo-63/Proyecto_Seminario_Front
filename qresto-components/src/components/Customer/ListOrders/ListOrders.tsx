import styles from './ListOrders.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '@/Customer/Header/Header';
import { CustomerContainer } from '@/Customer/CustomerContainer/CustomerContainer';
import {Grid} from '@mui/material'
import { OrderButton } from './OrderButton';
import { Footer } from '@/Customer/Footer/Footer';

export const ListOrders = (props: any) => {
    const createOrder = (order) => {
        return(
            <Grid 
                container
                sx={{
                    padding: '15px'
                }}>
                <OrderButton
                    key={order.id}
                    order={order}/>
            </Grid>
        )
    }

    return (<>
        <CustomerContainer>
            <Header
                goBackEnabled={true}
                title={'Ordenes'}/>
            {props.orders.map(order => createOrder(order))}
            <Footer
                text={''}
                buttonVisible={false}/>
        </CustomerContainer>
    </>);   
}

ListOrders.defaultProps =
{
    orders: []
}

ListOrders.propTypes = 
{
    orders: PropTypes.array
}


