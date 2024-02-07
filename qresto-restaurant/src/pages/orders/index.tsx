import { Orders } from '@/Restaurant/Orders/Orders'
import { useEffect, useState} from 'react'
import { getOrders } from '@/requests'
import { PanLoader as Loader } from '@/Common/PanLoader/PanLoader'
const restaurantId = 1

export default function OrdersPage() {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchOrders()
    }, [])

    const fetchOrders = async ( startDate = null, endDate = null) => {
        setLoading(true)
        let ords = await getOrders(restaurantId, startDate, endDate)
        setOrders(ords)
        setLoading(false)
    }

    return (<>
        <Orders
            orders={orders} 
            onFilter={fetchOrders}/>

        <Loader open={loading}/>
    </>)
}
