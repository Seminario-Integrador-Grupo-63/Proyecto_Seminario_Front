import { categories } from "./CategoriesData"
import {dishes} from "./DishesData"
import FakeBackend from './FakeBackend'
function delay(time = 2500) {
    return new Promise((resolve) => {
      setTimeout(resolve, time)
    })
}

const delayTime = 500
const fakeBackend = new FakeBackend()

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
    await delay(delayTime)

    const index = dishes.findIndex(dish => {
        return dish.id == id
    })

    return dishes[index]
}

export async function sendOrderDetailRequest(orderDetail){
    await delay(delayTime)


}


export async function getQRRequest(){
    await delay(delayTime)
}



/**
console.log(" ")
console.log("requests")
console.log(": ", )
*/
