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
// import { FlowState } from '@/Common/FlowState'

export default function DishOrderingPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [dish, setDish] = useState(null)
    const [category, setCategory] = useState(null)
    const [customer, setCustomer] = useState('')
    // const [flowState, setFlowState] = useState<FlowState>({
    //     customer: '',
    //     confirmed: false,
    //     orders: {
    //         buttonVisible: false,
    //         total: 0
    //     }
    // })

    useEffect(() => {
        const dishId = searchParams.get('dishId')
        if(dishId != undefined){
            fecthDish(dishId)
        }
        setCategory(JSON.parse(searchParams.get('category')))
        // setFlowState(JSON.parse(searchParams.get('flowState')))
        let customer = searchParams.get('customer')

        setCustomer(customer)
    }, [searchParams])

    const fecthDish = async (id) => {
        const d = await getDish(id)
        setDish(d)
    }

    const goBack = () => {
        router.replace({
            pathname: '/menudishes',
            query: {
                // flowState: JSON.stringify({
                //     customer: customer,
                //     confirmed: flowState.confirmed,
                //     orders: {
                //         buttonVisible: flowState.orders.buttonVisible,
                //         total: flowState.orders.total
                //     }
                // }),
                category: JSON.stringify(category),
                customer: customer
            }
        })
    }

    const addOrderDetails = async (orderDetail) => {
        await postOrderDetail(orderDetail, tableCode)
        const orders = await getOrders(tableCode)
        const totalOrders = calculateOrdersTotal(orders)
        // flowState.orders.total = totalOrders
        // flowState.orders.buttonVisible = true
        router.replace({
            pathname: '/menucategories',
            query: {
                // flowState: JSON.stringify({
                //     customer: customer,
                //     confirmed: flowState.confirmed,
                //     orders: {
                //         buttonVisible: flowState.orders.buttonVisible,
                //         total: flowState.orders.total
                //     }
                // }),
                customer: customer
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
            customer={customer}
            dish={dish}
            onAdd={addOrderDetails}
            goBack={goBack}/>
    </>)
}
