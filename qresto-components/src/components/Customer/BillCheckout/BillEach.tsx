import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { BillRow } from "./BillRow";

export const BillEach = (props: any) => {
    const createBillRow = (row, index) => {
        return(<BillRow key={'billrow' + index} row={row} />)
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableBody>
                    {props.billData.map((row, index) => createBillRow(row, index))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

BillEach.defaultProps = {
    billData: []
}

BillEach.propTypes = {
    billData: PropTypes.array
}
