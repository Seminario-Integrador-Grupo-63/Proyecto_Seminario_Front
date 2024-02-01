import {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import { TableManager } from '@/Restaurant/Tables/TableManager'
import { QRDisplay} from '@/Restaurant/Tables/QRDisplay/QRDisplay'
import { useSearchParams} from 'next/navigation'
import { 
    getOrders, 
    getTable,
    getQR,
    cancelOrder as cancelOrderRequest,
    getMenu,
    getSectors,
    postOrder,
    postQR,
    postOrderPreparation,
    postOrderClosed,
    postOrderDelivered,
    putTable,
    deleteTable as deleteTableRequest
} from '@/requests'
import {FeedbackDialog} from '@/Common/FeedbackDialog/FeedbackDialog'
import {PanLoader} from '@/Common/PanLoader/PanLoader'

const restaurantId = 1

export default function TableManagerPage() {
    const [table, setTable] = useState(null)
    const [orders, setOrders] = useState([])
    const [sectors, setSectors] = useState([])
    const [loading, setLoading] = useState(false)
    const [openFeedbackDialog, setOpenFeedbackDialog] = useState(false)
    const [positiveFeedback, setPositiveFeedback] = useState(false)
    const [textFeedback, setTextFeedback] = useState('')
    const [closeFeedbackAction, setCloseFeedbackAction] = useState('')
    const router = useRouter()
    const searchParams = useSearchParams()

    useEffect(() => {
        const tableId = searchParams.get('tableId')
        fetchTable(parseInt(tableId))
    }, [searchParams])

    useEffect(() => {
        if(table !== null){
            fetchOrders()
        }
    }, [table])

    useEffect(() => {
        fetchSectors()
    }, [])

    const fetchTable = async (tableId) => {
        const table = await getTable(tableId)
        setTable(table)
    }

    const fetchSectors = async () => {
        const result = await getSectors(restaurantId)
        setSectors(result)
    }

    const fetchOrders = async () => {
        let ords = await getOrders(table.tableCode)
        setOrders(ords)
    }

    const getDishes = async () => {
        return await getMenu()
    }

    const deleteTable = async (tableId) => {
        setLoading(true)
        const result = await deleteTableRequest(tableId)
        setLoading(false)
        triggerFeedback(result, 'delete-table')
    }

    const onQRDownload = async (tableId, uuidCode) => {
        await postQR(tableId, uuidCode)
    }

    const triggerFeedback = (state, action) => {
        setPositiveFeedback(state)
        if(state){
            if(action === 'cancel-order'){
                setTextFeedback('La orden ha sido cancelada exitosamente')
            } else if (action === 'order-state'){
                setTextFeedback('El estado de la orden ha sido actualizado exitosamente')
            } else if (action === 'update-table'){
                setTextFeedback('La mesa ha sido actualizada exitosamente')
            } else if (action === 'delete-table'){
                setTextFeedback('La mesa ha sido eliminada exitosamente')
                setCloseFeedbackAction('go-back')
            }
        } else {
            if(action === 'cancel-order'){
                setTextFeedback('No se ha podido cancelar la orden')
            } else if (action === 'order-state'){
                setTextFeedback('No se ha podido actualizar el estado de la orden')
            } else if (action === 'update-table'){
                setTextFeedback('No se ha podido actualizar la mesa')
            }else if (action === 'delete-table'){
                setTextFeedback('No se ha podido eliminar la mesa')
            }
        }
        setOpenFeedbackDialog(true)
    }

    const closeFeedback = () => {
        if(closeFeedbackAction === ''){
            setOpenFeedbackDialog(false)
        } else if (closeFeedbackAction === 'go-back'){
            setOpenFeedbackDialog(false)
            goBack()
        }
    }

    const generateQR = async (tableId) => {
        setLoading(true)
        const result = await getQR(tableId)
        setLoading(false)
        return {
            qrCode: result.qrCode,
            uuidCode: result.uuidCode
        }
    }

    const cancelOrder = async (orderId) => {
        setLoading(true)
        const result = await cancelOrderRequest(orderId)

        if(result) {
            await fetchOrders()
            setLoading(false)
            triggerFeedback(true, 'cancel-order')
        } else {
            setLoading(false)
            triggerFeedback(false, 'cancel-order')
        }
    }

    const goBack = () => {
        router.push({pathname: '/tables'})
    }

    const createOrder = async (order) => {
        const result = await postOrder(order, table.tableCode)
        await fetchOrders()
    }

    const updateTable = async (tableToUpdate) => {
        const result = await putTable(tableToUpdate)
        if(result){
            await fetchTable(table.id)
        }
        triggerFeedback(result, 'update-table')
        return result
    }

    const onOrderDelivered = async (orderId) => {
        setLoading(true)
        const result = await postOrderDelivered(orderId)
        if(result){
            await fetchOrders()
        }
        triggerFeedback(result, 'order-state')
        setLoading(false)
        return result
    }

    const onOrderPreparation = async (orderId) => {
        setLoading(true)
        const result = await postOrderPreparation(orderId)
        if(result){
            await fetchOrders()
        }
        triggerFeedback(result, 'order-state')
        setLoading(false)
        return result
    }

    const onOrderClosed = async (tableCode) => {
        setLoading(true)
        const result = await postOrderClosed(tableCode)
        if(result){
            await fetchOrders()
        }
        triggerFeedback(result, 'order-state')
        setLoading(false)
        return result
    }

    return (<>
        <TableManager
            table={table}
            sectors={sectors}
            orders={orders}
            createOrder={createOrder}
            onOpenOrderForm={getDishes}
            deleteTable={deleteTable}
            cancelOrder={cancelOrder}
            onQRDownload={onQRDownload}
            goBack={goBack}
            generateQR={generateQR}
            updateTable={updateTable}
            onOrderDelivered={onOrderDelivered}
            onOrderPreparation={onOrderPreparation}
            onOrderClosed={onOrderClosed}/>

        <PanLoader open={loading}/>

        <FeedbackDialog
            open={openFeedbackDialog}
            positive={positiveFeedback}
            text={textFeedback}
            onOk={closeFeedback}
            onClose={closeFeedback}/>
    </>)    
}
