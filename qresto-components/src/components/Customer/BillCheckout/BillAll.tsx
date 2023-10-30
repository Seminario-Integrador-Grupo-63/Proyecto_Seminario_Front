import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

export const BillAll = (props: any) => {
    const calculateTotal = () => {
        let total = 0
        let totalCustomers = 0

        props.billData.forEach(customerOrder => {
            total += customerOrder.customerTotal
            totalCustomers += 1
        })
        return total/totalCustomers
    }

    const createCustomerData = (customerData) => {
        return(customerData.orderDetails.map((orderDetail, index) => createOrderDetail(orderDetail, index)))
    } 

    const createOrderDetail = (orderDetail, index) => {
        return(
            <React.Fragment key={index}>
                <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    {orderDetail.amount > 1?
                        <>
                            <TableCell component="th" scope="row">{orderDetail.dish.name} X{orderDetail.amount}</TableCell>
                            <TableCell align="right">${orderDetail.dish.price}</TableCell>
                        </>
                    :
                        <>
                            <TableCell component="th" scope="row">{orderDetail.dish.name}</TableCell>
                            <TableCell align="right">${orderDetail.dish.price}</TableCell>
                        </>
                    }
                </TableRow>

                <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                    {orderDetail.amount > 1?
                        <>
                            <TableCell component="th" scope="row">{orderDetail.sideDish.name}</TableCell>
                            <TableCell align="right">${orderDetail.sideDish.extraPrice}</TableCell>
                        </>
                    :
                        <>
                            <TableCell component="th" scope="row">{orderDetail.sideDish.name} X{orderDetail.amount}</TableCell>
                            <TableCell align="right">${orderDetail.sideDish.extraPrice}</TableCell>
                        </>
                    }
                </TableRow>
            </React.Fragment>
        )
    }

    return (<>
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Producto</TableCell>
                        <TableCell align="right">Costo</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {props.billData.map(customerData => createCustomerData(customerData))}
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell 
                            component="th" 
                            scope="row" 
                            style={{ fontWeight: 'bold' }}>
                            Total por persona
                        </TableCell>
                        <TableCell 
                            align="right" 
                            style={{ fontWeight: 'bold' }}>
                            ${calculateTotal()}
                        </TableCell>
                    </TableRow>

                </TableBody>

            </Table>
        </TableContainer>
    </>)
}

BillAll.defaultProps = {
    billData: []
}

BillAll.propTypes = {
    billData: PropTypes.array
}
