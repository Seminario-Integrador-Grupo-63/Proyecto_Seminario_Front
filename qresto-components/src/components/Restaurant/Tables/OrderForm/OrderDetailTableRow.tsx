import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';

export const OrderDetailTableRow = (props: any) => {
    const [open, setOpen] = React.useState(false)

    const onAddOrderDetail = () => {
        props.onAddOrderDetail(props.customerOrderDetail)
    }

    const onEditCustomerOrderDetail = () => {
        console.log(' ')
        console.log('OrderDetailTableRow onEditCustomerOrderDetail()')
        console.log('props.customerOrderDetail: ', props.customerOrderDetail)
    }

    const onDeleteCustomerOrderDetail = () => {

    }

    const onEditOrderDetail = () => {
        console.log(' ')
        console.log('OrderDetailTableRow onEditOrderDetail()')
        console.log('props.customerOrderDetail: ', props.customerOrderDetail)
    }

    const onDeleteOrderDetail = () => {

    }

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>

                <TableCell component="th" scope="row" align="left">
                    {props.customerOrderDetail.customer}
                </TableCell>
                <TableCell align="center">{props.customerOrderDetail.total}</TableCell>
                <TableCell align="center">
                    <IconButton 
                        aria-label="add"
                        onClick={onAddOrderDetail}>
                        <AddCircleIcon/>
                    </IconButton>
                    <IconButton 
                        aria-label="edit"
                        onClick={onEditCustomerOrderDetail}>
                        <EditIcon/>
                    </IconButton>
                    <IconButton 
                        aria-label="delete"
                        onClick={onDeleteCustomerOrderDetail}>
                        <DeleteIcon/>
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                    <Typography variant="h6" gutterBottom component="div">
                        Detalles de orden
                    </Typography>
                    <Table size="small" aria-label="purchases">
                        <TableHead>
                        <TableRow>
                            <TableCell>Plato</TableCell>
                            <TableCell>Cantidad</TableCell>
                            <TableCell>Precio</TableCell>
                            <TableCell>Guarnición</TableCell>
                            <TableCell>Precio Guarnición</TableCell>
                            <TableCell>Subtotal</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {props.customerOrderDetail.orderDetails.map((orderDetail, index) => (
                            <TableRow key={orderDetail.dish+index.toString()}>
                                <TableCell component="th" scope="row">
                                    {orderDetail.dish}
                                </TableCell>
                                <TableCell>{orderDetail.amount}</TableCell>
                                <TableCell>${orderDetail.price}</TableCell>
                                <TableCell>{orderDetail.sideDish}</TableCell>
                                <TableCell>${orderDetail.sideDishPrice}</TableCell>
                                <TableCell>{orderDetail.subtotal}</TableCell>
                                <TableCell>
                                    <IconButton 
                                        aria-label="edit"
                                        onClick={onEditOrderDetail}>
                                        <EditIcon/>
                                    </IconButton>
                                    <IconButton 
                                        aria-label="delete"
                                        onClick={onDeleteOrderDetail}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </Box>
                </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

OrderDetailTableRow.defaultProps =
{
    customerOrderDetail: null,
    onAddOrderDetail: function(){},
    onEditCustomerOrderDetail: function(){}
}

OrderDetailTableRow.propTypes = 
{
    customerOrderDetail: PropTypes.object,
    onAddOrderDetail: PropTypes.func,
    onEditCustomerOrderDetail: PropTypes.func
}
