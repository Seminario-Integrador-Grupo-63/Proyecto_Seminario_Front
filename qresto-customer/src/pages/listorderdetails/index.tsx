import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import { FlowState } from '@/Common/FlowState'
import { useSearchParams} from 'next/navigation'
import { ListOrderDetails } from '@/Customer/ListOrderDetails/ListOrderDetails';
import { 
    confirmOrder as confirmOrderRequest,
    deleteOrderDetail as deleteOrderDetailRequest,
    getOrders
} from '@/requests';
import { tableCode } from '@/Common/FakeData/Tables';

export default function ListOrderDetailsPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [order, setOrder] = useState(null)
    const [flowState, setFlowState] = useState<FlowState>({
        customer: '',
        confirmed: false,
        orders: {
            buttonVisible: false,
            total: 0
        }
    })

    useEffect(() => {
        setFlowState(JSON.parse(searchParams.get('flowState')))
        setOrder(JSON.parse(searchParams.get('order')))
    }, [searchParams])

    const goBack = () => {
        router.replace({
            pathname: '/listorders',
            query: {
                flowState: JSON.stringify(flowState),
            }
        })
    }

    const confirmOrder = async () => {
        await confirmOrderRequest(flowState.customer, tableCode)
        flowState.confirmed = true
        router.replace({
            pathname: '/listorders',
            query: {
                flowState: JSON.stringify({
                    customer: flowState.customer,
                    confirmed: flowState.confirmed,
                    orders: {
                        buttonVisible: flowState.orders.buttonVisible,
                        total: flowState.orders.total
                    }
                }),
            }
        })
    }

    const requestBill = () => {
        router.replace({
            pathname: '/billcheckout',
            query: {
                flowState: JSON.stringify({
                    customer: flowState.customer,
                    confirmed: flowState.confirmed,
                    orders: {
                        buttonVisible: flowState.orders.buttonVisible,
                        total: flowState.orders.total
                    }
                }),
            }
        })
    }

    const deleteOrderDetail = async (orderDetail) => {
        await deleteOrderDetailRequest(tableCode, orderDetail)
        flowState.confirmed = false
        router.replace({
            pathname: '/listorders',
            query: {
                flowState: JSON.stringify({
                    customer: flowState.customer,
                    confirmed: flowState.confirmed,
                    orders: {
                        buttonVisible: flowState.orders.buttonVisible,
                        total: flowState.orders.total
                    }
                }),
            }
        })
    }

    return (<>
        <ListOrderDetails 
            customer={flowState.customer}
            confirmed={flowState.confirmed}
            onConfirmOrder={confirmOrder}
            onDeleteOrderDetail={deleteOrderDetail}
            onRequestBill={requestBill}
            onGoBack={goBack}
            order={order}/>
    </>)
}

