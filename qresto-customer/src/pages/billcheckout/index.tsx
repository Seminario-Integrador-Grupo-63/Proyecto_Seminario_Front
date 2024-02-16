import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import { useSearchParams} from 'next/navigation'
import { 
    getTableOrders,
    getBill
} from '@/requests'

// import { tableCode} from '@/Common/FakeData/Tables'
import {BillCheckout} from '@/Customer/BillCheckout/BillCheckout';
import {getCookie, hasCookie} from "cookies-next";

export default function BillCheckoutPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [billData, setBillData] = useState(null)
    const [customerName, setCustomerName] = useState('')
    const [tableCode, setTableCode] = useState('')

    useEffect(() => {
        console.log(' ')
        console.log('billcheckout useEffect []')

        console.log(': ', )
        // Redirection conditionals
        if (!hasCookie("customerName") || getCookie("customerName") == "") {
            router.push({
                pathname:"/start"
            })
        } else if (!hasCookie("tableCode") || getCookie("tableCode") == "") {
            router.push({
                pathname:"/"
            })
        } else {
            setCustomerName(getCookie("customerName"))
            setTableCode(getCookie("tableCode"))
        }
    }, [])

    useEffect(() => {
        if(tableCode !== ''){
            fetchBill()    
        }
    }, [tableCode])

    const fetchBill = async() => {
        const bill = await getBill(tableCode)
        console.log('bill: ', bill)
        setBillData(bill)
    }

    if(billData !== null){
        return(<>
            <BillCheckout billData={billData}/>
        </>)
    } else {
        return(<></>)
    }
}

