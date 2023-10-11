import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

// Eliminar createData y defaultProps antes de desplegar

function createData(
    product: string,
    cost: number,
) {
    return {product, cost };
}

export const BillAll = (props: any) => {
    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">

                <TableHead>
                    <TableRow>
                        <TableCell align="left">Product</TableCell>
                        <TableCell align="right">Cost</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {props.bills.map((row: {product:string, cost:number}) => (
                        <TableRow
                            key={row.product}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{row.product}</TableCell>
                            <TableCell align="right">{row.cost}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </TableContainer>
    )
}

BillAll.defaultProps =
    {
        bills: [createData('Cupcake', 3.7),
                createData('Donut', 25.0),
                createData('Eclair', 16.0)]
    }

BillAll.propTypes =
    {
        bills: PropTypes.array
    }
