import styles from './ListOrders.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { CustomerHeader } from '@/Customer/CustomerHeader/CustomerHeader';
import { CustomerContainer } from '@/Customer/CustomerContainer/CustomerContainer';
import {Grid} from '@mui/material'
import { Footer } from '@/Customer/Footer/Footer';

export const ListOrders = (props: any) => {
    const createIndividualBill = (IndividualBill) => {
        return(
            <Grid
                container
                sx={{
                    padding: '15px'
                }}>

            </Grid>
        )
    }

    return (<>
        <CustomerContainer>
            <CustomerHeader
                goBackEnabled={true}
                title={'Cuenta'}/>
            {props.orders.map(individualBill => createIndividualBill(individualBill))}
            <Footer
                text={''}
                buttonVisible={false}/>
        </CustomerContainer>
    </>);
}

ListOrders.defaultProps =
    {
        bills: []
    }

ListOrders.propTypes =
    {
        bills: PropTypes.array
    }
