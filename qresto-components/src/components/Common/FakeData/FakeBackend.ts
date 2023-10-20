
class FakeBackend{
    private delayTime: number = 500
    private orders: Array<any> = []
    constructor(){}

    private async delay(time) {
        return new Promise((resolve) => {
            setTimeout(resolve, time)
        })
    }
    
    public async sendOrderDetail(orderDetail){
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
}

export default FakeBackend