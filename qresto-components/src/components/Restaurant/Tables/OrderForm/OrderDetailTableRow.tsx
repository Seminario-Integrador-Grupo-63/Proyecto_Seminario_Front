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

    const onEditOrderDetail = (orderDetail) => {
        props.onEditOrderDetail(props.customerOrderDetail.customer, orderDetail)
    }

    const onEditCustomer = () => {
        props.onEditCustomer(props.customerOrderDetail.customer)
    }

    const onDeleteOrderDetail = (orderDetail) => {
        props.onDeleteOrderDetail(props.customerOrderDetail.customer, orderDetail)
    }

    const onDeleteCustomerOrderDetail = (orderDetail) => {
        props.onDeleteCustomerOrderDetail(props.customerOrderDetail.customer, orderDetail)
    }
    
    const renderSubRow = (orderDetail) => {
        let sideDish = ''
        let sideDishPrice = ''
        if(orderDetail.sideDish !== null){
            sideDish = orderDetail.sideDish.name
            sideDishPrice = orderDetail.sideDish.extraPrice
        }
        return(<>
            <TableCell>{orderDetail.amount}</TableCell>
            <TableCell>${orderDetail.dish.price}</TableCell>
            <TableCell>{sideDish}</TableCell>
            <TableCell>${sideDishPrice}</TableCell>
            <TableCell>${orderDetail.subTotal}</TableCell>
            <TableCell>{orderDetail.observation}</TableCell>
        </>)
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
                <TableCell align="center">${props.customerOrderDetail.customerTotal}</TableCell>
                {props.actions?
                    <TableCell align="center">
                        <IconButton 
                            aria-label="add"
                            onClick={onAddOrderDetail}>
                            <AddCircleIcon/>
                        </IconButton>
                        <IconButton 
                            aria-label="edit"
                            onClick={onEditCustomer}>
                            <EditIcon/>
                        </IconButton>
                        <IconButton 
                            aria-label="delete"
                            onClick={onDeleteCustomerOrderDetail}>
                            <DeleteIcon/>
                        </IconButton>
                    </TableCell>
                :
                    null
                }

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
                                    <TableCell>Observaciones</TableCell>
                                    {props.actions?<TableCell>Acciones</TableCell>:null}
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    {props.customerOrderDetail.orderDetails.map((orderDetail, index) => (
                                        <TableRow key={orderDetail.dish.name + index.toString()}>
                                            <TableCell component="th" scope="row">
                                                {orderDetail.dish.name}
                                            </TableCell>
                                            {renderSubRow(orderDetail)}
                                            {props.actions?
                                                <TableCell>
                                                    <IconButton 
                                                        aria-label="edit"
                                                        onClick={() => onEditOrderDetail(orderDetail)}>
                                                        <EditIcon/>
                                                    </IconButton>
                                                    <IconButton 
                                                        aria-label="delete"
                                                        onClick={() => onDeleteOrderDetail(orderDetail)}>
                                                        <DeleteIcon/>
                                                    </IconButton>
                                                </TableCell>
                                            :
                                                null
                                            }
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

OrderDetailTableRow.defaultProps =
{
    customerOrderDetail: null,
    onAddOrderDetail: function(){},
    onEditCustomerOrderDetail: function(){},
    onEditCustomer: function(){},
    onDeleteCustomerOrderDetail: function(){},
    onDeleteOrderDetail: function(){},
    actions: true
}

OrderDetailTableRow.propTypes = 
{
    customerOrderDetail: PropTypes.object,
    onAddOrderDetail: PropTypes.func,
    onEditOrderDetail: PropTypes.func,
    onEditCustomer: PropTypes.func,
    onDeleteCustomerOrderDetail: PropTypes.func,
    onDeleteOrderDetail: PropTypes.func,
    actions: PropTypes.bool
}
