import axios from "axios";
import * as https from 'https';
import { 
    buildDish,
    buildOrders
} from "./utils";

const url = "http://localhost:8000"

export async function getQR(){
    const response = await axios.get<any>(url + '/qrcode');
    return response;
}

export async function postCustomer(customer, tableCode){
    try{
        const response = await axios.post(url + `/table/${tableCode}/init?customer_name=${customer}`)
        return true
    } catch (error){
        return false
    }
}

export async function getCategories(){
    const headers = {'restaurant-id': 1}
    const response = await axios.get<any>(url + '/category/', {headers})
    return response.data
}

export async function getCategory(id){
    const headers = {'restaurant-id': 1}
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
    // const response = await axios.get<any>(url + '/order', { httpsAgent: new https.Agent({ rejectUnauthorized: false }) })
    // return response
    console.log(" ")
    console.log("getOrders(tableCode)")
    const response = await axios.get(url + `/table/${tableCode}/orders/`)
    console.log("response: ", response)
    return buildOrders(response)
}

export async function getDish(id){
    const responseDish = await axios.get<any>(url + `/dish/${id}`)
    const dish = buildDish(responseDish)
    return dish
}

export async function postOrderDetail(orderDetail, tableCode){
    console.log(' ')
    console.log('requests postOrderDetail(orderDetail, tableCode)')
    console.log('orderDetail: ', orderDetail)
    const response = await axios.post<any>(url + `/order/detail/${tableCode}`, orderDetail)
    console.log('response: ', response)
}

// ---------------------------------------------------------------------------------------------------
// export { getCategoriesRequest } from "@/Common/FakeData/FakeRequests";
// export { getCategoryRequest } from "@/Common/FakeData/FakeRequests";
// export { getDishesByCategoryIdRequest } from "@/Common/FakeData/FakeRequests";
// export { getOrdersRequest } from "@/Common/FakeData/FakeRequests";
// export { getDishRequest } from "@/Common/FakeData/FakeRequests";

/**
console.log(" ")
console.log("requests")
console.log(": ", )
*/
