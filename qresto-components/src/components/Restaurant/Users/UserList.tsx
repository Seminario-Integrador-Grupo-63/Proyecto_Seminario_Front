import React, { useState } from 'react';
import {
    Container,
    Typography,
    Button,
    TextField,
    Select,
    MenuItem,
    AppBar,
    Toolbar,
    Grid,
    Accordion,
    AccordionDetails,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Paper,
    TableBody,
} from '@mui/material';
import PropTypes from 'prop-types';
import { theme } from '@/components/Common/Theme/themes';

function UserList({ OrdenList }) {
    const [] = useState({
        selectedOption: '',
        selectedCategory: '',
        inputValueNombre: '',
        inputValueUsuario: '',
        selectedActualizacion: '',
        inputValueContraseña: '',
        inputValueDescripcion: '',
    });

  
    return (
        <>
            <AppBar
                position="sticky"
                sx={{
                    width: { sm: `100%` },
                    marginTop: 'auto',
                    bottom: 0,
                    backgroundColor: theme.palette.primary.main,
                }}
            >
                <Toolbar>
                    <Grid container justifyContent="left">
                        <Grid xs={6} item>
                            <TableHead >
                                <TableRow>
                                    <TableCell>
                                        <Typography

                                            sx={{
                                                color: theme.palette.secondary.main,
                                                marginLeft: '100px', // Añadidoara separar un poco de la celda siguiente
                                                marginRight: '200px'
                                            }}
                                        >
                                            {"Nombre"}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            sx={{
                                                color: theme.palette.secondary.main,
                                                marginRight: '550px',
                                            }}
                                        >
                                            {"Permisos"}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Accordion>
                <AccordionDetails >
                    <TableContainer component={Paper}>
                        <Table>
                            <TableBody >
                                {OrdenList.map((row) => (
                                    <TableRow key={row.dish} >
                                        <TableCell>
                                            {row.dish}
                                        </TableCell>
                                        <TableCell align="left">{row.nombre}</TableCell>
                                        <TableCell align="left">{row.permiso}</TableCell>
                                        <TableCell align="right">{row.crear}</TableCell>
                                        <TableCell align="left">{row.borrar}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>
        </>
    );
}

UserList.propTypes = {
    title: PropTypes.string,
};

export default UserList;
