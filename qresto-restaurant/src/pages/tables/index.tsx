import { useRouter } from 'next/router'
import {useEffect} from 'react'
import {Table} from "@mui/material";
import { TableSchema } from '@/Restaurant/Tables/TableSchema'
import { sectors} from '@/Common/FakeData/Tables'

export default function TablesPage() {
    const router = useRouter()

    useEffect(() => {

    }, [])

    const onTableClick = (tableId) => {
        router.replace({
            pathname: '/tables/table',
            query: {
                tableId: tableId
            }
        })
    }

    return (<>
        <TableSchema 
            sectors={sectors}
            onTableClick={onTableClick}/>
    </>)
}
