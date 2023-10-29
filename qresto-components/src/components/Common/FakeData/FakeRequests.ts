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

export async function postCustomer(customer, tableCode){
    await delay(delayTime)
    return await fakeBackend.postCustomer(customer, tableCode)
}

export async function getCategories(){
    await delay(delayTime)
    return categories
}

export async function getCategory(id){
    await delay(delayTime)
    const index = categories.findIndex(category => category.id === id)
    return categories[index]
}

export async function getDishesByCategoryId(categoryId){
    await delay(delayTime)
    let dishesCategory = []
    dishes.forEach(dish => {
        if(dish.category === categoryId){
            dishesCategory.push(dish)
        }
    })
    return dishesCategory
}

export async function getOrders(tableCode){
    return await fakeBackend.getOrders(tableCode)
}

export async function getDish(id){
    await delay(delayTime)

    const index = dishes.findIndex(dish => {
        return dish.id == id
    })

    return dishes[index]
}

export async function postOrderDetail(orderDetail, tableCode){
    await delay(delayTime)
    await fakeBackend.postOrderDetail(orderDetail, tableCode)
}

export async function getQRRequest(){
    await delay(delayTime)
}
