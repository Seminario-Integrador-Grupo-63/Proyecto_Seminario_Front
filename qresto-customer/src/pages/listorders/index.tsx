import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import { FlowState } from '@/Common/FlowState'
import { useSearchParams} from 'next/navigation'
import {getOrders} from '@/requests'
import { tableCode} from '@/Common/FakeData/Tables'
import {ListOrders} from '@/Customer/ListOrders/ListOrders'

export default function ListOrdersPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [orders, setOrders] = useState([])
    const [customer, setCustomer] = useState('')

    useEffect(() => {
        setCustomer(searchParams.get('customer'))
    }, [searchParams])

    useEffect(() => {
        // Initial fetch
        fetchOrders();
    
        // Fetch orders every 2 seconds
        const intervalId = setInterval(fetchOrders, 2000);
    
        // Clean up the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);

    const fetchOrders = async () => {
        const fetchedOrders = await getOrders(tableCode)
        setOrders(fetchedOrders)
    }

    const goBack = () => {
        router.replace({
            pathname: '/menucategories',
            query: {
                customer: customer
            }
        })
    }

    const orderClick = (order) => {
        router.replace({
            pathname: '/listorderdetails',
            query: {
                order: JSON.stringify(order),
                customer: customer
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
