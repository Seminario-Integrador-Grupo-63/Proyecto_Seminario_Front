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
    // const [tableCodeDef, setTableCodeDef] = useState('')

    const [orders, setOrders] = useState([])
    const [tableCode, setTableCode] = useState('')

    useEffect(() => {
        console.log(' ')
        console.log('menucategories useEffect []')
        console.log('window: ', window)

        let hasCustomerName = hasCookie("customerName")
        let hasTableCode = hasCookie("tableCode")
        console.log('hasCustomerName: ', hasCustomerName)
        console.log('hasTableCode: ', hasTableCode)

        // Redirection conditionals
        if (!hasCustomerName || getCookie("customerName") == "") {
            router.push({
                pathname:"/start"
            })
        } else if (!hasTableCode|| getCookie("tableCode") == "") {
            router.push({
                pathname:"/"
            })
        } else {
            setCustomerName(getCookie("customerName"))
            setTableCode(getCookie("tableCode"))
        }

        // Initial Fetch
        fetchCategories()
    }, [])

    useEffect(() => {
        fetchOrders()

        // Fetch orders every 2 seconds
        const intervalId = setInterval(fetchOrders, 2000)
        
        // Clean up the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, [tableCode])

    const calculateOrdersTotal = (orders) => {
        let total = 0
        orders.forEach(order => {
            total += order.total
        })
        return total
    }

    const fetchOrders = async () => {
        console.log(' ')
        console.log('menucategories fetchOrders()')
        console.log('tableCode: ', tableCode)
        const fetchedOrders = await getTableOrders(tableCode)
        console.log('fetchedOrders: ', fetchedOrders)
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
                categoryId: category.id
            }
        })
    }

    const onClickShowOrders = () => {
        router.replace({
            pathname: '/listorders', 
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
