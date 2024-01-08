import React, {useState, useEffect} from 'react';
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
    const [title, setTitle] = useState('Generar Orden')
    const [submitText, setSubmitText] = useState('Generar') 

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
        setOrderDetailFormOpen(true)
    }

    const closeCustomerForm = () => {
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
            {props.order !== null?
                <>
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
                </>
            :
                null
            }
        </FormDialog>
    </>);
}

OrderForm.defaultProps =
{
    open: false,
    onSubmit: function(){},
    onClose: function(){},
    order: null,
    isNew: true
}

OrderForm.propTypes = 
{
    open: PropTypes.bool,
    onSubmit: PropTypes.func,
    onClose: PropTypes.func,
    order: PropTypes.object,
    isNew: PropTypes.bool
}
