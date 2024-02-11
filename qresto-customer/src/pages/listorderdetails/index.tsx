import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import { useSearchParams} from 'next/navigation'
import { ListOrderDetails } from '@/Customer/ListOrderDetails/ListOrderDetails';
import {
    confirmOrder as confirmOrderRequest,
    deleteOrderDetail as deleteOrderDetailRequest,
    getTableOrders
} from '@/requests';
import { tableCode } from '@/Common/FakeData/Tables';
import {getCookie, hasCookie} from "cookies-next";

export default function ListOrderDetailsPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [order, setOrder] = useState(null)
    const [customer, setCustomer] = useState('')

    const [customerName, setCustomerName] = useState('')
    const [tableCodeDef, setTableCodeDef] = useState('')

    useEffect(() => {
        if (!hasCookie("tableCode")) {
            router.push({pathname: '/'})
        } else if (!hasCookie("customerName")) {
            router.push({pathname: '/start'})
        } else {
            setCustomerName(getCookie("customerName"))
            setTableCodeDef(getCookie("tableCode"))
        }
    }, []);


    useEffect(() => {
        setOrder(JSON.parse(searchParams.get('order')))
        let customer = searchParams.get('customer')
        setCustomer(customer)
    }, [searchParams])

    const goBack = () => {
        router.replace({
            pathname: '/listorders',

        })
    }

    const confirmOrder = async () => {
        await confirmOrderRequest(getCookie("customerName"), getCookie("tableCode"))
        router.replace({
            pathname: '/listorders',

        })
    }

    const requestBill = () => {
        router.replace({
            pathname: '/billcheckout',

        })
    }

    const deleteOrderDetail = async (orderDetail) => {
        await deleteOrderDetailRequest(getCookie("tableCode"), orderDetail)
        router.replace({
            pathname: '/listorders',

        })
    }

    const setConfirmedCustomer = () => {
        if(order != null){
            if(order.customerList.length > 0){
                return order.customerList.some(c => {
                    if(c.customer === getCookie("customerName")){
                        return c.confirmed
                    }
                })
            } else {
                return true
            }
        } else {
            return false
        }
    }

    return (<>
        <ListOrderDetails
            customer={getCookie("customerName")}
            confirmed={setConfirmedCustomer()}
            onConfirmOrder={confirmOrder}
            onDeleteOrderDetail={deleteOrderDetail}
            onRequestBill={requestBill}
            onGoBack={goBack}
            order={order}/>
    </>)
}

