import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import { FlowState } from '@/Common/FlowState'
import { useSearchParams} from 'next/navigation'
import {getCategories} from '@/requests'
import { tableCode} from '@/Common/FakeData/Tables'

export default function ListOrdersPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
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
    }, [searchParams])

    const myFunction = () => {
        router.replace('/another-path')
    }

    return (<>

    </>)
}

