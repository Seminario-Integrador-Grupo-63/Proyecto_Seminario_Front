import { 
    orderDetails1,
    orderDetails2
} from "./OrderDetails"

export const orders = [
    {
        id: 1, 
        createAt: '06/08/2023', 
        table: 1, 
        total: 10000,
        orderDetails: orderDetails1 
    },
    {
        id: 2, 
        createAt: '06/08/2023', 
        table: 1, 
        total: 5000,
        orderDetails: orderDetails2 
    }
]