// import styles from './ListOrderDetails.module.scss';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CustomerContainer } from '@/Customer/CustomerContainer/CustomerContainer';
import { CustomerHeader } from '@/Customer/CustomerHeader/CustomerHeader';
import { CustomerOrderDetail } from './CustomerOrderDetail';
import { Footer } from '@/Customer/Footer/Footer';
import { OrderState } from '@/Customer/OrderState/OrderState';
import { Grid } from '@mui/material';
import { MessageDialog } from '@/Common/MessageDialog';
import _ from 'lodash';

export const ListOrderDetails = (props: any) => {
    const [openConfirm, setOpenConfirm] = useState(false)

    const createOrderDetails = (customerOrderDetail, index) => {
        let currentCustomer = false
        if(customerOrderDetail.customer === props.customer){
            currentCustomer = true
        }

        return(
            <CustomerOrderDetail 
                key={index}
                currentCustomer={currentCustomer}
                onRemove={props.onRemoveOrderDetail}
                customerOrderDetail={customerOrderDetail}/>
        )
    }

    const confirmOrder = () => {
        props.onConfirmOrder(props.order)
    }

    const sortCustomers = (customerOrderDetails) => {
        for(let i in customerOrderDetails){
            if(customerOrderDetails[i].customer === props.customer){
                const customerOrderDetail = customerOrderDetails[i]
                customerOrderDetails.splice(i, 1)
                customerOrderDetails.unshift(customerOrderDetail)
                return customerOrderDetails
            } else {

            }
        }
        return customerOrderDetails
    }
    
    if(props.order != null){
        return (<>
            <CustomerContainer>
                <CustomerHeader
                    title={'Detalles de la orden'}
                    onGoBack={props.onGoBack}
                    goBackEnabled={true}>
                    <OrderState state={props.order.state}/> 
                </CustomerHeader>
                <Grid sx={{width: '100%'}}>
                    {sortCustomers(props.order.customerOrderDetail).map((customerOrderDetail, index) => createOrderDetails(customerOrderDetail, index))}
                </Grid>

                <Footer
                    text={'Total: $' + props.order.total}
                    buttonText='Confirmar Orden'
                    onClick={() => setOpenConfirm(true)}
                    buttonVisible={true}/>
            </CustomerContainer>

            <MessageDialog
                open={openConfirm}
                title={'Se confirmará la orden'}
                description={'Esta acción puede deshacerse antes de que su orden esté en preparación'}
                onClose={() => setOpenConfirm(false)}
                onSubmit={confirmOrder}/>
        </>);
    } else {
        return (<></>);
    }
}

ListOrderDetails.defaultProps =
{
    order: null,
    onGoBack: function(){},
    onRemoveOrderDetail: function(){},
    onConfirmOrder: function(){},
    customer: ''
}

ListOrderDetails.propTypes = 
{
    order: PropTypes.object,
    onGoBack: PropTypes.func,
    onRemoveOrderDetail: PropTypes.func,
    onConfirmOrder: PropTypes.func,
    customer: PropTypes.string
}