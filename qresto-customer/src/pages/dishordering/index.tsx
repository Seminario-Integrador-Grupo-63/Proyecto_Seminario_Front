import { useRouter } from 'next/router'
import {DishOrdering} from '@/Customer/DishOrdering/DishOrdering'
import { useSearchParams} from 'next/navigation'
import { useEffect, useState} from 'react'
import { 
    getDish,
    postOrderDetail,
    getOrders
} from '@/requests'
import { tableCode} from '@/Common/FakeData/Tables'
import { FlowState } from '@/Common/FlowState'

export default function DishOrderingPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [dish, setDish] = useState(null)
    const [category, setCategory] = useState(null)
    const [flowState, setFlowState] = useState<FlowState>({
        customer: '',
        orders: {
            buttonVisible: false,
            total: 0
        }
    })

    useEffect(() => {
        const dishId = searchParams.get('dishId')
        if(dishId != undefined){
            fecthDish(dishId)
        }
        setCategory(JSON.parse(searchParams.get('category')))
        setFlowState(JSON.parse(searchParams.get('flowState')))
    }, [searchParams])

    const fecthDish = async (id) => {
        const d = await getDish(id)
        setDish(d)
    }

    const goBack = () => {
        router.replace({
            pathname: '/menudishes',
            query: {
                flowState: JSON.stringify(flowState),
                category: JSON.stringify(category)
            }
        })
    }

    const addOrderDetails = async (orderDetail) => {
        await postOrderDetail(orderDetail, tableCode)
        const orders = await getOrders(tableCode)
        const totalOrders = calculateOrdersTotal(orders)
        flowState.orders.total = totalOrders
        flowState.orders.buttonVisible = true
        router.replace({
            pathname: '/menucategories',
            query: {
                flowState: JSON.stringify(flowState)
            }
        })
    }

    const calculateOrdersTotal = (orders) => {
        let total = 0
        orders.forEach(order => {
            total += order.total
        })
        return total
    }

    return (<>
        <DishOrdering
            customer={flowState.customer}
            dish={dish}
            onAdd={addOrderDetails}
            goBack={goBack}/>
    </>)
}
