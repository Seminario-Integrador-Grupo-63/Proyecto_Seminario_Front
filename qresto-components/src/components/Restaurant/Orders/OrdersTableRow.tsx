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
    // <Accordion>
    //   <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    //     <h3>Orden N.1   </h3>
    //   </AccordionSummary>
    //   <AccordionDetails>
    //     <TableContainer component={Paper}>
    //       <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //         <TableHead>
    //           <TableRow>
    //             <TableCell>Plato</TableCell>
    //             <TableCell align="right">Cantidad</TableCell>
    //             <TableCell align="right">Precio&nbsp;($)</TableCell>
    //             <TableCell align="right">Guarnicion</TableCell>
    //             <TableCell align="right">Precio de Guarnicion&nbsp;($)</TableCell>
    //             <TableCell align="right">Sub Total&nbsp;($)</TableCell>
    //             <TableCell align="right">Tiempo de Entrega</TableCell>
    //           </TableRow>
    //         </TableHead>
    //         <TableBody>
    //           {Orden.map((row) => (
    //             <TableRow
    //               key={row.dish}
    //               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //             >
    //               <TableCell component="th" scope="row">
    //                 {row.dish}
    //               </TableCell>
    //               <TableCell align="right">{row.cant}</TableCell>
    //               <TableCell align="right">{row.precio}</TableCell>
    //               <TableCell align="right">{row.guarnicion}</TableCell>
    //               <TableCell align="right">{row.precioGuarnicion}</TableCell>
    //               <TableCell align="right">{row.subTotal}</TableCell>
    //               <TableCell align="right">{row.tiempoEntrega}</TableCell>
    //             </TableRow>
    //           ))}
    //         </TableBody>
    //       </Table>
    //     </TableContainer>
    //   </AccordionDetails>
    // </Accordion>

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
