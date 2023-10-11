import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

// Eliminar createData y defaultProps antes de desplegar

function createData(
    name: string,
    list: Array<{product: string, cost: number}>,
    total: number,
) {
    return {name, list, total};
}

const Row=(props:any) => {
    const { row } = props;
    return (
        <React.Fragment>

            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell align="right">Total: {row.total}</TableCell>
            </TableRow>

            <TableRow>

                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Box sx={{ margin: 1 }}>
                        <Table size="small" aria-label="purchases">

                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Producto</TableCell>
                                    <TableCell align="right">Costo</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {row.list.map((listRow) => (
                                    <TableRow key={listRow.product}>
                                        <TableCell component="th" scope="row">
                                            {listRow.product}
                                        </TableCell>
                                        <TableCell align="right">{listRow.cost}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>

                        </Table>
                    </Box>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export const BillEach = (props: any) => {
    return (
        <TableContainer component={Paper}>
            <Table>

                <TableBody>
                    {props.orderDet.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>

            </Table>
        </TableContainer>
    )
}

BillEach.defaultProps =
    {
        orderDet: [
            createData('Hanako', [{product: "des", cost: 123}, {product:"dw", cost: 124}], 45),
            createData('Yorinobu', [{product: "ads", cost: 456}], 54),
        ]
    }

BillEach.propTypes =
    {
        orderDet: PropTypes.array
    }
