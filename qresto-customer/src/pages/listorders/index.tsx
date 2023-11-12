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
        // Initial fetch
        fetchOrders();
    
        // Fetch orders every 2 seconds
        const intervalId = setInterval(fetchOrders, 2000);
    
        // Clean up the interval when the component is unmounted
        return () => clearInterval(intervalId);
      }, []);

    const calculateOrdersTotal = (orders) => {
        let total = 0
        orders.forEach(order => {
            total += order.total
        })
        return total
    }

    const fetchOrders = async () => {
        const fetchedOrders = await getOrders(tableCode)
        setOrders(fetchedOrders)
        flowState.orders.total = calculateOrdersTotal(fetchedOrders)
    }


    const goBack = () => {
        router.replace({
            pathname: '/menucategories',
            query: {
                flowState: JSON.stringify({
                    customer: flowState.customer,
                    confirmed: flowState.confirmed,
                    orders: {
                        buttonVisible: flowState.orders.buttonVisible,
                        total: flowState.orders.total
                    }
                }),
            }
        })
    }

    const orderClick = (order) => {
        router.replace({
            pathname: '/listorderdetails',
            query: {
                flowState: JSON.stringify({
                    customer: flowState.customer,
                    confirmed: flowState.confirmed,
                    orders: {
                        buttonVisible: flowState.orders.buttonVisible,
                        total: flowState.orders.total
                    }
                }),
                order: JSON.stringify(order)
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
