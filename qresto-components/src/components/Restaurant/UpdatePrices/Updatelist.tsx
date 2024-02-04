import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, Button, Dialog } from '@mui/material';
import Confirmation from './Confirmation';
import { theme } from '@/Common/Theme/themes';
import PropTypes from "prop-types";
import {DataTable} from "@/Common/DataTable";

export default function UpdateList(props: any) {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleClickOpen = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
    const createHeaders = () => {
        return [
            {label: "Plato", key: "dishName"},
            {label: "Precio", key: "dishPrice"},
        ]
    }
    const createRows = (dishes) => {
        return dishes.map(d => {
            return {
                dishName: d.dishName,
                dishPrice: d.dishPrice,
            }
        })
    }

  return (
    <div
      style={{
        
        maxWidth: 600,
        maxHeight: 400, // Ajusta esta altura máxima según tus necesidades
        
      }}>
        <Typography
            color="white"
            sx={{
                backgroundColor: theme.palette.primary.main,
                textAlign: "center",
                fontSize:25,
                marginTop:5
            }}
        >
            Vista previa
        </Typography>

        <Typography variant="h6" gutterBottom align="center" marginTop={1}>
            Estos serán los precios actualizados
        </Typography>
        <hr />
        <DataTable
            headers={createHeaders()}
            rows={createRows(props.dishList)}
            actions={false}
        />

      {/*<TableContainer
        component={Paper}

      >

        <Table
          aria-label="simple table"
          sx={{
            padding: 6,
            tableLayout: 'fixed', // Fuerza el ajuste del contenido de la tabla
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Nombre Plato</TableCell>
              <TableCell align="center">Precio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.productList.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>*/}
      <div style={{ display: 'flex', marginTop: '10px', justifyContent: 'space-between' }}>
        <Button
          type="submit"
          variant="contained"
          onClick={handleClickOpen}
          sx={{
            backgroundColor: theme.palette.primary.main,
            margin: 1
          }}
        >
          Actualizar
        </Button>
        <Button
          type="submit"
          variant="contained"
          onClick={props.onClose}
          sx={{
            backgroundColor: theme.palette.primary.main,
            margin: 1
          }}
        >
          Cancelar
        </Button>
      </div>


    </div>
  );
}

UpdateList.defaultProps = {
    onSubmit: function () {},
    open: false,
    onClose: function () {},
    productList: [],
    dishList: [],
}
UpdateList.propTypes = {
    onSubmit: PropTypes.func,
    open: PropTypes.bool,
    onClose: PropTypes.func,
    productList: PropTypes.array,
    dishList: PropTypes.array,

}
