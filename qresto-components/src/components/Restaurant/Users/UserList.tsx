import React, { useState } from 'react';
import {
    Typography,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody, TableFooter, Button, IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types';
import { theme } from '@/components/Common/Theme/themes';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const UserList = (props) => {
    return (
        <TableContainer >
            <Table sx={{ minWidth: 650 }}>
                <TableHead sx={{backgroundColor: theme.palette.primary.main,}} >
                    <TableRow>
                        <TableCell align={"center"}>
                            <Typography sx={{color: theme.palette.secondary.main,}}>
                                Nombre
                            </Typography>
                        </TableCell>
                        <TableCell align={"center"}>
                            <Typography sx={{color: theme.palette.secondary.main}}>
                                Permiso
                            </Typography>
                        </TableCell>
                        <TableCell align={"center"}>
                            <Typography sx={{color: theme.palette.secondary.main}}>
                                Acciones
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {props.users.map((row) => (
                        <TableRow  >
                            <TableCell align="center">{row.nombre}</TableCell>
                            <TableCell align="center">{row.permiso}</TableCell>
                            <TableCell aria-label={"user-buttons"} align="center">
                                <IconButton onClick={props.editUser}>
                                    <EditIcon/>
                                </IconButton>
                                <IconButton onClick={props.deleteUser}>
                                    <DeleteIcon/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell>
                            <Button startIcon={<AddIcon/>} onClick={props.newUser}>
                                Nuevo usuario
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}

UserList.defaultProps = {
    users: [],
    editUser: null,
    deleteUser: null,
    newUser: null,
}
UserList.propTypes = {
    title: PropTypes.string,
    users: PropTypes.array,
    newUser: PropTypes.func,
    editUser: PropTypes.func,
    deleteUser: PropTypes.func,
};

export default UserList;
