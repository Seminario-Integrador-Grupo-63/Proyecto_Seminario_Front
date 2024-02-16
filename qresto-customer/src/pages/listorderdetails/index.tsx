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
        console.log(' ')
        console.log('listorderdetails useEffect []')
        // console.log(': ', )

        let hasCustomerName = hasCookie("customerName")
        let customerName = getCookie('customerName')
        let hasTableCode = hasCookie('tableCode')
        let tableCode = getCookie('tableCode')

        console.log('hasCustomerName: ', hasCustomerName)
        console.log('customerName: ', customerName)
        console.log('hasTableCode: ', hasTableCode)
        console.log('tableCode: ', tableCode)

        if(hasTableCode){
            if(tableCode !== ''){
                if(hasCustomerName){
                    if(customerName !== ''){
                        console.log("if(customerName !== '')")
                        setCustomerName(customerName)
                        setTableCode(tableCode)
                    } else {
                        goToStart()
                    }
                } else {
                    goToStart()
                }
            } else {
                goToBase()
            }
        } else {
            goToBase()
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
        console.log('listorderdetails useEffect [tableCode]')
        console.log('tableCode: ', tableCode)
    }, [tableCode])

    useEffect(() => {
        console.log(' ')
        console.log('listorderdetails useEffect[searchParams]')
        
        let orderId = JSON.parse(searchParams.get('orderId'))
        console.log('orderId: ', orderId)
        setOrderId(orderId)
    }, [searchParams])

    const goBack = () => {
        router.replace({
            pathname: '/listorders',
        })
    }

    const goToStart = () => {
        router.push({
            pathname:"/start"
        })
    }

    const goToBase = () => {
        router.push({
            pathname:"/"
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
        // await confirmOrderRequest(getCookie("customerName"), getCookie("tableCode"))
        await confirmOrderRequest(customerName, tableCode)
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
        // await deleteOrderDetailRequest(getCookie("tableCode"), orderDetail)
        await deleteOrderDetailRequest(tableCode, orderDetail)
        router.replace({
            pathname: '/listorders',
        })
    }

    const setConfirmedCustomer = () => {
        if(order != null){
            if(order.customerList.length > 0){
                return order.customerList.some(c => {
                    // if(c.customer === getCookie("customerName")){
                    if(c.customer === customerName){
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

