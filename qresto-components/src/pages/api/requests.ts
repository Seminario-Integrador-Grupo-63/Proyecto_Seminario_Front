import axios from "axios";
import * as https from 'https';
import { 
    buildDish
} from "./utils";

const url = "http://localhost:8000"
const restaurantId = 1

export async function getQR(tableId){
    const response = await axios.get(url + `/table/${tableId}/qrcode`)
    return response.data
}

export async function postCustomer(customer, tableCode){
    try{
        await axios.post(url + `/table/${tableCode}/init?customer_name=${customer}`)
        return true
    } catch (error){
        return false
    }
}

export async function getCategories(){
    const headers = {'restaurant-id': restaurantId}
    const response = await axios.get<any>(url + '/category/', {headers})
    return response.data
}

export async function getCategory(id){
    const headers = {'restaurant-id': restaurantId}
    const response = await axios.get<any>(url + `/category/${id}`, {headers})
    return response.data
}

export async function getDishesByCategoryId(categoryId){
    const headers = {
        'category-id': categoryId
    }
    const response = await axios.get<any>(url + '/dish/', {headers})
    return response.data
}

export async function getOrders(tableCode){
    const response = await axios.get(url + `/table/${tableCode}/orders/`)
    return response.data
}

export async function getDish(id){
    const responseDish = await axios.get<any>(url + `/dish/${id}`)
    const dish = buildDish(responseDish)
    return dish
}

export async function getDishes(restaurantId){
    const headers = {
        'restaurant-id': 1
    }
    const response = await axios.get<any>(url + '/dish/', {headers})
    return response.data
}

export async function postOrderDetail(orderDetail, tableCode){
    const response = await axios.post<any>(url + `/order/detail/${tableCode}`, orderDetail)
}

export async function confirmOrder(customer, tableCode){
    const response = await axios.post<any>(url + `/order/${tableCode}?customer_name=${customer}`)
}

export async function getTablesGrid(){
    console.log(' ')
    console.log('requests getTablesGrid()')
    
    const headers = {
        'restaurant-id': 1
    }
    const response = await axios.get<any>(url + '/table/grid', {headers})
    console.log('response: ', response)
    return response.data
}

export async function getTable(id){
    console.log(' ')
    console.log('requests getTable(id)')
    console.log('id: ', id)
    try{
        const response = await axios.get(url + `/table/${id}`)
        console.log('response: ', response)
        return response.data
    }catch {
        return false
    }
}

export async function getBill(tableCode){
    const response = await axios.get<any>(url + `/table/${tableCode}/bill`)
    return response.data
}

export async function deleteOrderDetail(tableCode, orderDetail){
    const response = await axios.delete<any>(url + `/order/detail/${tableCode}`, {data: orderDetail})
}

export async function updateDishPrice(restaurantId, dishId, percentage) {
    const response = await axios.put(url + '/dish/update_prices', )
}

export async function putDishes(restaurantId) {
    const response = await axios.put(url + '/dish/', )
}

export async function postDishes(restaurantId) {
    const response = await axios.post(url + '/dish/', )
}

export async function deleteDishes(restaurantId) {
    const response = await axios.delete(url + '/dish/', )
}

export async function cancelOrder(orderId){
    console.log(' ')
    console.log('requests cancelOrder(orderId)')
    console.log('orderId: ', orderId)
    try{
        const response = await axios.post(url + `/ordercancelled/${orderId}`)
        return true
    } catch {
        return false
    }
}