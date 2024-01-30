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
        } else {
            setCustomerOrderDetails([])
        }
    }, [props.order])

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Comensal</TableCell>
                        <TableCell align="center">Total</TableCell>
                        {props.actions ?
                            <TableCell align="center">Acciones</TableCell>
                        :
                            null
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {customerOrderDetails.map((customerOrderDetail) => 
                        <OrderDetailTableRow 
                            key={customerOrderDetail.customer} 
                            customerOrderDetail={customerOrderDetail}
                            onAddOrderDetail={props.onAddOrderDetail}
                            onEditCustomer={props.onEditCustomer}
                            actions={props.actions}
                            onEditOrderDetail={props.onEditOrderDetail}
                            onDeleteCustomerOrderDetail={props.onDeleteCustomerOrderDetail}
                            onDeleteOrderDetail={props.onDeleteOrderDetail}/>
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
    onEditOrderDetail: function(){},
    onEditCustomer: function(){},
    onDeleteCustomerOrderDetail: function(){},
    onDeleteOrderDetail: function(){},
    actions: true
}

OrderDetailTable.propTypes =
{
    order: PropTypes.object,
    onAddOrderDetail: PropTypes.func,
    onEditOrderDetail: PropTypes.func,
    onEditCustomer: PropTypes.func,
    onDeleteCustomerOrderDetail: PropTypes.func,
    onDeleteOrderDetail: PropTypes.func,
    actions: PropTypes.bool
}
