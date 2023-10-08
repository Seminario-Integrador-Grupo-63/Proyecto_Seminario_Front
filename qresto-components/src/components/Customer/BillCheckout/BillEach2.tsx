import styles from './ListOrders.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { CustomerHeader } from '@/Customer/CustomerHeader/CustomerHeader';
import { CustomerContainer } from '@/Customer/CustomerContainer/CustomerContainer';
import {Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import { Footer } from '@/Customer/Footer/Footer';

export const ListOrders = (props: any) => {
    const createBill = (bill) => {
        return(
            <Table sx={{padding: '15px'}}>
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">

                        <TableHead>
                            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                                <TableCell component="th" scope="row">{bill.name}</TableCell>
                                <TableCell align="right">{bill.total}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Product</TableCell>
                                <TableCell align="right">Cost</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {bill.list.map((row: {product:string, cost:number}) => (
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
            </Table>
        )
    }

    return (<>
        <CustomerContainer>
            <CustomerHeader
                goBackEnabled={true}
                title={'Cuenta'}/>
            {props.bills.map(bill => createBill(bill))}
            <Footer
                text={''}
                buttonVisible={false}/>
        </CustomerContainer>
    </>);
}

ListOrders.defaultProps =
    {
        bills: []
    }

ListOrders.propTypes =
    {
        bills: PropTypes.array
    }
