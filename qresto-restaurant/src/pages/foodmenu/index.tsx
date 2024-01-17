import { useRouter } from 'next/router'
import {useEffect} from 'react'
import { FoodMenu } from '@/Restaurant/FoodMenu/FoodMenu'
// import {updateDishPrice} from "@/requests";

export default function QRGeneratorPage() {


    function onPriceUpdate() {
    }
    return (<>
        <FoodMenu/>
    </>)
}
