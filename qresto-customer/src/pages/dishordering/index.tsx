import { useRouter } from 'next/router'
import {DishOrdering} from '@/Customer/DishOrdering/DishOrdering'
import { useSearchParams} from 'next/navigation'
import { useEffect, useState} from 'react'
import { 
    getDish,
    postOrderDetail,
    getTableOrders
} from '@/requests'
import { tableCode} from '@/Common/FakeData/Tables'
import {getCookie, hasCookie} from "cookies-next";

export default function DishOrderingPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [dish, setDish] = useState(null)
    const [category, setCategory] = useState(null)
    const [categoryId, setCategoryId] = useState(null)
    const [customer, setCustomer] = useState('')
    const [customerName, setCustomerName] = useState('')
    const [tableCodeDef, setTableCodeDef] = useState('')


    useEffect(() => {
        const dishId = searchParams.get('dishId')
        if(dishId != undefined){
            fecthDish(dishId)
        }
        setCategoryId(searchParams.get('categoryId'))
        let customer = searchParams.get('customer')

        if (!hasCookie("customerName") || getCookie("customerName") == "") {
            router.push({
                pathname:"/start"
            })
        } else if (!hasCookie("tableCode") || getCookie("tableCode") == "") {
            router.push({
                pathname:"/"
            })
        } else {
            setCustomerName(getCookie("customerName"))
            setTableCodeDef(getCookie("tableCode"))
        }
        setCustomer(customer)
        setCustomerName(getCookie("customerName"))
        setTableCodeDef(getCookie("tableCode"))
    }, [searchParams])

    const fecthDish = async (id) => {
        const d = await getDish(id)
        setDish(d)
    }

    const goBack = () => {
        router.replace({
            pathname: '/menudishes',
            query: {
                categoryId: categoryId,
                customer: customer
            }
        })
    }

    const addOrderDetails = async (orderDetail) => {
        await postOrderDetail(orderDetail, getCookie("tableCode"))
        const orders = await getTableOrders(getCookie("tableCode"))
        const totalOrders = calculateOrdersTotal(orders)
        router.replace({
            pathname: '/menucategories',
            query: {
                customer: customer,
                tableCode: tableCode
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
            customer={customerName}
            dish={dish}
            onAdd={addOrderDetails}
            goBack={goBack}/>
    </>)
}
