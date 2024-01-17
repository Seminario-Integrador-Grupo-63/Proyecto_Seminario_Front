import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { 
    Container, 
    Grid, 
    Button, 
    Typography
} from '@mui/material'
import { DataTable } from '@/Common/DataTable';
import { OrderForm } from './OrderForm/OrderForm'

export const TableManager = (props: any) => {
    const [orderRows, setOrderRows] = useState([])
    const [openOrderForm, setOpenOrderForm] = useState(false)
    const [orderFormIsNew, setOrderFormIsNew] = useState(true)
    const [orderFormEntity, setOrderFormEntity] = useState(null)
    const [dishes, setDishes] = useState([])
    const [categories, setCategories] = useState([])
    const [sideDishes, setSideDishes] = useState([])

    const orderHeaders = [
        {label: 'Total comensales', key: 'totalCustomers'},
        {label: 'Estado', key: 'state'},
        {label: 'Total', key: 'total'}
    ]

    useEffect(() => {
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
                totalCustomers: order.totalCustomers,
                state: state,
                total: order.total
            }
        })
        setOrderRows(rows)
    }, [props.orders])

    useEffect(() => {
        setDishes(props.dishes)
    }, [props.dishes])

    useEffect(() => {
        setCategories(props.categories)
    }, [props.categories])

    useEffect(() => {
        setSideDishes(props.sideDishes)
    }, [props.sidedishes])

    const onGenerateOrder = () => {
        setOpenOrderForm(true)
        setOrderFormIsNew(true)
    }

    const onEditOrder = (order) => {
        let orderEntity = searchOrder(order.id)
        setOrderFormEntity(orderEntity)
        setOpenOrderForm(true)
        setOrderFormIsNew(false)
    }

    const onDeleteOrder = (order) => {

    }

    const onOrderFormClose = () => {
        setOpenOrderForm(false)
    }

    const searchOrder = (id) => {
        const index = props.orders.findIndex(order => order.id === id)
        return props.orders[index]
    }

    return (
        <Container maxWidth={false}>
            <Grid 
                container 
                justifyContent="space-between" 
                spacing={2}>
                <Grid item xs={3}>
                    <Button 
                        variant="contained"
                        onClick={onGenerateOrder}>
                        Generar Orden
                    </Button>
                </Grid>
                <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        sx={{ marginRight: '5px', marginLeft: '5px' }}
                        variant="contained">
                        Editar
                    </Button>
                    <Button
                        sx={{ marginRight: '5px', marginLeft: '5px' }}
                        variant="contained">
                        Generar QR
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6">Ordenes</Typography>
                    <DataTable 
                        headers={orderHeaders}
                        rows={orderRows}
                        actionsType='edit-delete'
                        onEdit={onEditOrder}
                        onDelete={onDeleteOrder}/>
                </Grid>
            </Grid>

            <OrderForm 
                open={openOrderForm}
                dishes={dishes}
                categories={categories}
                sideDishes={sideDishes}
                isNew={orderFormIsNew}
                onClose={onOrderFormClose}
                order={orderFormEntity}/>
        </Container>
    )
}

TableManager.defaultProps =
{
    orders: [],
    table: null,
    categories: [],
    dishes: [],
    sideDishes: []
}

TableManager.propTypes =
{
    orders: PropTypes.array,
    table: PropTypes.object,
    categories: PropTypes.array,
    dishes: PropTypes.array,
    sideDishes: PropTypes.array
}


