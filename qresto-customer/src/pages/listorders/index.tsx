import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import { useSearchParams} from 'next/navigation'
import {getTableOrders} from '@/requests'
// import { tableCode} from '@/Common/FakeData/Tables'
import {ListOrders} from '@/Customer/ListOrders/ListOrders'
import {getCookie, hasCookie} from "cookies-next";

export default function ListOrdersPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [orders, setOrders] = useState([])
    const [customer, setCustomer] = useState('')
    const [tableCode, setTableCode] = useState('')

    const [customerName, setCustomerName] = useState('')
    const [tableCodeDef, setTableCodeDef] = useState('')

    useEffect(() => {
        setCustomer(searchParams.get('customer'))
        setTableCode(searchParams.get('tableCode'))
    }, [searchParams])

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
            setTableCodeDef(getCookie("tableCode"))
        }

        // Initial fetch
        fetchOrders()

        // Fetch orders every 2 seconds
        const intervalId = setInterval(fetchOrders, 2000);

        // Clean up the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);


    const fetchOrders = async () => {
        const fetchedOrders = await getTableOrders(getCookie("tableCode"))
        setOrders(fetchedOrders)
    }

    const goBack = () => {
        router.replace({
            pathname: '/menucategories',
        })
    }

    const orderClick = (order) => {
        console.log(' ')
        console.log('ListOrderPage orderClick')
        console.log('order: ', order)
        router.replace({
            pathname: '/listorderdetails',
            query: {
                orderId: JSON.stringify(order.id)
            }
        })
    }

    return (<>
        <ListOrders 
            onGoBack={goBack}
            onOrderClick={orderClick}
            orders={orders}/>
    </>)
}
