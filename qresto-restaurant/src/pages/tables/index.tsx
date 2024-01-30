import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import { getTablesGrid } from '@/requests';
import { TableSchema } from '@/Restaurant/Tables/TableSchema'
import { PanLoader as Loader} from '@/Common/PanLoader/PanLoader'
import {
    postTable,
    getSectors
} from '@/requests'

const restaurantId = 1

export default function TablesPage() {
    const router = useRouter()
    const [grid, setGrid] = useState([])
    const [sectors, setSectors] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchGrid = async () => {
        const tablesGrid = await getTablesGrid()
        setGrid(tablesGrid)
    }

    const fetchSectors = async () => {
        const result = await getSectors(restaurantId)
        setSectors(result)
    }

    const fetchData = async () =>{
        setLoading(true)
        await Promise.all([
            fetchSectors(),
            fetchGrid()
        ])
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

    const createTable = async (table) => {
        setLoading(true)
        const result = await postTable(table)
        await fetchGrid()
        setLoading(false)
        return result
    }

    return (<>
        <TableSchema 
            grid={grid}
            sectors={sectors}
            restaurantId={restaurantId}
            onTableClick={onTableClick}
            createTable={createTable}/>
        <Loader open={loading}/>
    </>)
}
