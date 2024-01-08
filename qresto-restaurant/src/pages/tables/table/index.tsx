import Link from 'next/link'
import {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import { TableManager} from '@/Restaurant/Tables/TableManager'
import { useSearchParams} from 'next/navigation'
import { getOrders, getTable } from '@/requests'

export default function TablePage() {
    const [table, setTable] = useState(null)
    const router = useRouter()
    const searchParams = useSearchParams()
    
    useEffect(() => {
        const tableId = searchParams.get('tableId')
        const table = fetchTable(parseInt(tableId))
        setTable(table)
    }, [searchParams])


    const fetchTable = async (tableId) => {
        const table = await getTable(tableId)
        return table
    }

    const fetchOrders = async (tableId) => {
        // const orders = await getOrders()
    }

    return (<>
        <TableManager
            table={table}/>
    </>)
}
