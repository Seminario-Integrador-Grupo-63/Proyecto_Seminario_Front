export function buildDish(responseDish){
    const dish = {
        ...responseDish.data.dish,
        sideDishes: responseDish.data.options
    }

    return dish
}
