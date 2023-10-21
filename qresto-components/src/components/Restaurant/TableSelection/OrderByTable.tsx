import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function ExpandableTable({Orden}) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <h3>Orden N.1   </h3>
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Plato</TableCell>
                <TableCell align="right">Cantidad</TableCell>
                <TableCell align="right">Precio&nbsp;($)</TableCell>
                <TableCell align="right">Guarnicion</TableCell>
                <TableCell align="right">Precio de Guarnicion&nbsp;($)</TableCell>
                <TableCell align="right">Sub Total&nbsp;($)</TableCell>
                <TableCell align="right">Tiempo de Entrega</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Orden.map((row) => (
                <TableRow
                  key={row.dish}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.dish}
                  </TableCell>
                  <TableCell align="right">{row.cant}</TableCell>
                  <TableCell align="right">{row.precio}</TableCell>
                  <TableCell align="right">{row.guarnicion}</TableCell>
                  <TableCell align="right">{row.precioGuarnicion}</TableCell>
                  <TableCell align="right">{row.subTotal}</TableCell>
                  <TableCell align="right">{row.tiempoEntrega}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
}
