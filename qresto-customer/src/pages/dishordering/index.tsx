import { useRouter } from 'next/router'
import {DishOrdering} from '@/Customer/DishOrdering/DishOrdering'
import { useSearchParams} from 'next/navigation'
import { useEffect, useState} from 'react'
import { 
    getDish,
    postOrderDetail,
    getTableOrders
} from '@/requests'

export default function DishOrderingPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [dish, setDish] = useState(null)
    const [category, setCategory] = useState(null)
    const [customer, setCustomer] = useState('')
    const [tableCode, setTableCode] = useState('')

    useEffect(() => {
        const dishId = searchParams.get('dishId')
        if(dishId != undefined){
            fecthDish(dishId)
        }
        setCategory(JSON.parse(searchParams.get('category')))
        let customer = searchParams.get('customer')
        setCustomer(customer)
        setTableCode(searchParams.get('tableCode'))
    }, [searchParams])

    const fecthDish = async (id) => {
        const d = await getDish(id)
        setDish(d)
    }

    const goBack = () => {
        router.replace({
            pathname: '/menudishes',
            query: {
                category: JSON.stringify(category),
                customer: customer,
                tableCode: tableCode
            }
        })
    }

    const addOrderDetails = async (orderDetail) => {
        await postOrderDetail(orderDetail, tableCode)
        const orders = await getTableOrders(tableCode)
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
            customer={customer}
            dish={dish}
            onAdd={addOrderDetails}
            goBack={goBack}/>
    </>)
}
