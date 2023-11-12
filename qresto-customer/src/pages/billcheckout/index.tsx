import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import { FlowState } from '@/Common/FlowState'
import { useSearchParams} from 'next/navigation'
import { 
    getOrders,
    getBill
} from '@/requests'

import { tableCode} from '@/Common/FakeData/Tables'
import {BillCheckout} from '@/Customer/BillCheckout/BillCheckout';

export default function BillCheckoutPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [orders, setOrders] = useState([])
    const [billData, setBillData] = useState(null)
    const [flowState, setFlowState] = useState<FlowState>({
        customer: '',
        confirmed: false,
        orders: {
            buttonVisible: false,
            total: 0
        }
    })

    useEffect(() => {
        setFlowState(JSON.parse(searchParams.get('flowState')))
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

