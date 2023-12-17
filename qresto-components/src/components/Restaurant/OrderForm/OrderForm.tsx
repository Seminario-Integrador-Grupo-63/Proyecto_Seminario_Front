import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { 
    Grid,
    Button 
} from '@mui/material'
import { FormDialog } from '@/Common/FunctionalTemplates/FormDialog';
import { OrderDetailForm } from './OrderDetailForm';
import {OrderDetailTable} from './OrderDetailTable'
import { CustomerForm } from './CustomerForm';

export const OrderForm = (props: any) => {
    const [orderDetailFormOpen, setOrderDetailFormOpen] = useState(false)
    const [customerFormOpen, setCustomerFormOpen] = useState(false)

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

    return (<>
        <FormDialog 
            open={props.open}
            title="Generar Orden"
            submitText="Generar Orden"
            closeText='Cancelar'
            maxWidth='lg'
            onClose={props.onClose}>
            <Grid container>
                <OrderDetailTable 
                    order={props.order}
                    onAddOrderDetail={onAddOrderDetail}/>
            </Grid>
            <Grid>
                <Button onClick={openCustomerForm}>Nuevo Comensal</Button>
            </Grid>

            <OrderDetailForm 
                open={orderDetailFormOpen}
                onClose={closeOrderDetailForm}/>

            <CustomerForm 
                open={customerFormOpen}
                onClose={closeCustomerForm}/>
        </FormDialog>
    </>);
}

OrderForm.defaultProps =
{
    open: false,
    onSubmit: function(){},
    onClose: function(){},
    order: null
}

OrderForm.propTypes = 
{
    open: PropTypes.bool,
    onSubmit: PropTypes.func,
    onClose: PropTypes.func,
    order: PropTypes.object
}


