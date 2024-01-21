import { Dishes } from "@/components/Restaurant/FoodMenu/Dishes/Dishes"
import { deleteDishes, getDishes, postDishes, putDishes, } from "../api/requests"
import { useEffect, useState } from "react"
import { tableBodyClasses } from "@mui/material"
import { DishCard } from "@/components/Restaurant/FoodMenu/Dishes/DishCard/DishCard"


export default function IdishesCard() {

    const editDish =async (dish) => {
    await putDishes(dish) } // o put
    //const totalDishes =  await getDishes(tableCode)
    const deleteDish =async (dish) => {
        await deleteDishes(dish)  }

   return (<>
       <DishCard onEdit={editDish}
       onDelete={deleteDish}/>
   </>)
}
