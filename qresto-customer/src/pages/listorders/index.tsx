import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import { useSearchParams} from 'next/navigation'
import {getTableOrders} from '@/requests'
import { tableCode} from '@/Common/FakeData/Tables'
import {ListOrders} from '@/Customer/ListOrders/ListOrders'
import {getCookie, hasCookie} from "cookies-next";

export default function ListOrdersPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [orders, setOrders] = useState([])
    const [customer, setCustomer] = useState('')

    const [customerName, setCustomerName] = useState('')
    const [tableCodeDef, setTableCodeDef] = useState('')

    useEffect(() => {
        setCustomer(searchParams.get('customer'))

    }, [searchParams])

    useEffect(() => {
        if (!hasCookie("tableCode")) {
            router.push({pathname: '/'})
        } else if (!hasCookie("customerName")) {
            router.push({pathname: '/start'})
        } else {
            setCustomerName(getCookie("customerName"))
            setTableCodeDef(getCookie("tableCode"))
        }
        // Initial fetch
        fetchOrders();
    
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
        router.replace({
            pathname: '/listorderdetails',
            query: {
                order: JSON.stringify(order),
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
