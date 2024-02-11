import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import { useSearchParams} from 'next/navigation'
import { 
    getTableOrders,
    getBill
} from '@/requests'

import { tableCode} from '@/Common/FakeData/Tables'
import {BillCheckout} from '@/Customer/BillCheckout/BillCheckout';
import {getCookie, hasCookie} from "cookies-next";

export default function BillCheckoutPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [billData, setBillData] = useState(null)

    const [customerName, setCustomerName] = useState('')
    const [tableCodeDef, setTableCodeDef] = useState('')

    useEffect(() => {

    }, [searchParams])

    useEffect(() => {
        fetchBill()

        if (!hasCookie("tableCode")) {
            router.push({pathname: '/'})
        } else if (!hasCookie("customerName")) {
            router.push({pathname: '/start'})
        } else {
            setCustomerName(getCookie("customerName"))
            setTableCodeDef(getCookie("tableCode"))
        }
    }, [])

    const fetchBill = async() => {
        const bill = await getBill(tableCodeDef)
        setBillData(bill)
    }

    if(billData != null){
        return(<>
            <BillCheckout billData={billData}/>
        </>)
    } else {
        return(<></>)
    }
}

