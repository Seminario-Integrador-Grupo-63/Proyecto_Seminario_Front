export function buildDish(data){
    const dish = {
        ...data.data.dish,
        sideDishes: data.data.options
    }
    return dish
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
