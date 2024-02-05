import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import { useSearchParams} from 'next/navigation'
import { ListOrderDetails } from '@/Customer/ListOrderDetails/ListOrderDetails';
import {
    confirmOrder as confirmOrderRequest,
    deleteOrderDetail as deleteOrderDetailRequest,
    getTableOrders
} from '@/requests';
import { tableCode } from '@/Common/FakeData/Tables';

export default function ListOrderDetailsPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [order, setOrder] = useState(null)
    const [customer, setCustomer] = useState('')

    useEffect(() => {
        setOrder(JSON.parse(searchParams.get('order')))
        let customer = searchParams.get('customer')
        setCustomer(customer)
    }, [searchParams])

    const goBack = () => {
        router.replace({
            pathname: '/listorders',
            query: {
                customer: customer
            }
        })
    }

    const confirmOrder = async () => {
        await confirmOrderRequest(customer, tableCode)
        router.replace({
            pathname: '/listorders',
            query: {
                customer: customer
            }
        })
    }

    const requestBill = () => {
        router.replace({
            pathname: '/billcheckout',
            query: {
                customer: customer
            }
        })
    }

    const deleteOrderDetail = async (orderDetail) => {
        await deleteOrderDetailRequest(tableCode, orderDetail)
        router.replace({
            pathname: '/listorders',
            query: {
                customer: customer
            }
        })
    }

    const setConfirmedCustomer = () => {
        if(order != null){
            if(order.customerList.length > 0){
                return order.customerList.some(c => {
                    if(c.customer === customer){
                        return c.confirmed
                    }
                })
            } else {
                return true
            }
        } else {
            return false
        }
    }

    return (<>
        <ListOrderDetails
            customer={customer}
            confirmed={setConfirmedCustomer()}
            onConfirmOrder={confirmOrder}
            onDeleteOrderDetail={deleteOrderDetail}
            onRequestBill={requestBill}
            onGoBack={goBack}
            order={order}/>
    </>)
}

