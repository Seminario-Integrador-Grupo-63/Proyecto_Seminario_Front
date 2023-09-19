import { dishes } from "./DishesData"
import { sideDishes } from "./SideDishesData"

export const orderDetails1 = [
    {
        id: 1,
        dish: dishes[0],
        sideDish: sideDishes[0],
        customer: 'Martín',
        subtotal: dishes[0].price + sideDishes[0].extraPrice
    },
    {
        id: 2,
        dish: dishes[1],
        sideDish: sideDishes[1],
        customer: 'Martín',
        subtotal: dishes[1].price + sideDishes[1].extraPrice
    },
    {
        id: 3,
        dish: dishes[2],
        sideDish: null,
        customer: 'Pedro',
        subtotal: dishes[2].price
    }
    
]

export const orderDetails2 = [
    {
        id: 4,
        dish: dishes[2],
        sideDish: sideDishes[2],
        customer: 'Tito',
        subtotal: dishes[2].price + sideDishes[2].extraPrice
    },
    {
        id: 5,
        dish: dishes[1],
        sideDish: sideDishes[2],
        customer: 'Raul',
        subtotal: dishes[1].price + sideDishes[2].extraPrice
    },
]