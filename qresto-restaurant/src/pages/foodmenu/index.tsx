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
        console.log(' ')
        console.log('index fetchDishes')
        
        const result = await getDishes(1)
        console.log('result: ', result)
        setDishes(result)
    }

    return (<>
        <FoodMenu dishes={dishes}/>
    </>)
}
