import { useRouter } from 'next/router'
import {DishOrdering} from '@/Customer/DishOrdering/DishOrdering'
import { useSearchParams} from 'next/navigation'
import { useEffect, useState} from 'react'
import { getDishRequest } from '@/requests'

export default function DishOrderingPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [dish, setDish] = useState(null)
    const [category, setCategory] = useState(null)
    const [customer, setCustomer] = useState('')

    useEffect(() => {
        const dishId = searchParams.get('dishId')
        if(dishId != undefined){
            fecthDish(dishId)
        }
        setCategory(JSON.parse(searchParams.get('category')))
        setCustomer(searchParams.get('customer'))
    }, [searchParams])

    useEffect(() => {

    }, [dish])

    const fecthDish = async (id) => {
        console.log(" ")
        console.log("DishOrderingPage fetchDish")
        
        const d = await getDishRequest(id)
        console.log("d: ", d)
        setDish(d)
    }

    const goBack = () => {
        router.replace({
            pathname: '/menudishes',
            query: {
                category: JSON.stringify(category)
            }
        })
    }

    const addOrderDetails = (orderDetails) => {
        
        // router.replace({
        //     pathname: '/menudishes',
        //     query: {
        //         category: JSON.stringify(category)
        //     }
        // })
    }

    return (<>
        <DishOrdering
            customer={customer}
            dish={dish}
            onAdd={addOrderDetails}
            goBack={goBack}/>
    </>)
}
/**
console.log(" ")
console.log("DishOrderingPage")
console.log(": ", )
*/
