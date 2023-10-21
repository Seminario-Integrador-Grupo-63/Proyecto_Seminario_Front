import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation';
import {useEffect, useState} from 'react'
import {MenuDishes} from '@/Customer/MenuDishes/MenuDishes'
import { getDishesByCategoryId } from '@/requests'
import { FlowState } from '@/Common/FlowState'

export default function MenuDishesPage() {
    const router = useRouter()
    const [dishes, setDishes] = useState([])
    const searchParams = useSearchParams()
    const [category, setCategory] = useState(null)
    // const [customer, setCustomer] = useState('')
    const [flowState, setFlowState] = useState<FlowState>({
        customer: '',
        orders: {
            buttonVisible: false,
            total: 0
        }
    })


    useEffect(() => {
        setCategory(JSON.parse(searchParams.get('category')))
        // setCustomer(searchParams.get('customer'))
        setFlowState(JSON.parse(searchParams.get('flowState')))

    }, [searchParams])

    useEffect(() => {
        if(category != null){
            fetchDishes(category.id)
        }
    }, [category])

    const goBack = () => {
        router.replace({
            pathname: '/menucategories',
            query: {
                // ordersButtonVisible: true,
                // customer: customer
                flowState: JSON.stringify(flowState)
            }
        })
    }

    const goDishOrdering = (dish) => {
        router.replace({
            pathname: '/dishordering', 
            query: {
                // customer: customer,
                flowState: JSON.stringify(flowState),
                dishId: dish.id,
                category: JSON.stringify(category)
            }
        })
    }

    const fetchDishes = async (categoryId) => {
        const data = await getDishesByCategoryId(categoryId)
        setDishes(data)
    }

    return (<>
        {category != null?
            <MenuDishes 
                title={category.name}
                onClickDish={goDishOrdering}
                onGoBack={goBack}
                dishes={dishes}/>
        :null}
    </>)
}
/**
console.log(" ")
console.log("MenuDishesPages")
console.log(": ", )
*/
