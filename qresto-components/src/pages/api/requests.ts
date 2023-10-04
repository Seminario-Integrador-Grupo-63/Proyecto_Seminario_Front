import axios from "axios";
import * as https from 'https';

const url = "http://localhost:8000"

export async function getQRRequest(){
    const response = await axios.get<any>(url + '/qrcode');
    return response;
}

export async function getCategoriesRequest(){
    const headers = {'restaurant-id': 1}
    const response = await axios.get<any>(url + '/category/', {headers})
    return response.data
}

export async function getCategoryRequest(id){
    const headers = {'restaurant-id': 1}
    const response = await axios.get<any>(url + `/category/${id}`, {headers})
    return response.data
}

export async function getDishesByCategoryIdRequest(categoryId){
    const headers = {
        'category-id': categoryId
    }

    const response = await axios.get<any>(url + '/dish/', {headers})
    return response.data
}

export async function getOrdersRequest(){
    const response = await axios.get<any>(url + '/order', { httpsAgent: new https.Agent({ rejectUnauthorized: false }) })
    return response
}

/**
console.log(" ")
console.log("requests")
console.log(": ", )
*/
