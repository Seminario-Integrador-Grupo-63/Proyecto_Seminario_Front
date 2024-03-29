import {getCookie} from "cookies-next";


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
        s.tables.sort((a, b) => a.number - b.number);
        return {
            id: s.sector.id,
            isActive: s.sector.is_active,
            name: s.sector.name,
            restaurant: s.sector.restaurant,
            tables: s.tables.map(table => {
                return {
                    id: table.id,
                    tableCode: table.tableCode,
                    restaurant: table.restaurant,
                    sector: table.sector,
                    state: table.state,
                    number: table.number,
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
                    description: dishObj.dish.description,
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

export function getCookieRId() {
    // On exec get restaurantId from Cookies
    const ridCookie = getCookie("restaurantId")
    // Convert string to number and return
    return +ridCookie
}

