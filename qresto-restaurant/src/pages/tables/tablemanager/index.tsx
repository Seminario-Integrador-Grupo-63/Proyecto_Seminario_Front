import {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import { TableManager } from '@/Restaurant/Tables/TableManager'
import { useSearchParams} from 'next/navigation'
import { 
    getTableOrders, 
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
    getBill,
    deleteTable as deleteTableRequest,
    cancelTable
} from '@/requests'
import {FeedbackDialog} from '@/Common/FeedbackDialog/FeedbackDialog'
import {PanLoader} from '@/Common/PanLoader/PanLoader'
import { getCookie } from 'cookies-next'

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
    const [loopActive, setLoopActive] = useState(false)
    const [userRole, setUserRole] = useState('')
    const router = useRouter()
    const searchParams = useSearchParams()

    useEffect(() => {
        const tableId = searchParams.get('tableId')
        fetchTable(parseInt(tableId))
    }, [searchParams])

    useEffect(() => {
        if(table !== null){
            fetchOrders()
            if(!loopActive) {
                const interval = setInterval(() => {
                    fetchOrders(); // Fetch orders periodically
                }, 5000); // Adjust the interval time as needed (e.g., every 5 seconds)
        
                return () => clearInterval(interval); // Clear interval on component unmount
                setLoopActive(true)
            }
        }
    }, [table])

    useEffect(() => {
        console.log(' ')
        console.log('TableManagerPage useEffect []')
        
        let userRole = getCookie('userRole')
        console.log('userRole: ', userRole)
        setUserRole(userRole)
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
        let ords = await getTableOrders(table.tableCode)
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
            } else if (action === 'create-order'){
                setTextFeedback('La orden ha sido generada exitosamente')
            } else if (action === 'free-table'){
                setTextFeedback('La mesa se ha liberado exitosamente')
            }
        } else {
            if(action === 'cancel-order'){
                setTextFeedback('No se ha podido cancelar la orden. Por favor, intente más tarde')
            } else if (action === 'order-state'){
                setTextFeedback('No se ha podido actualizar el estado de la orden. Por favor, intente más tarde')
            } else if (action === 'update-table'){
                setTextFeedback('No se ha podido actualizar la mesa. Por favor, intente más tarde')
            } else if (action === 'delete-table'){
                setTextFeedback('No se ha podido eliminar la mesa. Por favor, intente más tarde')
            } else if(action === 'create-order'){
                setTextFeedback('No se pudo generar la orden. Por favor, intente más tarde')
            } else if(action === 'table-free'){
                setTextFeedback('No se pudo liberar la mesa. Por favor, intente más tarde')
            } else if (action === 'generate-qr'){
                setTextFeedback('No se pudo generar el QR. Por favor, intente más tarde')
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
        const resultGet = await getQR(tableId)
        setLoading(false)
        if(resultGet !== false){
            const resultPost = await postQR(tableId, resultGet.uuidCode)
            if (resultPost){
                await fetchTable(tableId)
                return {
                    qrCode: resultGet.qrCode,
                    uuidCode: resultGet.uuidCode
                }
            } 
        }
        triggerFeedback(false, 'generate-qr')
        return null
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
        setLoading(true)
        const result = await postOrder(order, table.tableCode)
        
        setLoading(false)
        if(result){
            await fetchOrders()
        } 
        triggerFeedback(result, 'create-order')
        return result
    }

    const updateTable = async (tableToUpdate) => {
        const result = await putTable(tableToUpdate)

        if(result){
            await Promise.all([
                fetchTable(table.id),
                fetchOrders()
            ])
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

    const onBillRequest = async () => {
        setLoading(true)
        const result = await getBill(table.tableCode)
        setLoading(false)
        if(result !== false){
            triggerFeedback(true, 'order-state')
            await Promise.all([
                fetchOrders(),
                fetchTable(table.id)
            ])

            return true
        } else {
            triggerFeedback(false, 'order-state')
            return false
        }
    }

    const setTableFree = async (table) => {
        setLoading(true)
        const result = await cancelTable(table.tableCode)
        setLoading(false)
        if(result){
            await Promise.all([
                fetchTable(table.id),
                fetchOrders()
            ])
        }
        triggerFeedback(result, 'free-table')
    }

    return (<>
        <TableManager
            table={table}
            userRole={userRole}
            sectors={sectors}
            orders={orders}
            createOrder={createOrder}
            onOpenOrderForm={getDishes}
            deleteTable={deleteTable}
            cancelOrder={cancelOrder}
            onBillRequest={onBillRequest}
            goBack={goBack}
            setTableFree={setTableFree}
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
