import {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import { useSearchParams} from 'next/navigation'
import {MenuCategories} from '@/Customer/MenuCategories/MenuCategories'
import {
    getCategories,
    getTableOrders
} from '@/requests'
import { tableCode } from '@/Common/FakeData/Tables'
import {getCookie, hasCookie} from "cookies-next";

export default function MenuCategoriesPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [categories, setCategories] = useState([])
    const [customer, setCustomer] = useState('')

    const [customerName, setCustomerName] = useState('')
    const [tableCodeDef, setTableCodeDef] = useState('')

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetchCategories()
        if (!hasCookie("tableCode")) {
            router.push({pathname: '/'})
        } else if (!hasCookie("customerName")) {
            router.push({pathname: '/start'})
        } else {
            setCustomerName(getCookie("customerName"))
            setTableCodeDef(getCookie("tableCode"))
            console.log("Cookie TableCodeDef: ", getCookie("tableCode"))
        }
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
        console.log("UseState tableCode: ", tableCodeDef)
        const fetchedOrders = await getTableOrders(getCookie("tableCode"))
        setOrders(fetchedOrders)
    }

    const setFooterButtonVisible = (orders) => {
        return orders.length > 0;
    }

    const fetchCategories = async () => {
        const response = await getCategories()
        setCategories(response)
    }

    const onClickCategory = (category) => {
        router.replace({
            pathname: '/menudishes', 
            query: {
                category: JSON.stringify(category),
            }
        })
    }

    const onClickShowOrders = () => {
        router.replace({
            pathname: '/listorders', 
            query: { }
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
