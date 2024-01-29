import axios from "axios";
import * as https from 'https';
import { 
    buildDish,
    buildTableGrid,
    buildMenu
} from "./utils";
import {headers} from "next/headers";
import * as objectorarray from "objectorarray";

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

export async function getDishes(){
    const headers = {
        'restaurant-id': restaurantId
    }
    const response = await axios.get<any>(url + '/dish/', {headers})
    return response.data
}

export async function getMenu(){
    console.log(' ')
    console.log('requests getMenu()')
    
    const headers = {
        'restaurant-id': restaurantId
    }
    const response = await axios.get<any>(url + '/category/menu', {headers})
    const data = buildMenu(response.data)
    console.log('data: ', data)
    return data
}

export async function postOrderDetail(orderDetail, tableCode){
    const response = await axios.post<any>(url + `/order/detail/${tableCode}`, orderDetail)
}

export async function postOrder(order, tableCode){
    try{
        const response = await axios.post(url + `/order/creation/${tableCode}`, order)
        return true
    } catch(error){
        return false
    }
}

export async function confirmOrder(customer, tableCode){
    const response = await axios.post<any>(url + `/order/${tableCode}?customer_name=${customer}`)
}

export async function getTablesGrid(){
    console.log(' ')
    console.log('requests getTablesGrid()')

    try{
        const headers = {
            'restaurant-id': 1
        }
        const response = await axios.get<any>(url + '/table/grid', {headers})
        console.log('response: ', response)
        const data = buildTableGrid(response.data)
        console.log('data: ', data)
        return data
    } catch(error) {
        return []
    }
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

export async function getSectors(restaurantId){
    try{
        const headers = {
            'restaurant-id': restaurantId
        }
        const response = await axios.get<any>(url + '/table/sector', {headers})
        console.log('response: ', response)
        // console.log('data: ', data)
        return response.data
    } catch(error) {
        return []
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
export async function loginRestaurant(user):Promise<Array<any>> {
    try{
        const response = await axios.post<any>(url + `/security/login`, user)
        // Guardar user data
        console.log(user)
        return response.data

    } catch (error){
        return []
    }
}

export async function getUsers(restaurantId) {
    const headers = {
        'restaurant-id': restaurantId
    }
    try {
        const response = await axios.get(url + '/security/employees', {headers})
        return response.data
    } catch (error) {
        return []
    }
}
export async function updateUser(user) {
    try {
        const response = await axios.put(url + '/security/employees', user)
        return response.data
    } catch (error) {
        return []
    }
}
export async function deleteUser(userId):Promise<boolean> {
    try {
        const response = await axios.delete(url + `/security/employees/${userId}`)
        return true
    } catch (error) {
        return false
    }
}
export async function createUser(user, restaurantId) {
    const data = {restaurant: restaurantId,user:user}
    try {
        const response = await axios.post(url + '/security/singup', data,
            {headers: {restaurantId: restaurantId}})
        return response.data
    } catch (error) {
        return null
    }
}

export async function getUpdatedPrices(updateId) {
    try {
        const response = await axios.get(url + '/')
        return response.data
    } catch (error) {
        return []
    }
}
export async function confirmUpdatePrices(req) {
    try {
        const response = await axios.get(url + '/')
        return response.data
    } catch (error) {
        return false
    }
}

export async function cancelOrder(orderId){
    console.log(' ')
    console.log('requests cancelOrder(orderId)')
    console.log('orderId: ', orderId)
    try{
        const response = await axios.post(url + `/order/cancelled/${orderId}`)
        return true
    } catch {
        return false
    }
}

export async function postTable(table){
    try{
        const response = await axios.post(url + `/table/`, table)
        return true
    } catch {
        return false
    }
}