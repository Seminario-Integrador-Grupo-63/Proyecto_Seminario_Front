import axios from "axios";
import * as https from 'https';
import {
    buildDish,
    buildTableGrid,
    buildMenu,
    buildSideDish,
    buildSimpleDish, getCookieRId
} from "./utils";
import {getCookie} from "cookies-next";

const url = "http://localhost:8000"
//const url = "http://192.168.120.36:8000"
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
    // Create header
    const headers = {'restaurant-id': getCookieRId()}
    // Hit the endpoint
    const response = await axios.get<any>(url + '/category/', {headers})
    // Return the data
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

export async function deleteOrderDetail(tableCode, orderDetail){
    const response = await axios.delete<any>(url + `/order/detail/${tableCode}`, {data: orderDetail})
}

export async function cancelOrder(orderId){
    try{
        const response = await axios.post(url + `/order/cancelled/${orderId}`)
        return true
    } catch {
        return false
    }
}

export async function confirmOrder(customer, tableCode){
    try{
        await axios.post<any>(url + `/order/${tableCode}?customer_name=${customer}`)
        return true
    }catch (error){
        return false
    }
}

export async function postOrderPreparation(orderId){
    try{
        await axios.post(url + `/order/preparation/${orderId}`)
        return true
    }catch(error) {
        return false
    }
}

export async function postOrderDelivered(orderId){
    try{
        await axios.post(url + `/order/deliverd/${orderId}`)
        return true
    }catch(error) {
        return false
    }
}

export async function postOrderClosed(tableCode){
    try{
        await axios.post(url + `/table/${tableCode}/bill`)
        return true
    }catch (error){
        return false
    }
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

export async function getTablesGrid(){
    console.log(' ')
    console.log('requests getTablesGrid()')

    try{
        const headers = {
            'restaurant-id': 1
        }
        const response = await axios.get<any>(url + '/table/grid', {headers})
        const data = buildTableGrid(response.data)
        console.log('data: ', data)
        return data
    } catch(error) {
        return []
    }
}

export async function getTable(id){
    try{
        const response = await axios.get(url + `/table/${id}`)
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
        return response.data
    } catch(error) {
        return []
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

export async function putTable(table){
    try{
        const response = await axios.put(url + `/table/`, table)
        return true
    } catch {
        return false
    }
}

export async function deleteTable(tableId){
    try{
        const response = await axios.delete(url + `/table/${tableId}`)
        return true
    } catch {
        return false
    }
}


export async function getBill(tableCode){
    try{
        const response = await axios.get(url + `/table/${tableCode}/bill`)
        return response.data
    } catch(error) {
        return false
    }

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
        console.log(response)
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
    const headers = {
        'restaurant-id': restaurantId
    }
    try {
        const response = await axios.post(url + '/security/signup', user, {headers})
        return response.data
    } catch (error) {
        return null
    }
}

export async function getUpdatedPrices(body:any) {
    const headers = {'restaurant-id': getCookieRId()}

/*    if (t == true) {
        const body = {
            "percentage": data[0],
            "categoryId": data[1],
            "action": data[2]
        }
    } else {
        const body = {
            "percentage": data[0],
            "action": data[1]
        }

    }*/

    try {
        const response = await axios.post(url + '/dish/update_prices', body, {headers})
        return response.data
    } catch (error) {
        return []
    }
}
export async function confirmUpdatePrices(uuid:string) {
    try {
        const response = await axios.get(url + `/dish/update_prices/${uuid}`)
        return response.data
    } catch (error) {
        return []
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

export async function postSector(sector){
    console.log(' ')
    console.log('requests postSector(sector)')
    console.log('sector: ', sector)
    try{
        const response = await axios.post(url + '/table/sector', sector)
        return true
    }catch(error){
        return false
    }
}

export async function putSector(sector){
    try{
        const response = await axios.put(url + '/table/sector', sector)
        return true
    }catch(error){
        return false
    }
}

export async function deleteSector(sectorId){
    try{
        const response = await axios.delete(url + `/table/sector/${sectorId}`)
        return true
    }catch(error){
        return false
    }
}

export async function deleteCategory(categoryId: number) {
    try {
        const response = await axios.delete(url + `/category/${categoryId}`);
        return true;
    } catch (error) {
        console.error("Error al eliminar categoria:", error.response?.data || error.message);
        throw error;
    }
}

export async function updateCategory(updatedCategory: any) {
    try {
        const body = {
            "id": updatedCategory.id,
            "name": updatedCategory.name,
            "image": updatedCategory.image,
            "restaurant": restaurantId
          }
        const response = await axios.put(url + '/category/', body);
        return response.data;
    } catch (error) {
        console.error(`Error al actualizar categoria con ID ${updatedCategory.id}:`, error.response?.data || error.message);
        throw error;
    }
}

export async function createCategory(newCategory: any) {
    try {
        const body = {
            "name": newCategory.name,
            "image": newCategory.image,
            "restaurant": restaurantId
            }
        const response = await axios.post(url + '/category/', body);
        return response.data;
    } catch (error) {
        console.error(`Error al crear la nueva categoria:`, error.response?.data || error.message);
        throw error;
    }
}