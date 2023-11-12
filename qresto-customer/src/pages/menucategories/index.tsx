import {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import { useSearchParams} from 'next/navigation'
import {MenuCategories} from '@/Customer/MenuCategories/MenuCategories'
import {
    getCategories,
    getOrders
} from '@/requests'
import { FlowState } from '@/Common/FlowState'
import { tableCode } from '@/Common/FakeData/Tables'

export default function MenuCategoriesPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [categories, setCategories] = useState([])
    const [customer, setCustomer] = useState('')
    const [flowState, setFlowState] = useState<FlowState>({
        customer: '',
        confirmed: false,
        orders: {
            buttonVisible: false,
            total: 0
        }
    })

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        fetchOrders();
    
        // Fetch orders every 2 seconds
        const intervalId = setInterval(fetchOrders, 2000);
    
        // Clean up the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, [customer])

    const calculateOrdersTotal = (orders) => {
        let total = 0
        orders.forEach(order => {
            total += order.total
        })
        return total
    }

    const fetchOrders = async () => {
        const fetchedOrders = await getOrders(tableCode)
        refreshOrderFlowTotal(fetchedOrders)
    }

    const refreshOrderFlowTotal = (orders) => {
        setFlowState({
            customer: customer,
            confirmed: flowState.confirmed,
            orders: {
                buttonVisible: setFooterButtonVisible(orders),
                total: calculateOrdersTotal(orders)
            }
        })
    }

    const setFooterButtonVisible = (orders) => {
        if(orders.length > 0){
            return true
        } else {
            return false
        }
    }

    useEffect(() => {
        let fs = JSON.parse(searchParams.get('flowState'))
        setCustomer(fs.customer)
        setFlowState(fs)

    }, [searchParams])

    const fetchData = async () => {
        const response = await getCategories()
        setCategories(response)
    }

    const onClickCategory = (category) => {
        router.replace({
            pathname: '/menudishes', 
            query: {
                flowState: JSON.stringify(flowState),
                category: JSON.stringify(category)
            }
        })
    }

    const onClickShowOrders = () => {
        router.replace({
            pathname: '/listorders', 
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

    return (<>
        <MenuCategories 
            categories={categories}
            ordersButtonVisible={flowState.orders.buttonVisible}
            ordersTotal={flowState.orders.total}
            onClickFooter={onClickShowOrders}
            onClickCategory={onClickCategory}/>
    </>)
}
