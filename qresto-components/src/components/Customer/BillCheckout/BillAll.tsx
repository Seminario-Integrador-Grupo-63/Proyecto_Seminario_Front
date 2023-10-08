import {Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import {BillCheckout} from "@/Customer/BillCheckout/BillCheckout";
import React from "react";

function createData(
    name: string,
    product: string,
    cost: number,
) {
    return {name, product, cost };
}
const rows = [
    createData('Johny', 'Cupcake', 3.7),
    createData('V','Donut', 25.0),
    createData('Jude', 'Eclair', 16.0)]

// Refactor 'rows' for props when connecting to the backend
export const BillAll = (props: any) => {
    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">

                <TableHead>
                    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                        <TableCell component="th" scope="row">{props.tableTitle}</TableCell>
                        <TableCell align="right">{props.tableTotal}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">Product</TableCell>
                        <TableCell align="right">Cost</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {rows.map((row: {name:string, product:string, cost:number}) => (
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
        tableTitle: "Evelyn",
        tableTotal: "13",
        bills: [createData('Johny', 'Cupcake', 3.7),
                createData('V','Donut', 25.0),
                createData('Jude', 'Eclair', 16.0)]
    }

BillAll.propTypes =
    {
        tableTitle: PropTypes.string,
        tableTotal: PropTypes.string,
        bills: PropTypes.array
    }
