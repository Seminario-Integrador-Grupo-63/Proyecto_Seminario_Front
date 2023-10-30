import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import { FlowState } from '@/Common/FlowState'
import { useSearchParams} from 'next/navigation'
import { ListOrderDetails } from '@/Customer/ListOrderDetails/ListOrderDetails';
import { 
    confirmOrder as confirmOrderRequest,
    deleteOrderDetail as deleteOrderDetailRequest
    // getOrders
} from '@/requests';
import { tableCode } from '@/Common/FakeData/Tables';

export default function ListOrderDetailsPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [order, setOrder] = useState(null)
    const [flowState, setFlowState] = useState<FlowState>({
        customer: '',
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
                order: JSON.stringify(order)
            }
        })
    }

    const confirmOrder = async () => {
        await confirmOrderRequest(flowState.customer, tableCode)
        router.replace({
            pathname: '/listorders',
            query: {
                flowState: JSON.stringify(flowState),
            }
        })
    }

    const requestBill = () => {
        router.replace({
            pathname: '/billcheckout',
            query: {
                flowState: JSON.stringify(flowState),
            }
        })
    }

    const deleteOrderDetail = async (orderDetail) => {
        console.log(' ')
        console.log('ListOrderDetailsPage deleteOrderDetail(orderDetail)')
        console.log('orderDetail: ', orderDetail)
        await deleteOrderDetailRequest(tableCode, orderDetail)
        console.log('order: ', order)
        // router.replace({
        //     pathname: '/listorders',
        //     query: {
        //         flowState: JSON.stringify(flowState),
        //     }
        // })
    }

    return (<>
        <ListOrderDetails 
            customer={flowState.customer}
            onConfirmOrder={confirmOrder}
            onDeleteOrderDetail={deleteOrderDetail}
            onRequestBill={requestBill}
            onGoBack={goBack}
            order={order}/>
    </>)
}

