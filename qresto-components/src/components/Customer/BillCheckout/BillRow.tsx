import {Box, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import {theme} from "@/Common/Theme/themes";
import TableContainer from "@mui/material/TableContainer";

export const BillRow =(props:any) => {
    const row = props.row;

    const createdOrderDetail = (orderDetail, index) => {
        return(
            <React.Fragment key={index}>
                {orderDetail.amount > 1 ?
                    <>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                {orderDetail.dish.name} X{orderDetail.amount}
                            </TableCell>
                            <TableCell align="right">
                                ${orderDetail.dish.price*orderDetail.amount}
                            </TableCell>
                        </TableRow>
                        {orderDetail.sideDish !== null ? <>
                            <TableRow >
                                <TableCell component="th" scope="row">
                                    {orderDetail.sideDish.name} X{orderDetail.amount}
                                </TableCell>
                                <TableCell align="right">
                                    ${orderDetail.sideDish.extraPrice*orderDetail.amount}
                                </TableCell>
                            </TableRow> 
                        </>:
                            null
                        }
                    </>:
                    <>
                        <TableRow >
                            <TableCell component="th" scope="row">
                                {orderDetail.dish.name}
                            </TableCell>
                            <TableCell align="right">${orderDetail.dish.price}</TableCell>
                        </TableRow>

                        {orderDetail.sideDish !== null ?<>
                            <TableRow >
                                <TableCell component="th" scope="row">
                                    {orderDetail.sideDish.name}
                                </TableCell>
                                <TableCell align="right">${orderDetail.sideDish.extraPrice}</TableCell>
                            </TableRow> 
                        </>:
                            null
                        }

                    </>
                }
            </React.Fragment>
        )
    } 

    return (
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


