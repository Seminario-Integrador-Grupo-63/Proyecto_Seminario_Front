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
    const [orderId, setOrderId] = useState(null)
    const [customer, setCustomer] = useState('')
    const [customerName, setCustomerName] = useState('')
    const [tableCode, setTableCode] = useState('')

    useEffect(() => {
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
    }, []);

    useEffect(() => {
        if(tableCode !== null && tableCode !== undefined && tableCode !== ''){
            fetchOrders()
        }
    }, [tableCode, orderId])

    useEffect(() => {
        let orderId = JSON.parse(searchParams.get('orderId'))
        setOrderId(orderId)
        let customer = searchParams.get('customer')
        setCustomer(customer)
    }, [searchParams])

    const goBack = () => {
        router.replace({
            pathname: '/listorders',

        })
    }

    const fetchOrders = async () => {
        const fetchedOrders = await getTableOrders(tableCode)
        const index = fetchedOrders.findIndex(o => o.id === orderId)
        if(index !== -1){
            setOrder(fetchedOrders[index])
        }
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

