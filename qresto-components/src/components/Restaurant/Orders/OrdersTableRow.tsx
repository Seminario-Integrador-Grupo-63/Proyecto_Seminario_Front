import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    KeyboardArrowUp as KeyboardArrowUpIcon,
    KeyboardArrowDown as KeyboardArrowDownIcon,
    ExpandMore as ExpandMoreIcon
} from '@mui/icons-material';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableContainer,
    Paper,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    IconButton,
    Collapse,
    Typography,
    Box
} from '@mui/material';

// export const OrdersTableRow = ({Orden}) =>  {
export const OrdersTableRow = (props) =>  {
    const [open, setOpen] = useState(false);
    console.log(' ')
    console.log('OrdersTableRow')
    console.log('props.row: ', props.row)

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
            <TableCell component="th" scope="row">{props.row.createdAtDate}</TableCell>
            <TableCell align="right">{props.row.calories}</TableCell>
            <TableCell align="right">{props.row.fat}</TableCell>
            <TableCell align="right">{props.row.carbs}</TableCell>
            <TableCell align="right">{props.row.protein}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                    History
                </Typography>
                <Table size="small" aria-label="purchases">
                    <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Customer</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right">Total price ($)</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.row.history.map((historyRow) => (
                        <TableRow key={historyRow.date}>
                        <TableCell component="th" scope="row">
                            {historyRow.date}
                        </TableCell>
                        <TableCell>{historyRow.customerId}</TableCell>
                        <TableCell align="right">{historyRow.amount}</TableCell>
                        <TableCell align="right">
                            {Math.round(historyRow.amount * props.row.price * 100) / 100}
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

OrdersTableRow.defaultProps =
{
    row: null
}

OrdersTableRow.propTypes = 
{
    row: PropTypes.object
}
