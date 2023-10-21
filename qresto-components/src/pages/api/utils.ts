export function buildDish(responseDish){
    // const dish = {
    //     ...responseDish.data.dish,
    //     sideDishes: responseDish.data.options
    // }

    const dish = {
        ...responseDish.data.dish,
        sideDishes: responseDish.data.options.map(sideDish => {
            return {
                id: sideDish.sideDishID,
                name: sideDish.sideDishName,
                description: sideDish.sideDishDescription,
                extraPrice: parseFloat(sideDish.extraPrice)
            }
        })
    }
    return dish
}

export function buildOrders(response){
    console.log(" ")
    console.log("buildOrders(response)")
    console.log("response: ", response)
    const orders = response.data.map(order => {
        return {
            id: order.id,
            confirmedCustomers: order.confirmedCustomera,
            totalCustomers: order.totalCustomers,
            createdAtDate: order.CreatedAtDate,
            createdAtTime: order.CreatedAtTime,
            state: order.state,
            total: order.total,
            customerOrderDetail: order.customerOrderDetail.map(customerOrderDetail => {
                return {
                    ...customerOrderDetail,
                    orderDetails: customerOrderDetail.orderDetails.map(orderDetail => {
                        return {
                            amount: orderDetail.ammount,
                            dish: orderDetail.dish,
                            observation: orderDetail.observation,
                            sideDish: orderDetail.sideDish,
                            subTotal: orderDetail.subTotal
                        }
                    })
                }
            })
        }
    })

    console.log("orders: ", orders)
    return orders
}
