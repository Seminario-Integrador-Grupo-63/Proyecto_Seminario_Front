import {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import { useSearchParams} from 'next/navigation'
import {MenuCategories} from '@/Customer/MenuCategories/MenuCategories'
import {getCategoriesRequest} from '@/requests'

export default function MenuCategoriesPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [customer, setCustomer] = useState('')
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        setCustomer(searchParams.get('customer'))
    }, [searchParams])

    const fetchData = async () => {
        const response = await getCategoriesRequest()
        setCategories(response)
    }

    const onClickCategory = (category) => {
        router.replace({
            pathname: '/menudishes', 
            query: {
                customer: customer,
                category: JSON.stringify(category)
            }
        })
    }

    return (<>
        <MenuCategories 
            categories={categories}
            onClickCategory={onClickCategory}/>
    </>)
}
/**
console.log(" ")
console.log("MenuCategoriesPage")
console.log(": ", )
*/
