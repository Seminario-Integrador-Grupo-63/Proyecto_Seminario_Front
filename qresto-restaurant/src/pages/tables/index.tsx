import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import { getTablesGrid } from '@/requests';
import { TableSchema } from '@/Restaurant/Tables/TableSchema'

export default function TablesPage() {
    const router = useRouter()
    const [sectors, setSectors] = useState([])

    useEffect(() => {
        fetchTablesGrid()
    }, [])

    const fetchTablesGrid = async () => {
        const tablesGrid = await getTablesGrid()
        setSectors(tablesGrid)
    }

    const onTableClick = (table) => {
        router.replace({
            pathname: '/tables/table',
            query: {
                tableId: table.id
            }
        })
    }

    return (<>
        <TableSchema 
            sectors={sectors}
            onTableClick={onTableClick}/>
    </>)
}
