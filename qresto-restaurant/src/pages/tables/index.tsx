import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import { getTablesGrid } from '@/requests';
import { TableSchema } from '@/Restaurant/Tables/TableSchema'
import { LoadingDialog } from '@/Common/LoadingDialog';

export default function TablesPage() {
    const router = useRouter()
    const [sectors, setSectors] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchTablesGrid()
    }, [])

    const fetchTablesGrid = async () => {
        setLoading(true)
        const tablesGrid = await getTablesGrid()
        setSectors(tablesGrid)
        setLoading(false)
    }

    const onTableClick = (table) => {
        router.replace({
            pathname: '/tables/tablemanager',
            query: {
                tableId: table.id
            }
        })
    }

    return (<>
        <TableSchema 
            sectors={sectors}
            onTableClick={onTableClick}/>

        <LoadingDialog open={loading}/>
    </>)
}
