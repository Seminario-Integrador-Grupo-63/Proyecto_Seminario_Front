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
        orders: {
            buttonVisible: false,
            total: 0
        }
    })

    useEffect(() => {
        setFlowState(JSON.parse(searchParams.get('flowState')))
    }, [searchParams])

    useEffect(() => {
        fetchOrders()
    }, [])

    const fetchOrders = async () => {
        const fetchedOrders = await getOrders(tableCode)
        setOrders(fetchedOrders)
    }

    const goBack = () => {

        router.replace({
            pathname: '/menucategories',
            query: {
                flowState: JSON.stringify(flowState)
            }
        })
    }

    const orderClick = (order) => {
        router.replace({
            pathname: '/listorderdetails',
            query: {
                flowState: JSON.stringify(flowState),
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
