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
    const [customerFormOpen, setCustomerFormOpen] = useState(false)
    const [title, setTitle] = useState('Generar Orden')
    const [submitText, setSubmitText] = useState('Generar')
    const [order, setOrder] = useState(null)

    useEffect(() => {
        if(props.isNew){
            setTitle('Generar Orden')
            setSubmitText('Generar')
        } else {
            setTitle('Editar Orden')
            setSubmitText('Actualizar')
        }
    }, [props.isNew])

    useEffect(() => {
        if(props.order !== null){
            setOrder(props.order)
        }
    }, [props.order])

    const openCustomerForm = () => {
        setCustomerFormOpen(true)
    }   
    
    const closeOrderDetailForm = () => {
        setOrderDetailFormOpen(false)
    }

    const onAddOrderDetail = (customerOrderDetail) => {
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
                    onAddOrderDetail={onAddOrderDetail}/>
            </Grid>
            <Grid>
                <Button onClick={openCustomerForm}>Agregar Comensal</Button>
            </Grid>

            <OrderDetailForm 
                categories={props.categories}
                dishes={props.dishes}
                sideDishes={props.sideDishes}
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
    order: null,
    isNew: true,
    categories: [],
    dishes: [],
    sideDishes: []
}

OrderForm.propTypes = 
{
    open: PropTypes.bool,
    onSubmit: PropTypes.func,
    onClose: PropTypes.func,
    order: PropTypes.object,
    isNew: PropTypes.bool,
    categories: PropTypes.array,
    dishes: PropTypes.array,
    sideDishes: PropTypes.array
}
