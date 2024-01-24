import { imageDish1 } from "./DefaultImagesDishes/imageDish1"

export const ordersDTO = [
    {
        id: null,
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
        id: 1,
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
        id: 2,
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
        id: 3,
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

export const allOrdersDTO = [
    {
        "id": 1,
        "total": 54000,
        "state": "delivered",
        "table": 10,
        "createdAt": "2024-01-20T19:45:52.873294",
        "restaurant": 1
    },
    {
        "id": 2,
        "total": 25000,
        "state": "preparation",
        "table": 1,
        "createdAt": "2024-01-20T19:45:52.939732",
        "restaurant": 1
    },
    {
        "id": 3,
        "total": 22500,
        "state": "preparation",
        "table": 13,
        "createdAt": "2024-01-20T19:45:52.978951",
        "restaurant": 1
    },
    {
        "id": 4,
        "total": 14000,
        "state": "preparation",
        "table": 14,
        "createdAt": "2024-01-20T19:45:53.022428",
        "restaurant": 1
    },
    {
        "id": 5,
        "total": 12500,
        "state": "preparation",
        "table": 4,
        "createdAt": "2024-01-20T19:45:53.075587",
        "restaurant": 1
    },
    {
        "id": 6,
        "total": 40500,
        "state": "preparation",
        "table": 15,
        "createdAt": "2024-01-20T19:45:53.115567",
        "restaurant": 1
    },
    {
        "id": 7,
        "total": 24700,
        "state": "delivered",
        "table": 3,
        "createdAt": "2024-01-20T19:45:53.206725",
        "restaurant": 1
    },
    {
        "id": 8,
        "total": 46000,
        "state": "delivered",
        "table": 11,
        "createdAt": "2024-01-20T19:45:53.291926",
        "restaurant": 1
    },
    {
        "id": 9,
        "total": 27000,
        "state": "delivered",
        "table": 30,
        "createdAt": "2024-01-20T19:45:53.522124",
        "restaurant": 1
    },
    {
        "id": 10,
        "total": 17500,
        "state": "preparation",
        "table": 31,
        "createdAt": "2024-01-20T19:45:53.560644",
        "restaurant": 1
    },
    {
        "id": 11,
        "total": 47500,
        "state": "delivered",
        "table": 17,
        "createdAt": "2024-01-20T19:45:53.591483",
        "restaurant": 1
    },
    {
        "id": 12,
        "total": 23500,
        "state": "waiting",
        "table": 22,
        "createdAt": "2024-01-20T19:45:53.634982",
        "restaurant": 1
    },
    {
        "id": 13,
        "total": 24000,
        "state": "waiting",
        "table": 21,
        "createdAt": "2024-01-20T19:45:53.671536",
        "restaurant": 1
    },
    {
        "id": 14,
        "total": 21500,
        "state": "delivered",
        "table": 20,
        "createdAt": "2024-01-20T19:45:53.727034",
        "restaurant": 1
    },
    {
        "id": 15,
        "total": 25000,
        "state": "delivered",
        "table": 25,
        "createdAt": "2024-01-20T19:45:53.757641",
        "restaurant": 1
    },
    {
        "id": 16,
        "total": 15500,
        "state": "delivered",
        "table": 26,
        "createdAt": "2024-01-20T19:45:53.807911",
        "restaurant": 1
    },
    {
        "id": 17,
        "total": 27500,
        "state": "preparation",
        "table": 42,
        "createdAt": "2024-01-20T19:45:53.975814",
        "restaurant": 1
    },
    {
        "id": 18,
        "total": 49500,
        "state": "delivered",
        "table": 46,
        "createdAt": "2024-01-20T19:45:54.017713",
        "restaurant": 1
    },
    {
        "id": 19,
        "total": 30000,
        "state": "preparation",
        "table": 45,
        "createdAt": "2024-01-20T19:45:54.069256",
        "restaurant": 1
    },
    {
        "id": 20,
        "total": 12600,
        "state": "preparation",
        "table": 41,
        "createdAt": "2024-01-20T19:45:54.117031",
        "restaurant": 1
    },
    {
        "id": 21,
        "total": 20000,
        "state": "delivered",
        "table": 36,
        "createdAt": "2024-01-20T19:45:54.153674",
        "restaurant": 1
    },
    {
        "id": 22,
        "total": 30000,
        "state": "preparation",
        "table": 38,
        "createdAt": "2024-01-20T19:45:54.180484",
        "restaurant": 1
    },
]