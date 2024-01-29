import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import { 
    Container, 
    Grid, 
    Button, 
    Typography,
    IconButton,
    ThemeProvider
} from '@mui/material'
import { DataTable } from '@/Common/DataTable'
import { OrderForm } from './OrderForm/OrderForm'
import { TableForm } from './TableForm'
import { MessageDialog } from '@/Common/MessageDialog'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {themeButtonWine, theme} from '@/Common/Theme/themes'
import { PanLoader } from '@/Common/PanLoader/PanLoader';

export const TableManager = (props: any) => {
    const [orderRows, setOrderRows] = useState([])
    const [openOrderForm, setOpenOrderForm] = useState(false)
    const [menu, setMenu] = useState(null)
    const [orderFormIsNew, setOrderFormIsNew] = useState(true)
    const [openTableForm, setOpenTableForm] = useState(false)
    const [loading, setLoading] = useState(false)
    const [table, setTable] = useState(null)
    const [openMessageDialog, setOpenMessageDialog] = useState(false)
    const [titleMessageDialog, setTitleMessageDialog] = useState('')
    const [textMessageDialog, setTextMessageDialog] = useState('')
    const [actionMessageDialog, setActionMessageDialog] = useState('')
    const [cancelButtonVisibleMessageDialog, setCancelButtonVisibleMessageDialog] = useState(true)
    const [textSubmitButtonMessageDialog, setTextSubmitButtonMessageDialog] = useState('Confirmar')
    const [allowDeleteTable, setAllowDeleteTable] = useState(true)
    const [selectedOrder, setSelectedOrder] = useState(null)

    const orderHeaders = [
        {label: 'Total comensales', key: 'totalCustomers'},
        {label: 'Estado', key: 'state'},
        {label: 'Total', key: 'total'}
    ]

    useEffect(() => {
        if(props.orders.length > 0){
            setAllowDeleteTable(false)
        } else {
            setAllowDeleteTable(true)
        }

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
        console.log(' ')
        console.log('TableManager useEffect props.table')
        console.log('props.table: ',props.table )
        if(props.table !== null){
            setTable(props.table)
        }
    }, [props.table])

    useEffect(() => {

    }, [props.menu])

    const onGenerateOrder = async () => {
        setLoading(true)
        const data = await props.onOpenOrderForm()
        setLoading(false)
        setMenu(data)
        setOpenOrderForm(true)
        setOrderFormIsNew(true)
    }

    const onEditTable = () => {
        setOpenTableForm(true)
    }

    const onCloseTableForm = () => {
        setOpenTableForm(false)
    }

    const onConfirmDeleteTable = () => {
        setTitleMessageDialog("Se eliminará la mesa")
        setTextMessageDialog("Está seguro que desea eliminar esta mesa?")
        setActionMessageDialog('delete-table')
        setOpenMessageDialog(true)
    }

    const deleteTable = () => {
        props.deleteTable(props.table.id)
    }

    const onSubmitMessageDialog = () => {
        if(actionMessageDialog === 'delete-table'){
            deleteTable()
        } else if (actionMessageDialog === 'cancel-order') {
            cancelOrder()
        } else if (actionMessageDialog === 'accept'){
            onCloseMessageDialog()
        }
    }

    const onCloseMessageDialog = () => {
        setOpenMessageDialog(false)
    }

    const onCancelOrder = (order) => {
        const orderIndex = props.orders.findIndex(o => o.id === order.id)
        const selectedOrder = props.orders[orderIndex]
        if(selectedOrder.state === 'processing' || selectedOrder.state === 'waiting'){
            let orderEntity = searchOrder(order.id)
            showCancelOrder(orderEntity)
        } else {
            showCannotCancelOrder()
        }
    }

    const showCancelOrder = (orderEntity) => {
        setSelectedOrder(orderEntity)
        setCancelButtonVisibleMessageDialog(true)
        setTextSubmitButtonMessageDialog("Confirmar")
        setActionMessageDialog('cancel-order')
        setTitleMessageDialog('La orden se cancelará')
        setTextMessageDialog('¿Está seguro que desea cancelar la orden?')
        setOpenMessageDialog(true)
    }

    const showCannotCancelOrder = () => {
        setTitleMessageDialog('No se puede cancelar orden')
        setTextMessageDialog('No se puede cancelar una orden que ya ha sido enviada a la cocina para preparar')
        setCancelButtonVisibleMessageDialog(false)
        setActionMessageDialog('accept')
        setTextSubmitButtonMessageDialog("Aceptar")
        setOpenMessageDialog(true)
    }

    const cancelOrder = () => {
        props.cancelOrder(selectedOrder.id)
        setOpenMessageDialog(false)
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
                    <IconButton
                        sx={{
                            marginRight: '20px'
                        }}
                        onClick={props.goBack}>
                        <ArrowBackIcon 
                            fontSize='large'
                            sx={{
                                color: theme.palette.primary.main,
                            }}/>
                    </IconButton>
                    <ThemeProvider theme={themeButtonWine}>
                        <Button 
                            variant="contained"
                            onClick={onGenerateOrder}>
                            Generar Orden
                        </Button>
                    </ThemeProvider>
                </Grid>
 
                {table !== null ? 
                    <Grid item xs={3}>
                        <Typography variant='h4'>Mesa {table.number}</Typography>
                    </Grid>
                :
                    null
                }

                <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <ThemeProvider theme={themeButtonWine}>
                        <Button
                            sx={{ marginRight: '5px', marginLeft: '5px' }}
                            variant='contained'
                            onClick={onEditTable}>
                            Editar
                        </Button>
                        <Button
                            sx={{ marginRight: '5px', marginLeft: '5px' }}
                            variant="contained"
                            onClick={props.generateQR}>
                            Generar QR
                        </Button>
                        <Button
                            sx={{ marginRight: '5px', marginLeft: '5px' }}
                            variant="contained"
                            onClick={onConfirmDeleteTable}
                            disabled={!allowDeleteTable}>
                            Eliminar
                        </Button>
                    </ThemeProvider>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6">Ordenes</Typography>
                    <DataTable 
                        headers={orderHeaders}
                        rows={orderRows}
                        actionsType='cancel'
                        onCancel={onCancelOrder}/>
                </Grid>
            </Grid>

            <OrderForm 
                open={openOrderForm}
                menu={menu}
                isNew={orderFormIsNew}
                onClose={onOrderFormClose}
                onSubmit={props.createOrder}/>

            <TableForm
                isNew={false}
                table={table}
                open={openTableForm}
                onClose={onCloseTableForm}/>

            <MessageDialog
                open={openMessageDialog}
                title={titleMessageDialog}
                description={textMessageDialog}
                submitButtonText={textSubmitButtonMessageDialog}
                cancelButtonVisible={cancelButtonVisibleMessageDialog}
                onSubmit={onSubmitMessageDialog}
                onClose={onCloseMessageDialog}/>

            <PanLoader open={loading}/>
        </Container>
    )
}

TableManager.defaultProps =
{
    orders: [],
    table: null,
    menu: [],
    deleteTable: function(){},
    generateQR: function(){},
    onOpenOrderForm: function(){},
    displayQR: function(){},
    goBack: function(){},
    createOrder: function(){}
}

TableManager.propTypes =
{
    orders: PropTypes.array,
    table: PropTypes.object,
    menu: PropTypes.array,
    onOpenOrderForm: PropTypes.func,
    deleteTable: PropTypes.func,
    cancelOrder: PropTypes.func,
    generateQR: PropTypes.func,
    goBack: PropTypes.func,
    createOrder: PropTypes.func
}