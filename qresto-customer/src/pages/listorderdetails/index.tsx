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

        let hasCustomerName = hasCookie("customerName")
        let customerName = getCookie('customerName')
        let hasTableCode = hasCookie('tableCode')

        console.log('hasCustomerName: ', hasCustomerName)
        console.log('customerName: ', customerName)
        console.log('hasTableCode: ', hasTableCode)

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
        console.log(' ')
        console.log('listorderdetails useEffect[tableCode, orderId]')
        console.log('tableCode: ', tableCode)
        
        if(tableCode !== null && tableCode !== undefined && tableCode !== ''){
            fetchOrders()
        }
    }, [tableCode, orderId])

    useEffect(() => {
        console.log(' ')
        console.log('listorderdetails useEffect[searchParams]')
        
        let orderId = JSON.parse(searchParams.get('orderId'))
        console.log('orderId: ', orderId)
        setOrderId(orderId)
        let customer = searchParams.get('customer')
        setCustomer(customer)
        setTableCode(searchParams.get('tableCode'))
    }, [searchParams])

    const goBack = () => {
        router.replace({
            pathname: '/listorders',
        })
    }

    const fetchOrders = async () => {
        console.log(' ')
        console.log('ListOrderDetailsPage fetchOrders()')
        
        const fetchedOrders = await getTableOrders(tableCode)
        console.log('fetchedOrders: ', fetchedOrders)
        console.log('orderId: ', orderId)
        const index = fetchedOrders.findIndex(o => o.id === orderId)
        console.log('index: ', index)
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

