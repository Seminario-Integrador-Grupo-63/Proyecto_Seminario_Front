import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { 
    Grid,
    Button 
} from '@mui/material'
import { FormDialog } from '@/Common/FormDialog';
import { OrderDetailForm } from './OrderDetailForm';
import {OrderDetailTable} from './OrderDetailTable'
import { CustomerForm } from './CustomerForm';

export const OrderForm = (props: any) => {
    const [orderDetailFormOpen, setOrderDetailFormOpen] = useState(false)
    const [selectedOrderDetail, setSelectedOrderDetail] = useState(null)
    const [isNewOrderDetail, setIsNewOrderDetail] = useState(false)
    const [customerFormOpen, setCustomerFormOpen] = useState(false)
    const [title, setTitle] = useState('Generar Orden')
    const [submitText, setSubmitText] = useState('Generar')
    const [order, setOrder] = useState(null)
    const [selectedCustomer, setSelectedCustomer] = useState('')
    const orderToPost = []

    useEffect(() => {
        if(props.isNew){
            setTitle('Generar Orden')
            setSubmitText('Generar')
        } else {
            setTitle('Editar Orden')
            setSubmitText('Actualizar')
        }
    }, [props.isNew])

    const openCustomerForm = () => {
        setCustomerFormOpen(true)
    }   
    
    const closeOrderDetailForm = () => {
        setOrderDetailFormOpen(false)
    }

    const onAddOrderDetail = (customerOrderDetail) => {
        setIsNewOrderDetail(true)
        setSelectedCustomer(customerOrderDetail.customer)
        setOrderDetailFormOpen(true)
    }

    const closeCustomerForm = () => {
        setCustomerFormOpen(false)
    }

    const submitCustomer = (customer) => {
        if(order === null){
            let ord = {
                customerOrderDetails: [
                    {
                        customer: customer,
                        orderDetails: []
                    },
                ]
            }
            setOrder(ord)
        } else {
            let ord = order
            ord.customerOrderDetails.push({
                customer: customer,
                orderDetails: []  
            })
            setOrder(ord)
        }
        setCustomerFormOpen(false)
    }

    const onEditOrderDetail = (orderDetail) => {
        console.log(' ')
        console.log('OrderForm onEditOrderDetail(orderDetail)')
        console.log('orderDetail: ', orderDetail)
        setIsNewOrderDetail(false)
        setOrderDetailFormOpen(true)
    }

    const createNewDetail = (detail) => {
        console.log(' ')
        console.log('OrderForm createNewDetail(detail)')
        console.log('detail: ', detail)
        orderToPost.push(detail)
        const index = order.customerOrderDetails.findIndex(customerOrderDetail => customerOrderDetail.customer === detail.customerName)
        if(index !== -1){
            order.customerOrderDetails[index].orderDetails.push(detail)
        }
        setOrderDetailFormOpen(false)
    }

    return (<>
        <FormDialog 
            open={props.open}
            title={title}
            submitText={submitText}
            closeText='Cancelar'
            maxWidth='lg'
            onClose={props.onClose}>
            <Grid container>
                <OrderDetailTable 
                    order={order}
                    onEditOrderDetail={onEditOrderDetail}
                    onAddOrderDetail={onAddOrderDetail}/>
            </Grid>
            <Grid>
                <Button onClick={openCustomerForm}>Agregar Comensal</Button>
            </Grid>

            <OrderDetailForm 
                menu={props.menu}
                isNew={isNewOrderDetail}
                orderDetail={}
                customer={selectedCustomer}
                createNewDetail={createNewDetail}
                open={orderDetailFormOpen}
                onClose={closeOrderDetailForm}/>

            <CustomerForm 
                open={customerFormOpen}
                onClose={closeCustomerForm}
                onSubmit={submitCustomer}/>
        </FormDialog>
    </>)
}

OrderForm.defaultProps =
{
    open: false,
    onSubmit: function(){},
    onClose: function(){},
    // order: null,
    isNew: true,
    orderFormData: null,
    menu: [],
}

OrderForm.propTypes = 
{
    open: PropTypes.bool,
    onSubmit: PropTypes.func,
    onClose: PropTypes.func,
    // order: PropTypes.object,
    isNew: PropTypes.bool,
    menu: PropTypes.array,
}
