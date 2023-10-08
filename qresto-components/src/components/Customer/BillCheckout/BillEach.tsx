import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import {BillAll} from "@/Customer/BillCheckout/BillAll";

function createData(
    name: string,
) {
    return {name, list: [
            {
                product: "Onigiri",
                cost: 3.6},
            {
                product: "Dango",
                cost: 3.9}
        ], total: 7.5
    };
}

const rows = [
    createData('Hanako'),
    createData('Yorinobu'),
];
const Row=(props:any) => {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

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
// Refactor 'rows' for props when connecting to the backend
export const BillEach = (props: any) => {
    return (
        <TableContainer component={Paper}>
            <Table>

                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>

            </Table>
        </TableContainer>
    )
}

BillAll.defaultProps =
    {
        bills: []
    }

BillAll.propTypes =
    {
        bills: PropTypes.array
    }
