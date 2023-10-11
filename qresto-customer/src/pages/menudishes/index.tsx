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
    const [category, setCategory] = useState<any>({})

    useEffect(() => {
        const categoryId = searchParams.get('category')
        if(categoryId != null){
            fetchCategory(categoryId)
            fetchDishes(categoryId)
        }
    }, [searchParams])

    const goBack = () => {
        router.replace('/menucategories')
    }

    const selectDish = () => {
 
    }

    const fetchDishes = async (categoryId) => {
        const data = await getDishesByCategoryIdRequest(categoryId)
        setDishes(data)
    }

    const fetchCategory = async(id)=> {
        const data = await getCategoryRequest(id)
        setCategory(data)
    }

    return (<>
        <MenuDishes 
            title={category.name}
            onClickDish={selectDish}
            onGoBack={goBack}
            dishes={dishes}/>
    </>)
}
/**
console.log(" ")
console.log("MenuDishesPages")
console.log(": ", )
*/
