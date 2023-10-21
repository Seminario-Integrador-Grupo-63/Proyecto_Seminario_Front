import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

// Eliminar createData y defaultProps antes de desplegar

function createData(
    customer: string,
    dishes: Array<{dish: string, cost: number}>,
    total: number,
) {
    return {customer, dishes, total};
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
                                    <TableRow key={listRow.dish}>
                                        <TableCell component="th" scope="row">
                                            {listRow.dish}
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
                        <Row key={row.customer} row={row} />
                    ))}
                </TableBody>

            </Table>
        </TableContainer>
    )
}

BillEach.defaultProps =
    {
        orderDet: [
            createData('Hanako', [{dish: "des", cost: 123}, {dish:"dw", cost: 124}], 45),
            createData('Yorinobu', [{dish: "ads", cost: 456}], 54),
        ]
    }

BillEach.propTypes =
    {
        orderDet: PropTypes.array
    }
