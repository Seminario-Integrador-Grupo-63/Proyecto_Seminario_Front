import { categories } from "./CategoriesData"
import {dishes} from "./DishesData"

function delay(time = 2500) {
    return new Promise((resolve) => {
      setTimeout(resolve, time)
    })
}

const delayTime = 500

export async function setCustomer(customer){
    await delay(delayTime)
}

export async function getCategoriesRequest(){
    await delay(delayTime)
    return categories
}

export async function getCategoryRequest(id){
    await delay(delayTime)
    const index = categories.findIndex(category => category.id === id)
    return categories[index]
}

export async function getDishesByCategoryIdRequest(categoryId){
    await delay(delayTime)
    let dishesCategory = []
    dishes.forEach(dish => {
        if(dish.category === categoryId){
            dishesCategory.push(dish)
        }
    })
    return dishesCategory
}

export async function getOrdersRequest(){
    await delay(delayTime)
}

export async function getDishRequest(id){
    console.log(" ")
    console.log("requests getDishRequest(id)")
    console.log("id: ", id)
    console.log("dishes: ", dishes)
    await delay(delayTime)

    const index = dishes.findIndex(dish => {
        console.log("dish.id: ", dish.id)
        console.log("id: ", id)
        return dish.id == id
    })

    console.log("index: ", index)
    return dishes[index]
}

export async function getQRRequest(){
    await delay(delayTime)
}


/**
console.log(" ")
console.log("requests")
console.log(": ", )
*/
