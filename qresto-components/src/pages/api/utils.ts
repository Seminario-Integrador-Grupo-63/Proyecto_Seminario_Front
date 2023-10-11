export function buildDish(responseDish, responseCategory){
    const dish = {
        id: responseDish.data.dish.id,
        name: responseDish.data.dish.name,
        preparationTime: responseDish.data.dish.preparation_time,
        image: responseDish.data.dish.image,
        category: {
            id: responseCategory.data.id,
            name: responseCategory.data.name,
            image: responseCategory.data.image
        },
        price: parseFloat(responseDish.data.dish.price),
        sideDishes: []
    }

    responseDish.data.options.forEach(sideDish => {
        dish.sideDishes.push({
            id: sideDish.side_dish_id,
            name: sideDish.side_dish_name,
            description: sideDish.side_dish_description,
            extraPrice: parseFloat(sideDish.extra_price)
        })
    })
    return dish
}
