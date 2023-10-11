import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation';
import {useEffect, useState} from 'react'
import {MenuDishes} from '@/Customer/MenuDishes/MenuDishes'
import { getCategoryRequest, getDishesByCategoryIdRequest } from '@/requests'

export default function MenuDishesPage() {
    const router = useRouter()
    const [dishes, setDishes] = useState([])
    const searchParams = useSearchParams()
    const [category, setCategory] = useState(null)
    const [customer, setCustomer] = useState('')

    useEffect(() => {
        setCategory(JSON.parse(searchParams.get('category')))
        setCustomer(searchParams.get('customer'))

    }, [searchParams])

    useEffect(() => {
        if(category != null){
            fetchDishes(category.id)
        }
    }, [category])

    const goBack = () => {
        router.replace('/menucategories')
    }

    const goDishOrdering = (dish) => {
        router.replace({
            pathname: '/dishordering', 
            query: {
                customer: customer,
                dishId: dish.id,
                category: JSON.stringify(category)
            }
        })
    }

    const fetchDishes = async (categoryId) => {
        const data = await getDishesByCategoryIdRequest(categoryId)
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
