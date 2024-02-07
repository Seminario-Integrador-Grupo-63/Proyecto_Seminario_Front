import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import { useSearchParams} from 'next/navigation'
import { 
    getTableOrders,
    getBill
} from '@/requests'

import { tableCode} from '@/Common/FakeData/Tables'
import {BillCheckout} from '@/Customer/BillCheckout/BillCheckout';

export default function BillCheckoutPage() {
    const searchParams = useSearchParams()
    const [billData, setBillData] = useState(null)
    useEffect(() => {

    }, [searchParams])

    useEffect(() => {
        fetchBill()
    }, [])

    const fetchBill = async() => {
        const bill = await getBill(tableCode)
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

