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
    postOrder,
    postQR
} from '@/requests'
import {FeedbackDialog} from '@/Common/FeedbackDialog/FeedbackDialog'
import {PanLoader} from '@/Common/PanLoader/PanLoader'

export default function TableManagerPage() {
    const [table, setTable] = useState(null)
    const [orders, setOrders] = useState([])
    const [openQRDisplay, setOpenQRDisplay] = useState(false)
    const [qrcode, setQrcode] = useState('')
    const [loading, setLoading] = useState(false)
    const [openFeedbackDialog, setOpenFeedbackDialog] = useState(false)
    const [positiveFeedback, setPositiveFeedback] = useState(false)
    const [textFeedback, setTextFeedback] = useState('')
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

    const fetchTable = async (tableId) => {
        const table = await getTable(tableId)
        setTable(table)
    }

    const fetchOrders = async () => {
        let ords = await getOrders(table.tableCode)
        setOrders(ords)
    }

    const getDishes = async () => {
        return await getMenu()
    }

    const deleteTable = async () => {

    }

    const onQRDownload = async (tableId, uuidCode) => {
        await postQR(tableId, uuidCode)
    }

    const triggerFeedback = (state, action) => {
        setPositiveFeedback(state)
        if(state){
            if(action === 'cancel-order'){
                setTextFeedback('La order ha sido cancelada exitosamente')
            }

        } else {
            if(action === 'cancel-order'){
                setTextFeedback('No se ha podido cancelar la orden')
            }
        }
        setOpenFeedbackDialog(true)
    }

    const closeFeedback = () => {
        setOpenFeedbackDialog(false)
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

    return (<>
        <TableManager
            table={table}
            orders={orders}
            createOrder={createOrder}
            onOpenOrderForm={getDishes}
            deleteTable={deleteTable}
            cancelOrder={cancelOrder}
            onQRDownload={onQRDownload}
            goBack={goBack}
            generateQR={generateQR}/>

        <PanLoader open={loading}/>

        <FeedbackDialog
            open={openFeedbackDialog}
            positive={positiveFeedback}
            text={textFeedback}
            onOk={closeFeedback}
            onClose={closeFeedback}/>
    </>)    
}
