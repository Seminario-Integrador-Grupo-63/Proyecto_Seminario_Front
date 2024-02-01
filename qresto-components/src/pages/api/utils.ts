import {router} from "next/client";


export function buildDish(data){
    const dish = {
        ...data.data.dish,
        sideDishes: data.data.options
    }
    return dish
}

export function buildSimpleDish(data){
    const dishes = data.map(dish => {
        return {
            id: dish.id,
            name: dish.name,
            description: dish.description,
            isActive: dish.is_active,
            preparationTime: dish.preparationTime,
            price: dish.price,
            restaurant: dish.restaurant,
            category: dish.category,
            image: dish.image,
        }
    })
    return dishes
}

export function buildTableGrid(data){
    const sectors = data.map(s => {
        return {
            id: s.sector.id,
            isActive: s.sector.is_active,
            name: s.sector.name,
            restaurant: s.sector.restaurant,
            tables: s.tables.map(table => {
                return {
                    ...table,
                    isActive: table.is_active
                }
            })
        }
    })
    return sectors
}

export function buildMenu(data){
    const menu = data.map(categoryObj => {
        return {
            id: categoryObj.category.id,
            name: categoryObj.category.name,
            image: categoryObj.category.image,
            isActive: categoryObj.category.is_active,
            restaurant: categoryObj.category.restaurant,
            dishes: categoryObj.dishes.map(dishObj => {
                return {
                    id: dishObj.dish.id,
                    name: dishObj.dish.name,
                    image: dishObj.dish.image,
                    isActive: dishObj.dish.is_active,
                    preparationTime: dishObj.dish.preparationTime,
                    price: dishObj.dish.price,
                    sideDishes: dishObj.options.map(sideDishObj => {
                        return sideDishObj
                    })
                }
            })
        }
    })
    return menu
}

export function buildSideDish(data){
    const sideDishes = data.map(sideDish => {
        return {
            id: sideDish.id,
            name: sideDish.name,
            description: sideDish.description,
            isActive: sideDish.is_active,
            restaurant: sideDish.restaurant
        }
    })
    return sideDishes
}
/*
/!*
 * General utils for managing cookies in Typescript.
 *!/
export function setCookie(name: string, val: string) {
    const date = new Date();
    const value = val;

    // Set it expire in 7 days
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));

    // Set it
    document.cookie = name+"="+value+"; expires="+date.toUTCString()+"; path=/";
}

export function getCookie(name: string) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");

    if (parts.length == 2) {
        return parts.pop().split(";").shift();
    }
}

export function deleteCookie(name: string) {
    const date = new Date();

    // Set it expire in -1 days
    date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));

    // Set it
    document.cookie = name+"=; expires="+date.toUTCString()+"; path=/";
}*/

// Set cookie
/*
export const setCookie = (key:string, value:string) => {
    cookies().set(key, value, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
    })
};
// Get cookie
export const getCookie = (name:string) => {
    return cookies().get(name)
}

// Delete cookie
export const deleteCookie = (name:string) => {
    cookies().delete(name)
};
*/

