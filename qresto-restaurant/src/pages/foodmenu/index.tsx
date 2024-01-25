import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import { FoodMenu } from '@/Restaurant/FoodMenu/FoodMenu'
import { getDishes } from '@/requests'

export default function QRGeneratorPage() {
    const [dishes, setDishes] = useState([])

    useEffect(() => {
        fetchDishes()
    }, [])

    const fetchDishes = async () => {
        const result = await getDishes()
        setDishes(result)
    }

    return (<>
        <FoodMenu dishes={dishes}/>
    </>)
}
