import axios from "axios";
import * as https from 'https';
import { 
    buildDish,
    buildTableGrid,
    buildMenu,
    buildSideDish,
    buildSimpleDish
} from "./utils";

const url = "http://localhost:8000"
const restaurantId = 1

export async function getQR(tableId){
    const response = await axios.get(url + `/table/${tableId}/qrcode`)
    return response.data
}

export async function postQR(tableId, uuidCode){
    try{
        await axios.post(url + `/table/${tableId}/qrcode?uuid_code=${uuidCode}`)
        return true
    } catch (error){
        return false
    }
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
    console.log(' ')
    console.log('requests getDishes()')
    const headers = {
        'restaurant-id': restaurantId
    }
    const response = await axios.get<any>(url + '/dish/', {headers})

    const data = buildSimpleDish(response.data)
    console.log("data: ", data)
    return data
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
    console.log(' ')
    console.log('requests postOrder(order, tableCode)')
    console.log('order: ', order)
    console.log('tableCode: ', tableCode)
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
    console.log(' ')
    console.log('requests postTable(table)')
    console.log('table: ', table)
    try{
        const response = await axios.post(url + `/table/`, table)
        console.log('response: ', response)
        return true
    } catch {
        return false
    }
}

export async function deleteDish(dishId: number) {
    console.log("requests deleteDish(dishId)")
    console.log("dishId: ", dishId)
    
    try {
        const response = await axios.delete<any>(`${url}/dish/${dishId}`);
        console.log("response: ", response) 
        return true;
    } catch (error) {
        console.error(`Error al eliminar plato con ID ${dishId}:`, error.response?.data || error.message);
        console.log('error.response: ', error.response)
        throw error;
    }
}

export async function updateDish(dishId: number, updatedDish: any) {
    try {
        const response = await axios.put(`${url}/dish/${dishId}`, updatedDish);
        return response.data;
    } catch (error) {
        console.error(`Error al actualizar plato con ID ${dishId}:`, error.response?.data || error.message);
        throw error;
    }
}

export async function updateDishInfo(dishId: number, updatedInfo: any) {
    try {
        const response = await axios.patch<any>(`${url}/dish/${dishId}`, updatedInfo);
        return response.data;
    } catch (error) {
        console.error(`Error al actualizar información del plato con ID ${dishId}:`, error.response?.data || error.message);
        throw error;
    }
}

export async function getSideDishes() {
    /**
    Guarniciones
    */
    console.log(' ')
    console.log('requests getSideDishes()')
    
    try {
        const headers = {
            'restaurant-id': restaurantId
        }
        const response = await axios.get(url + '/side-dish/', {headers});
        console.log('response: ', response)
        const data = buildSideDish(response.data)
        console.log('data: ', data)
        return data
    } catch (error) {
        throw error;
    }
}

export async function getSideDish(sideDishId) {
    try {
        const response = await axios.get(url + `/side-dish/${sideDishId}`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener información de guarnición:", error.response?.data || error.message);
        throw error;
    }
}

export async function deleteSideDish(sideDishId) {
    try {
        const response = await axios.delete(url + `/side-dish/${sideDishId}`);
        return true;
    } catch (error) {
        console.error("Error al eliminar guarnición:", error.response?.data || error.message);
        throw error;
    }
}

export async function updateSideDishInfo(sideDishId, updatedInfo) {
    try {
        const response = await axios.put(url + `/side-dish/${sideDishId}`, updatedInfo);
        return response.data;
    } catch (error) {
        console.error("Error al actualizar información de guarnición:", error.response?.data || error.message);
        throw error;
    }
}