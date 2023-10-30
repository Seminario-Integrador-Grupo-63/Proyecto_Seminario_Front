import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

export const BillRow =(props:any) => {
    const row = props.row;

    const createdOrderDetail = (orderDetail, index) => {
        return(
            <React.Fragment key={index}>
                {orderDetail.amount > 1 ?
                    <>
                        <TableRow >
                            <TableCell component="th" scope="row">
                                {orderDetail.dish.name} X{orderDetail.amount}
                            </TableCell>
                            <TableCell align="right">
                                ${orderDetail.dish.price*orderDetail.amount}
                            </TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell component="th" scope="row">
                                {orderDetail.sideDish.name} X{orderDetail.amount}
                            </TableCell>
                            <TableCell align="right">
                                ${orderDetail.sideDish.extraPrice*orderDetail.amount}
                            </TableCell>
                        </TableRow> 
                    </>
                :
                    <>
                        <TableRow >
                            <TableCell component="th" scope="row">
                                {orderDetail.dish.name}
                            </TableCell>
                            <TableCell align="right">${orderDetail.dish.price}</TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell component="th" scope="row">
                                {orderDetail.sideDish.name}
                            </TableCell>
                            <TableCell align="right">${orderDetail.sideDish.extraPrice}</TableCell>
                        </TableRow> 
                    </>
                }
            </React.Fragment>
        )
    } 

    return (
        <TableRow key={props.keyRow}>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Box sx={{ margin: 1 }}>
                    <Table size="small" aria-label="purchases">
                        <TableHead>
                            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                                <TableCell 
                                    component="th" 
                                    scope="row"
                                    style={{ fontWeight: 'bold' }}>
                                    {row.customer}
                                </TableCell>
                                <TableCell 
                                    align="right"
                                    style={{ fontWeight: 'bold' }}>
                                    Total: ${row.customerTotal}
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {row.orderDetails.map((orderDetail, index) => createdOrderDetail(orderDetail, index))}
                        </TableBody>
                    </Table>
                </Box>
            </TableCell>
        </TableRow>
    );
}

BillRow.defaultProps = {
    row: null,
    keyRow:null
}

BillRow.propTypes = {
    row: PropTypes.object,
    keyRow: PropTypes.any
}


