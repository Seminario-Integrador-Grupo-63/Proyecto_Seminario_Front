import { 
    orderDetails1,
    orderDetails2
} from "./OrderDetails"

export const orders = [
    {
        id: 1, 
        createAt: '06/08/2023', 
        createAtTime: '21:08', 
        table: 1, 
        total: 10000,
        numCustomers: 2,
        confirmedCustomers: 1,
        state: 'Armando orden',
        orderDetails: orderDetails1 
    },
    {
        id: 2, 
        createAt: '06/08/2023', 
        createAtTime: '22:40',
        table: 1, 
        numCustomers: 2,
        confirmedCustomers: 1,
        state: 'Armando orden',
        total: 5000,
        orderDetails: orderDetails2 
    }
]