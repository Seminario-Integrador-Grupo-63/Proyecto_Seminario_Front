import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import { FlowState } from '@/Common/FlowState'
import { useSearchParams} from 'next/navigation'
import { ListOrderDetails } from '@/Customer/ListOrderDetails/ListOrderDetails';

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
        // console.log('order: ', order)
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

    return (<>
        <ListOrderDetails 
            onGoBack={goBack}
            order={order}/>
    </>)
}

