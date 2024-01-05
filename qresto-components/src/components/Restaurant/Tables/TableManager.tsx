import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { 
    Container, 
    Grid, 
    Button, 
    Typography
} from '@mui/material'
import { DataTable } from '@/Common/DataTable';

export const TableManager = (props: any) => {
    const [orderRows, setOrderRows] = useState([])
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
    }, [])

    const onShowOrder = (order) => {
        console.log(' ')
        console.log('TableManager onShowOrder(order)')
        console.log('order: ', order)
        
    } 

    return (
        <Container maxWidth={false}>
            <Grid 
                container 
                justifyContent="space-between" 
                spacing={2}>
                <Grid item xs={3}>
                    <Button variant="contained">Agregar Orden</Button>
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
                        actionsType='show'
                        onShow={onShowOrder}/>
                </Grid>
            </Grid>
        </Container>
    )
}

TableManager.defaultProps =
{
    orders: [],
}

TableManager.propTypes =
{
    orders: PropTypes.array
}


