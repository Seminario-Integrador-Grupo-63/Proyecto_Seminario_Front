import Link from 'next/link'
import {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import { TableManager } from '@/Restaurant/Tables/TableManager'
import { QRDisplay} from '@/Restaurant/Tables/QRDisplay/QRDisplay'
import { useSearchParams} from 'next/navigation'
import { 
    getOrders, 
    getTable,
    getQR,
} from '@/requests'

export default function TableManagerPage() {
    const [table, setTable] = useState(null)
    const [orders, setOrders] = useState([])
    const [openQRDisplay, setOpenQRDisplay] = useState(false)
    const [qrcode, setQrcode] = useState('')
    // const [sector, setSector] = useState(null)
    const router = useRouter()
    const searchParams = useSearchParams()

    // useEffect(() => {
    //     const sector = JSON.parse(searchParams.get('sector'))
    //     setSector(sector)
    //     setTable(sector.table)
    //     // fetchTable(parseInt(tableId))
    // }, [searchParams])

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

    const deleteTable = async () => {

    }

    const generateQR = async () => {
        const result = await getQR(table.id)
        setQrcode(result.qrCode)
        setOpenQRDisplay(true)
    }

    const onQRDisplayClose = () => {
        setOpenQRDisplay(false)
    }

    const cancelOrder = (order) => {
        
    }

    return (<>
        <TableManager
            deleteTable={deleteTable}
            table={table}
            orders={orders}
            generateQR={generateQR}
            cancelOrder={cancelOrder}/>

        <QRDisplay
            open={openQRDisplay}
            qrcode={qrcode}
            onClose={onQRDisplayClose}/>
    </>)
}
