// import styles from './CustomerOrderDetail.module.scss';
import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Grid} from '@mui/material'
import { Typography } from '@mui/material'
import { ButtonOrderDetails} from './ButtonOrderDetails'
import { MessageDialog } from '@/Common/MessageDialog';

export const CustomerOrderDetail = (props: any) => {
    const [openMessageDialog, setOpenMessageDialog] = useState(false)
    const [messageTitle, setMessageTitle] = useState('')
    const [actionData, setActionData] = useState(null)

    const createDish = (orderDetail) => {

        return(
            <Grid 
                key={orderDetail.dish.id} 
                item 
                xs={12}
                sx={{
                    marginTop: '1vh',
                    marginBottom: '1vh'
                }}>
                <ButtonOrderDetails 
                    orderDetail={orderDetail}
                    dish={orderDetail.dish}
                    removeButtonVisible={props.currentCustomer}
                    onRemove={() => confirmRemoveOrderDetail(orderDetail)}
                    sideDish={orderDetail.sideDish}/>
            </Grid>
        )
    }

    const confirmRemoveOrderDetail = (orderDetail) => {
        setMessageTitle('Se removerá el producto "' + orderDetail.dish.name + '" de su orden')
        setActionData(orderDetail)
        setOpenMessageDialog(true)
    }

    const removeOrderDetail = () => {
        let sideDishId = 0
        if(actionData.sideDish != null) {
            sideDishId = actionData.sideDish.id
        } else {
            sideDishId = null
        }

        const orderDetailDTO = {
            dish: actionData.dish.id,
            sideDish: sideDishId,
            observation: actionData.observation,
            ammount: actionData.amount,
            customerName: props.customerOrderDetail.customer,
            subTotal: actionData.subTotal
        }

        props.onRemove(orderDetailDTO)
    }

    if(props.customerOrderDetail != null){
        return (<>
            <Grid 
                container
                sx={{
                    paddingTop: '2vh',
                    paddingBottom: '2vh',
                    paddingRight: '2vw',
                    paddingLeft: '2vw'
                }}>
                <Grid 
                    item 
                    xs={12}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                    <Typography
                        typography={{lg: 'h5', md: 'h5', xs:'h5'}}>
                        {props.currentCustomer?
                            props.customerOrderDetail.customer + ' (Tú)'
                        :
                            props.customerOrderDetail.customer
                        }
                    </Typography>
                    <Typography
                        typography={{lg: 'h5', md: 'h5', xs:'h5'}}>
                        {'$' + props.customerOrderDetail.customerTotal}
                    </Typography>
                </Grid>
                {props.customerOrderDetail.orderDetails.map(orderDetail => createDish(orderDetail))}
            </Grid>

            <MessageDialog
                open={openMessageDialog}
                title={messageTitle}
                description={'Esta acción no puede deshacerse'}
                onSubmit={removeOrderDetail}
                onClose={() => setOpenMessageDialog(false)}/>
        </>)
    } else {
        return (<></>)
    }
}

CustomerOrderDetail.defaultProps =
{
    customerOrderDetail: null,
    onRemove: function(){},
    currentCustomer: false
}

CustomerOrderDetail.propTypes = 
{
    customerOrderDetail: PropTypes.object,
    onRemove: PropTypes.func,
    currentCustomer: PropTypes.bool
}


