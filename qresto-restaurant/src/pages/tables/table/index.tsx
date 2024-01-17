import Link from 'next/link'
import {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import { TableManager} from '@/Restaurant/Tables/TableManager'
import { useSearchParams} from 'next/navigation'
import { getOrders, getTable } from '@/requests'

export default function TablePage() {
    const [table, setTable] = useState(null)
    const [orders, setOrders] = useState([])
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
        console.log(' ')
        console.log('index fetchOrders ()')
        console.log('table: ', table)
        let ords = await getOrders(table.tableCode)
        console.log('ords: ', ords)
        setOrders(ords)
    }

    return (<>
        <TableManager
            table={table}
            orders={orders}/>
    </>)
}
