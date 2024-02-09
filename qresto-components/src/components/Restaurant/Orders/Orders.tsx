import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { DataTable } from '@/Common/DataTable/DataTable';
import { OrderForm } from '@/Restaurant/Tables/OrderForm/OrderForm';
import { DoubleDateInput } from './DoubleDateInput';
import { 
    Container,
    Grid
} from '@mui/material';

export const Orders = (props: any) => {
    const [orderRows, setOrderRows] = useState([])
    const [orders, setOrders] = useState([])
    const [openOrderForm, setOpenOrderForm] = useState(false)
    const [selectedOrder, setSelectedOrder] = useState(null)

    const orderHeaders = [
        {label: 'Fecha', id: 'date'},
        {label: 'Estado', id: 'state'},
        {label: 'Comensales', id: 'totalCustomers'},
        {label: 'Total', id: 'total', price: true}
    ]

    useEffect(() => {
        setupOrders()
    }, [props.orders])

    const setupOrders = () => {
        let rows = props.orders.map(order => {
            let state = 'Armando'
            switch (order.state) {
                case 'processing':
                    state = 'Armando';
                    break;
                case 'waiting':
                    state = 'En espera';
                    break;
                case 'preparation':
                    state = 'En Preparación';
                    break;
                case 'cancelled':
                    state = 'Cancelada';
                    break;
                case 'delivered':
                    state = 'Entregada';
                    break;
                case 'closed':
                    state = 'Cerrada';
                    break;
                default:
                    state = 'Unknown';
            }

            return {
                id: order.id,
                date: order.createdAtDate + ' ' + order.createdAtTime,
                totalCustomers: order.totalCustomers,
                state: state,
                total: order.total
            }
        })

        setOrders(props.orders)
        setOrderRows(rows)
    }

    const showOrder = (order) => {
        const index = orders.findIndex(o => o.id === order.id)

        if(index !== -1){
            setSelectedOrder(orders[index])
            setOpenOrderForm(true)
        }
    }

    const onOrderFormClose = () => {
        setOpenOrderForm(false)
    }

    return (<>
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <DoubleDateInput 
                        buttonText={'Filtrar'}
                        date1Text={'Desde'}
                        date2Text={'Hasta'}
                        onSubmit={props.onFilter}/>
                </Grid>

                <Grid item xs={12}>
                    <DataTable 
                        maxHeight={'75vh'}
                        headers={orderHeaders}
                        rows={orderRows}
                        onShow={showOrder}
                        actionsType={'show'}/>
                </Grid>
            </Grid>

            <OrderForm 
                open={openOrderForm}
                order={selectedOrder}
                stateActions={false}
                actions={false}
                isNew={false}
                onClose={onOrderFormClose}/>
        </Container>
    </>)
}

Orders.defaultProps =
{
    orders: [],
    onFilter: function(){}
}

Orders.propTypes = 
{
    orders: PropTypes.array,
    onFilter: PropTypes.func
}


