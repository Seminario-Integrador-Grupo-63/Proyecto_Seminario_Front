
import { ordersDTO } from "./OrdersData"

class FakeBackend{
    private delayTime: number = 500
    private orders: Array<any> = []
    private table: any = {
        customer: ''
    }
    constructor(){}

    private async delay(time) {
        return new Promise((resolve) => {
            setTimeout(resolve, time)
        })
    }
    
    public async postOrderDetail(orderDetail, tableCode){
        await this.delay(this.delayTime)
        const lastId = this.getOrderLastId() 
        const order = {
            id: lastId,
            orderDetails: [orderDetail]
        }
    }

    private getOrderLastId(){
        const ids = []
        this.orders.forEach(order => {
            ids.push(order.id)
        })

        return this.calculateMaxId(ids)
    }

    private calculateMaxId(ids){
        let lastId = 0
        if(ids.length > 0){
            lastId = Math.max(...ids)
        }
        return lastId
    }

    public getOrders(tableCode){
        this.delay(this.delayTime)
        return ordersDTO
    }

    public postCustomer(customer, tableCode){
        this.table.customer = customer
        return true
    }

}

export default FakeBackend