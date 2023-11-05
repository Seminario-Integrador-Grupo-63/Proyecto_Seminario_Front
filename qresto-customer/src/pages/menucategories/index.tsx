import {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import { useSearchParams} from 'next/navigation'
import {MenuCategories} from '@/Customer/MenuCategories/MenuCategories'
import {getCategories} from '@/requests'
import { FlowState } from '@/Common/FlowState'

export default function MenuCategoriesPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [categories, setCategories] = useState([])
    const [flowState, setFlowState] = useState<FlowState>({
        customer: '',
        orders: {
            buttonVisible: false,
            total: 0
        }
    })

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        setFlowState(JSON.parse(searchParams.get('flowState')))
    }, [searchParams])

    const fetchData = async () => {
        const response = await getCategories()
        setCategories(response)
    }

    const onClickCategory = (category) => {
        router.replace({
            pathname: '/menudishes', 
            query: {
                flowState: JSON.stringify(flowState),
                category: JSON.stringify(category)
            }
        })
    }

    const onClickShowOrders = () => {
        router.replace({
            pathname: '/listorders', 
            query: {
                flowState: JSON.stringify(flowState)
            }
        })
    }

    return (<>
        <MenuCategories 
            categories={categories}
            ordersButtonVisible={flowState.orders.buttonVisible}
            ordersTotal={flowState.orders.total}
            onClickFooter={onClickShowOrders}
            onClickCategory={onClickCategory}/>
    </>)
}
