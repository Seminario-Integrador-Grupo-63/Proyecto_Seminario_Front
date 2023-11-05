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
                onDelete={props.onDeleteOrderDetail}
                customerOrderDetail={customerOrderDetail}/>
        )
    }

    const confirm = () => {
        props.onConfirmOrder()
        setOpenConfirm(false)
    }

    const cancel = () => {
        props.onCancelOrder(props.order)
        setOpenConfirm(false)
    }

    const openConfirmDialog = () => {
        setOpenConfirm(true)
    }   

    const openCancelDialog = () => {
        setOpenConfirm(true)
    }

    const requestBill = () => {
        props.onRequestBill(props.order)
    }

    // const stateConfig = {
    //     'processing': {
    //         confirm: {
    //             title: 'Se confirmará la orden',
    //             description: 'Esta acción puede deshacerse antes de que su orden esté en preparación',
    //             action: confirm,
    //         },
    //         footer: {
    //             text: props.order != null ? 'Total: $' + props.order.total : 'Total: $0',
    //             buttonText: 'Confirmar orden',
    //             action: openConfirmDialog,
    //             buttonVisible: true,
    //         }
    //     },
    //     'waiting': {
    //         confirm: {
    //             title: 'Se cancelará la orden',
    //             description: 'Esta acción no puede deshacerse',
    //             action: cancel,
    //         },
    //         footer: {
    //             text: props.order != null ? 'Total: $' + props.order.total : 'Total: $0',
    //             buttonText: 'Cancelar Orden',
    //             buttonVisible: true,
    //             action: openCancelDialog
    //         }
    //     },
    //     'preparation': {
    //         confirm: {
    //             title: 'Se cancelará la orden',
    //             description: 'Esta acción no puede deshacerse',
    //             action: cancel,
    //         },
    //         footer: {
    //             text: props.order != null ? 'Total: $' + props.order.total : 'Total: $0',
    //             buttonText: 'Cancelar Orden',
    //             action: openCancelDialog,
    //             buttonVisible: false,
    //         }
    //     },
    //     'delivered': {
    //         confirm: {
    //             title: '',
    //             description: '',
    //             action: cancel,
    //         },
    //         footer: {
    //             text: props.order != null ? 'Total: $' + props.order.total : 'Total: $0',
    //             buttonText: 'Pedir cuenta',
    //             action: requestBill,
    //             buttonVisible: true,
    //         }
    //     },
    // }


    // --------------------------------------------------------------- Hardcode
    const stateConfig = {
        'processing': {
            confirm: {
                title: 'Se confirmará la orden',
                description: 'Esta acción puede deshacerse antes de que su orden esté en preparación',
                action: confirm,
            },
            footer: {
                text: props.order != null ? 'Total: $' + props.order.total : 'Total: $0',
                buttonText: 'Confirmar orden',
                action: openConfirmDialog,
                buttonVisible: true,
            }
        },
        'waiting': {
            confirm: {
                title: 'Se cancelará la orden',
                description: 'Esta acción no puede deshacerse',
                action: cancel,
            },
            footer: {
                text: props.order != null ? 'Total: $' + props.order.total : 'Total: $0',
                buttonText: 'Pedir cuenta',
                action: requestBill,
                buttonVisible: true,
            }
        },
        'preparation': {
            confirm: {
                title: 'Se cancelará la orden',
                description: 'Esta acción no puede deshacerse',
                action: cancel,
            },
            footer: {
                text: props.order != null ? 'Total: $' + props.order.total : 'Total: $0',
                buttonText: 'Pedir cuenta',
                action: requestBill,
                buttonVisible: true,
            }
        },
        'delivered': {
            confirm: {
                title: '',
                description: '',
                action: cancel,
            },
            footer: {
                text: props.order != null ? 'Total: $' + props.order.total : 'Total: $0',
                buttonText: 'Pedir cuenta',
                action: requestBill,
                buttonVisible: true,
            }
        },
    }
    //--------------------------------------------------------------------------

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
                    {sortCustomers(props.order.customerOrderDetails).map((customerOrderDetail, index) => createOrderDetails(customerOrderDetail, index))}
                </Grid>

                <Footer
                    text={stateConfig[props.order.state].footer.text}
                    buttonText={stateConfig[props.order.state].footer.buttonText}
                    onClick={stateConfig[props.order.state].footer.action}
                    buttonVisible={stateConfig[props.order.state].footer.buttonVisible}/>

            </CustomerContainer>
                
            <MessageDialog
                open={openConfirm}
                title={stateConfig[props.order.state].confirm.title}
                description={stateConfig[props.order.state].confirm.description}
                onClose={() => setOpenConfirm(false)}
                onSubmit={stateConfig[props.order.state].confirm.action}/>
        </>);
    } else {
        return (<></>);
    }
}

ListOrderDetails.defaultProps =
{
    order: null,
    onGoBack: function(){},
    onDeleteOrderDetail: function(){},
    onConfirmOrder: function(){},
    customer: '',
    onRequestBill: function(){},
    onCancelOrder: function(){}
}

ListOrderDetails.propTypes = 
{
    order: PropTypes.object,
    onGoBack: PropTypes.func,
    onDeleteOrderDetail: PropTypes.func,
    onConfirmOrder: PropTypes.func,
    customer: PropTypes.string,
    onRequestBill: PropTypes.func,
    onCancelOrder: PropTypes.func
}