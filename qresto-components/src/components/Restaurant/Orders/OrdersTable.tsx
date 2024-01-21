import React from 'react';
import PropTypes from 'prop-types';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableContainer,
    Paper,
} from '@mui/material';
import { OrdersTableRow } from './OrdersTableRow';

export const OrdersTable = (props: any) => {

    console.log(' ')
    console.log('OrdersTable')
    console.log('props.orders: ', props.orders)
    return (
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Fecha</TableCell>
                <TableCell align="right">Mesa&nbsp;(g)</TableCell>
                <TableCell align="right">Total&nbsp;(g)</TableCell>
                <TableCell align="right">Acciones&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.orders.map((row, index) => (
                <OrdersTableRow key={index} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

OrdersTable.defaultProps =
{
    orders: []
}

OrdersTable.propTypes =
{
    orders: PropTypes.array
}


