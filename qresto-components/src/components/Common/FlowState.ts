export interface FlowState{
    customer: string,
    orders: {
        buttonVisible: boolean
        total: number
    }
}