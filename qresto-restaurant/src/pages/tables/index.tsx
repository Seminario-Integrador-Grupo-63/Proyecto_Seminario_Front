import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import {useEffect} from 'react'
import {Table} from "@mui/material";

const inter = Inter({ subsets: ['latin'] })

export default function TablesPage() {
    const router = useRouter()

    useEffect(() => {

    }, [])

    return (<>
        <Table/>
    </>)
}
