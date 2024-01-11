export interface FlowState{
    customer: string,
    confirmed: boolean,
    orders: {
        buttonVisible: boolean
        total: number
    }
}