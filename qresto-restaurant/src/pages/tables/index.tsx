import { useRouter } from 'next/router'
import {useEffect} from 'react'
import {Table} from "@mui/material";
import { TableSchema } from '@/Restaurant/Tables/TableSchema'
import { sectors} from '@/Common/FakeData/Tables'

export default function TablesPage() {
    const router = useRouter()

    useEffect(() => {

    }, [])

    return (<>
        <TableSchema sectors={sectors}/>
    </>)
}
