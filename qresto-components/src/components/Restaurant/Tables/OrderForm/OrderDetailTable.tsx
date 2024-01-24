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
        const row = {
            customer: customerOrderDetail.customer,
            total: customerOrderDetail.customerTotal,
            orderDetails: customerOrderDetail.orderDetails.map(orderDetail => {
                return {
                    dish: orderDetail.dish.name,
                    amount: orderDetail.amount,
                    price: orderDetail.dish.price,
                    sideDish: orderDetail.sideDish.name,
                    sideDishPrice: orderDetail.sideDish.extraPrice,
                    subtotal: orderDetail.subTotal
                }
            })
        }
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
                            onAddOrderDetail={props.onAddOrderDetail}/>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

OrderDetailTable.defaultProps =
{
    order: null,
    onAddOrderDetail: function(){}
}

OrderDetailTable.propTypes =
{
    order: PropTypes.object,
    onAddOrderDetail: PropTypes.func
}


