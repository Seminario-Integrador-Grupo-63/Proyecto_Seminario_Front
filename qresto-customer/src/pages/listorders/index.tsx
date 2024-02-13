import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import { useSearchParams} from 'next/navigation'
import {getTableOrders} from '@/requests'
// import { tableCode} from '@/Common/FakeData/Tables'
import {ListOrders} from '@/Customer/ListOrders/ListOrders'

export default function ListOrdersPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [orders, setOrders] = useState([])
    const [customer, setCustomer] = useState('')
    const [tableCode, setTableCode] = useState('')

    useEffect(() => {
        setCustomer(searchParams.get('customer'))
        setTableCode(searchParams.get('tableCode'))
    }, [searchParams])

    useEffect(() => {
        if(tableCode !== ''){
            // Initial fetch
            fetchOrders();
        
            // Fetch orders every 2 seconds
            const intervalId = setInterval(fetchOrders, 2000);
        
            // Clean up the interval when the component is unmounted
            return () => clearInterval(intervalId);
        }
    }, [tableCode]);

    const fetchOrders = async () => {
        if(tableCode !== ''){
            const fetchedOrders = await getTableOrders(tableCode)
            setOrders(fetchedOrders)
        }
    }

    const goBack = () => {
        router.replace({
            pathname: '/menucategories',
            query: {
                customer: customer,
                tableCode: tableCode
            }
        })
    }

    const orderClick = (order) => {
        router.replace({
            pathname: '/listorderdetails',
            query: {
                order: JSON.stringify(order),
                customer: customer,
                tableCode: tableCode
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
