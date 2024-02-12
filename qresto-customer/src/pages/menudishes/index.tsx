import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation';
import {useEffect, useState} from 'react'
import {MenuDishes} from '@/Customer/MenuDishes/MenuDishes'
import { 
    getCategory,
    getDishesByCategoryId 
} from '@/requests'
import { FlowState } from '@/Common/FlowState'
import {getCookie, hasCookie} from "cookies-next";

export default function MenuDishesPage() {
    const router = useRouter()
    const [dishes, setDishes] = useState([])
    const searchParams = useSearchParams()
    const [category, setCategory] = useState(null)
    const [categoryId, setCategoryId] = useState(null)
    const [customer, setCustomer] = useState('')
    const [customerName, setCustomerName] = useState('')
    const [tableCodeDef, setTableCodeDef] = useState('')

    useEffect(() => {
        if (!hasCookie("tableCode")) {
            router.push({pathname: '/'})
        } else if (!hasCookie("customerName")) {
            router.push({pathname: '/start'})
        } else {
            setCustomerName(getCookie("customerName"))
            setTableCodeDef(getCookie("tableCode"))
        }

    }, []);

    useEffect(() => {
        setCategoryId(searchParams.get('categoryId'))
        let customer = searchParams.get('customer')
        setCustomer(searchParams.get('customer'))
    }, [searchParams])

    useEffect(() => {
        if(categoryId != null){
            fetchDishes()
            fetchCategory()
        }
    }, [categoryId])

    const fetchCategory = async () => {
        const fetchedCategory = await getCategory(categoryId)
        setCategory(fetchedCategory)
    }

    const goBack = () => {
        router.replace({
            pathname: '/menucategories',
            query: {
                customer: customer
            }
        })
    }

    const goDishOrdering = (dish) => {
        router.replace({
            pathname: '/dishordering', 
            query: {
                dishId: dish.id,
                categoryId: categoryId,
                customer: customer
            }
        })
    }

    const fetchDishes = async () => {
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

