import {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import { useSearchParams} from 'next/navigation'
import {MenuCategories} from '@/Customer/MenuCategories/MenuCategories'
import {
    getCategories,
    getTableOrders
} from '@/requests'
import { tableCode } from '@/Common/FakeData/Tables'

export default function MenuCategoriesPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [categories, setCategories] = useState([])
    const [customer, setCustomer] = useState('')
    const [orders, setOrders] = useState([])

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

    useEffect(() => {
        let customer = searchParams.get('customer')
        setCustomer(customer)
    }, [searchParams])

    const calculateOrdersTotal = (orders) => {
        let total = 0
        orders.forEach(order => {
            total += order.total
        })
        return total
    }

    const fetchOrders = async () => {
        const fetchedOrders = await getTableOrders(tableCode)
        setOrders(fetchedOrders)
    }

    const setFooterButtonVisible = (orders) => {
        if(orders.length > 0){
            return true
        } else {
            return false
        }
    }

    const fetchData = async () => {
        const response = await getCategories()
        setCategories(response)
    }

    const onClickCategory = (category) => {
        router.replace({
            pathname: '/menudishes', 
            query: {
                category: JSON.stringify(category),
                customer: customer
            }
        })
    }

    const onClickShowOrders = () => {
        router.replace({
            pathname: '/listorders', 
            query: {
                customer: customer
            }
        })
    }

    return (<>
        <MenuCategories 
            categories={categories}
            ordersButtonVisible={setFooterButtonVisible(orders)}
            ordersTotal={calculateOrdersTotal(orders)}
            onClickFooter={onClickShowOrders}
            onClickCategory={onClickCategory}/>
    </>)
}
