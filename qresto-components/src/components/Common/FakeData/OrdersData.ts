import { 
    orderDetails1,
    orderDetails2
} from "./OrderDetails"
import { imageDish1 } from "./DefaultImagesDishes/imageDish1"

// export const orders = [
//     {
//         id: 1, 
//         createAt: '06/08/2023', 
//         createAtTime: '21:08', 
//         table: 1, 
//         total: 10000,
//         numCustomers: 2,
//         confirmedCustomers: 1,
//         state: 'Armando orden',
//         orderDetails: orderDetails1 
//     },
//     {
//         id: 2, 
//         createAt: '06/08/2023', 
//         createAtTime: '22:40',
//         table: 1, 
//         numCustomers: 2,
//         confirmedCustomers: 1,
//         state: 'Armando orden',
//         total: 5000,
//         orderDetails: orderDetails2 
//     }
// ]

export const ordersDTO = [
    {
        id: 1,
        confirmedCustomers: 1,
        totalCustomers: 1,
        createdAtDate: "19/10/2023",
        createdAtTime: "20:56:03",
        state: "processing",
        total: 5044,
        customerOrderDetails: [
            {
                customer: "Daniela",
                orderDetails: [
                    {
                        amount: 3,
                        dish: {
                            image:imageDish1,
                            id: 40,
                            category: 1,
                            restaurant: 1,
                            name: "Fernandito",
                            description: "Wea re refrescante",
                            preparationTime: 2,
                            price: 1744
                        },
                        observation: "",
                        sideDish: {
                            image: null,
                            id: 6,
                            extraPrice: 500,
                            restaurant: 1,
                            name: "Ensalada rusa",
                            description: "Wea para acompañar"
                        },
                        subTotal: 1235
                    }
                ],
                customerTotal: 7895
            },
            {
                customer: "Victor",
                orderDetails: [
                    {
                        amount: 1,
                        dish: {
                            image:imageDish1,
                            id: 41,
                            category: 1,
                            restaurant: 1,
                            name: "Sopa",
                            description: "Arbejas y fideos",
                            preparationTime: 30,
                            price: 2300
                        },
                        observation: "Sin cebolla",
                        sideDish: {
                            image: null,
                            id: 7,
                            extraPrice: 500,
                            restaurant: 1,
                            name: "Papas fritas",
                            description: "Con aderezo"
                        },
                        subTotal: 2800
                    }
                ],
                customerTotal: 2800
            }
        ]
    },
    {
        id: null,
        confirmedCustomers: 1,
        totalCustomers: 1,
        createdAtDate: "19/10/2023",
        createdAtTime: "20:56:19",
        state: "waiting",
        total: 1186,
        customerOrderDetails: [
            {
                customer: "Benito",
                orderDetails: [
                    {
                        amount: 1,
                        dish: {
                            image: imageDish1,
                            id: 17,
                            category: 2,
                            restaurant: 1,
                            name: "Sanguche de milanesa",
                            description: "Wea re grasosa",
                            preparationTime: 10,
                            price: 1186
                        },
                        observation: "ffhggh",
                        sideDish: {
                            image: null,
                            id: 18,
                            restaurant: 1,
                            name: "Ensalada rusa",
                            description: "Wea para acompañar"
                        },
                        subTotal: 1186
                    }
                ],
                customerTotal: 1186
            }
        ]
    },
    {
        id: null,
        confirmedCustomers: 1,
        totalCustomers: 1,
        createdAtDate: "19/10/2023",
        createdAtTime: "20:56:19",
        state: "preparation",
        total: 1186,
        customerOrderDetails: [
            {
                customer: "Martin",
                orderDetails: [
                    {
                        amount: 1,
                        dish: {
                            image: imageDish1,
                            id: 17,
                            category: 2,
                            restaurant: 1,
                            name: "Sanguche de milanesa",
                            description: "Wea re grasosa",
                            preparationTime: 10,
                            price: 1186
                        },
                        observation: "ffhggh",
                        sideDish: {
                            image: null,
                            id: 18,
                            restaurant: 1,
                            name: "Ensalada rusa",
                            description: "Wea para acompañar"
                        },
                        subTotal: 1186
                    }
                ],
                customerTotal: 1186
            }
        ]
    },
    {
        id: null,
        confirmedCustomers: 1,
        totalCustomers: 1,
        createdAtDate: "19/10/2023",
        createdAtTime: "20:56:19",
        state: "delivered",
        total: 1186,
        customerOrderDetails: [
            {
                customer: "Benito",
                orderDetails: [
                    {
                        amount: 1,
                        dish: {
                            image: imageDish1,
                            id: 17,
                            category: 2,
                            restaurant: 1,
                            name: "Sanguche de milanesa",
                            description: "Wea re grasosa",
                            preparationTime: 10,
                            price: 1186
                        },
                        observation: "ffhggh",
                        sideDish: {
                            image: null,
                            id: 18,
                            restaurant: 1,
                            name: "Ensalada rusa",
                            description: "Wea para acompañar"
                        },
                        subTotal: 1186
                    }
                ],
                customerTotal: 1186
            }
        ]
    }
]
