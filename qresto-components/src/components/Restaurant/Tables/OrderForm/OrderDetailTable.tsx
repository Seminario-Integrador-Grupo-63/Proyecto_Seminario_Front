import {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import { OrderDetailTableRow } from './OrderDetailTableRow';

export const OrderDetailTable = (props: any) => {
    const [customerOrderDetails, setCustomerOrderDetails] = useState([])

    useEffect(() => {
        if(props.order !== null){
            setCustomerOrderDetails(props.order.customerOrderDetails)
        }
    }, [props.order])

    const createCustomerOrderDetailRow = (customerOrderDetail) => {
        console.log(' ')
        console.log('OrderDetailTable createCustomerOrderDetailRow (customerOrderDetail)')
        console.log('customerOrderDetail: ', customerOrderDetail)
        const row = {
            customer: customerOrderDetail.customer,
            total: customerOrderDetail.customerTotal,
            orderDetails: customerOrderDetail.orderDetails.map(orderDetail => {
                let sideDish = ''
                let sideDishPrice = ''
                if(orderDetail.sideDish !== null){
                    sideDish = orderDetail.sideDish.name
                    sideDishPrice = orderDetail.sideDish.extraPrice
                }
                return {
                    dish: orderDetail.dish.name,
                    amount: orderDetail.amount,
                    price: orderDetail.dish.price,
                    sideDish: sideDish,
                    sideDishPrice: sideDishPrice,
                    subTotal: orderDetail.subTotal
                }
            })
        }
        console.log('row: ', row)
        return row
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Comensal</TableCell>
                        <TableCell align="center">Total</TableCell>
                        <TableCell align="center">Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {customerOrderDetails.map((customerOrderDetail) => 
                        <OrderDetailTableRow 
                            key={customerOrderDetail.customer} 
                            customerOrderDetail={createCustomerOrderDetailRow(customerOrderDetail)}
                            onAddOrderDetail={props.onAddOrderDetail}
                            onEditOrderDetail={props.onEditOrderDetail}/>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

OrderDetailTable.defaultProps =
{
    order: null,
    onAddOrderDetail: function(){},
    onEditOrderDetail: function(){}
}

OrderDetailTable.propTypes =
{
    order: PropTypes.object,
    onAddOrderDetail: PropTypes.func,
    onEditOrderDetail: PropTypes.func
}


