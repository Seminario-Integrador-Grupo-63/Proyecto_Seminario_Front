import { Dishes } from "@/components/Restaurant/FoodMenu/Dishes/Dishes"
import { getDishes,  } from "../api/requests"
import { useEffect, useState } from "react"


export default function Idishes() {
    const [dishes, setDishes] = useState([])
    
    useEffect(() =>{
        fetchDishes()
    },[])

    const fetchDishes = async () => {
        const result = await getDishes(1) // deberia ser cualquiera?
        setDishes(result)       
   }
   
   return (<>
       <Dishes onDish={Idishes}/>
   </>)
}