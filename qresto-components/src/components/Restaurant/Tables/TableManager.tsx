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
import { DataTable } from '@/Common/DataTable/DataTable'
import { OrderForm } from './OrderForm/OrderForm'
import { TableForm } from './TableForm'
import { MessageDialog } from '@/Common/MessageDialog'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {themeButtonWine, theme} from '@/Common/Theme/themes'
import { PanLoader } from '@/Common/PanLoader/PanLoader';
import {QRDisplay} from './QRDisplay/QRDisplay'

export const TableManager = (props: any) => {
    const [orderRows, setOrderRows] = useState([])
    const [orders, setOrders] = useState([])
    const [hasTableCode, setHasTableCode] = useState(false)
    const [openOrderForm, setOpenOrderForm] = useState(false)
    const [orderFormActions, setOrderFormActions] = useState(true)
    const [menu, setMenu] = useState(null)
    const [paymentReady, setPaymentReady] = useState(false)
    const [orderFormIsNew, setOrderFormIsNew] = useState(true)
    const [openTableForm, setOpenTableForm] = useState(false)
    const [loading, setLoading] = useState(false)
    const [table, setTable] = useState(null)
    const [uuidCode, setUuidCode] = useState('')
    const [openMessageDialog, setOpenMessageDialog] = useState(false)
    const [titleMessageDialog, setTitleMessageDialog] = useState('')
    const [textMessageDialog, setTextMessageDialog] = useState('')
    const [actionMessageDialog, setActionMessageDialog] = useState('')
    const [cancelButtonVisibleMessageDialog, setCancelButtonVisibleMessageDialog] = useState(true)
    const [textSubmitButtonMessageDialog, setTextSubmitButtonMessageDialog] = useState('Confirmar')
    const [allowDeleteTable, setAllowDeleteTable] = useState(true)
    const [selectedOrder, setSelectedOrder] = useState(null)
    const [openQRDisplay, setOpenQRDisplay] = useState(false)
    const [qrCode, setQRcode] = useState('')

    const orderHeaders = [
        {label: 'Total comensales', id: 'totalCustomers'},
        {label: 'Estado', id: 'state'},
        {label: 'Total', id: 'total', price: true}
    ]

    useEffect(() => {
        if(props.table !== null){
            console.log(' ')
            console.log('TableManager')
            console.log('props.table: ', props.table)
            if(props.orders.length > 0 || props.table.state !== 'free'){
                setAllowDeleteTable(false)
            } else {
                setAllowDeleteTable(true)
            }
        }

        setupOrders()
    }, [props.orders, props.table])

    useEffect(() => {
        if(props.table !== null){
            console.log(' ')
            console.log('TableManager ')
            console.log('props.table: ', props.table)
            setTable(props.table)

            if(props.table.state === 'payment_ready'){
                setPaymentReady(true)
            } else {
                setPaymentReady(false)
            }
    
            if(props.table.tableCode !== ''){
                setHasTableCode(true)
            } else {
                setHasTableCode(false)
            }
        }
    }, [props.table])

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
                totalCustomers: order.totalCustomers,
                state: state,
                total: order.total
            }
        })

        setOrders(props.orders)
        setOrderRows(rows)

        if(selectedOrder !== null){
            const index = props.orders.findIndex(o => o.id === selectedOrder.id)
            if(index !== -1){
                setSelectedOrder(props.orders[index])
            }
        }
    }

    const onGenerateOrder = async () => {
        setLoading(true)
        const data = await props.onOpenOrderForm()
        setLoading(false)
        setMenu(data)
        setOpenOrderForm(true)
        setOrderFormIsNew(true)
        setOrderFormActions(true)
    }

    const onEditTable = () => {
        setOpenTableForm(true)
    }

    const updateTable = async (editedTable) => {
        const result = await props.updateTable({
            ...editedTable,
            tableCode: table.tableCode,
            restaurant: table.restaurant,
            state: table.state,
            id: table.id
        })

        if(result){
            setOpenTableForm(false)
            
        }
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
        if(selectedOrder.state === 'processing' || selectedOrder.state === 'waiting' || selectedOrder.state === 'preparation'){
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

    const onGenerateQR = async () => {
        const result = await props.generateQR(table.id)
        if(result !== null){
            setQRcode(result.qrCode)
            setUuidCode(result.uuidCode)
            setOpenQRDisplay(true)
            setHasTableCode(true)
        }
    }

    const onQRDisplayClose = () => {
        setOpenQRDisplay(false)
    }

    const showOrder = (order) => {
        const index = orders.findIndex(o => o.id === order.id)

        if(index !== -1){
            setOrderFormActions(false)
            setOrderFormIsNew(false)
            setSelectedOrder(orders[index])
            setOpenOrderForm(true)
        }
    }

    const onOrderClosed = async () => {
        const result = await props.onOrderClosed(table.tableCode)
        if(result){
            setOpenOrderForm(false)
        }
    }
    
    const createOrder = async (order) => {
        const result = await props.createOrder(order)
        if(result){
            setOpenOrderForm(false)
        }
    }

    const setTableFree = () => {
        if(verifyFreeTable()){
            props.setTableFree(table)
        } else {
            setTitleMessageDialog('No se puede liberar la mesa')
            setTextMessageDialog('No puede liberar mesas que tienen órdenes en estado "Entregado"')
            setActionMessageDialog('accept')
            setCancelButtonVisibleMessageDialog(false)
            setOpenMessageDialog(true)
        }
    }

    const verifyFreeTable = () => {
        let isReady = true
        for(let i = 0; i < orders.length; i++){
            if(orders[i].state === 'delivered'){
                isReady = false
                break
            }
        }   
        return isReady
    }

    return (
        <Container maxWidth={false}>
            <Grid 
                container 
                justifyContent="space-between" 
                spacing={2}>
                <Grid item xs={1}>
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
                </Grid>
 
                {table !== null ? 
                    <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <Typography 
                            textAlign={'left'}
                            lineHeight={1.5}
                            variant='h4'>
                            Mesa {table.number}
                        </Typography>
                    </Grid>
                :
                    null
                }

                <Grid item xs={9} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <ThemeProvider theme={themeButtonWine}>
                        <Button 
                            variant="contained"
                            disabled={!hasTableCode}
                            sx={{marginRight: '5px'}}
                            onClick={onGenerateOrder}>
                            Generar Orden
                        </Button>
                        <Button 
                            variant="contained"
                            sx = {{marginLeft: '5px'}}
                            onClick={setTableFree}>
                            Liberar Mesa
                        </Button>
                        <Button
                            sx={{ marginRight: '5px', marginLeft: '5px' }}
                            variant='contained'
                            onClick={onEditTable}>
                            Editar
                        </Button>
                        <Button
                            sx={{ marginRight: '5px', marginLeft: '5px' }}
                            variant="contained"
                            onClick={onGenerateQR}>
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
                {!hasTableCode ? 
                    <Grid item xs={12}>
                        <Typography sx={{color: 'red'}}>
                            No se ha generado un código QR para esta mesa, por tanto, no puede generar órdenes
                        </Typography>
                    </Grid>
                :
                    null
                }

                <Grid item xs={12}>
                    <Typography variant="h6">Órdenes</Typography>
                    <DataTable 
                        headers={orderHeaders}
                        rows={orderRows}
                        onShow={showOrder}
                        actionsType={'show-cancel'}
                        onCancel={onCancelOrder}/>
                </Grid>
            </Grid>

            <OrderForm 
                open={openOrderForm}
                menu={menu}
                paymentReady={paymentReady}
                order={selectedOrder}
                actions={orderFormActions}
                isNew={orderFormIsNew}
                onClose={onOrderFormClose}
                onSubmit={createOrder}
                onOrderPreparation={props.onOrderPreparation}
                onOrderDelivered={props.onOrderDelivered}
                onBillRequest={props.onBillRequest}
                onOrderClosed={onOrderClosed}/>

            <TableForm
                isNew={false}
                sectors={props.sectors}
                table={table}
                onSubmit={updateTable}
                open={openTableForm}
                onClose={onCloseTableForm}/>

            <QRDisplay
                open={openQRDisplay}
                qrcode={qrCode}
                onClose={onQRDisplayClose}/>

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
    sectors: [],
    table: null,
    menu: [],
    deleteTable: function(){},
    generateQR: function(){},
    onQRDownload: function(){},
    onOpenOrderForm: function(){},
    displayQR: function(){},
    goBack: function(){},
    createOrder: function(){},
    updateTable: function(){},
    onOrderPreration: function(){},
    onOrderDelivered: function(){},
    onBillRequest: function(){},
    onOrderClosed: function(){},
    setTableFree: function(){}
}

TableManager.propTypes =
{
    orders: PropTypes.array,
    table: PropTypes.object,
    sectors: PropTypes.array,
    menu: PropTypes.array,
    onOpenOrderForm: PropTypes.func,
    deleteTable: PropTypes.func,
    cancelOrder: PropTypes.func,
    generateQR: PropTypes.func,
    onQRDownload: PropTypes.func,
    goBack: PropTypes.func,
    createOrder: PropTypes.func,
    updateTable: PropTypes.func,
    onOrderPreparation: PropTypes.func,
    onOrderDelivered: PropTypes.func,
    onBillRequest: PropTypes.func,
    onOrderClosed: PropTypes.func,
    setTableFree: PropTypes.func
}