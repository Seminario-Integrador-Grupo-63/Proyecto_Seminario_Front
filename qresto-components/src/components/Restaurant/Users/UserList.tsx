import React, {useState} from 'react';
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
import { theme } from '@/Common/Theme/themes';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {UserForm} from "@/Restaurant/Users/UserForm";
import {DataTable} from "@/Common/DataTable";

export const UserList = (props:any) => {

    const [open, setOpen] = useState(false);
    const [userDet, setUserDet] = useState()
    const [title, setTitle] = useState("Form")
    const [readOnly, setReadonly] = useState(true)

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setUserDet(null);
        setOpen(false);
    };

    const openForm = (event:React.MouseEvent<HTMLButtonElement>, id:number, readOnly:boolean, title:string) => {
        setOpen(true)
        setTitle(title)
        setReadonly(readOnly)
        setUserDet(userDet)
    }

/*
    function editUser(user) {
        handleClickOpen();
        setUserDet(user);
        openForm(false, "Editar Usuario");
    }
    function deleteUser(user) {
        handleClickOpen();
        setUserDet(user);
        openForm(true, "Eliminar Usuario");
    }
    function newUser(){
        handleClickOpen();
        setUserDet(null);
        openForm(false, "Nuevo Usuario");
    }
*/


    return (<>




        <React.Fragment>
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
                                    Rol
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
                            <TableRow key={row.id}>
                                <TableCell align="center">{row.user}</TableCell>
                                <TableCell align="center">{row.role}</TableCell>
                                <TableCell aria-label={"user-buttons"} align="center">
                                    <IconButton
                                        onClick={(event) =>
                                        openForm(event, row.id, false, "Editar Usuario")}
                                    >
                                        <EditIcon/>
                                    </IconButton>
                                    <IconButton
                                        onClick={(event) =>
                                            openForm(event, row.id, true, "Eliminar Usuario")
                                    }>
                                        <DeleteIcon/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                    <TableFooter>
                        <TableRow>
                            <TableCell>
                                <Button
                                    startIcon={<AddIcon/>}
                                    onClick={handleClickOpen}
                                    /*onClick={(event) =>
                                        openForm(event, null, false, "Nuevo Usuario")}*/
                                >
                                    Nuevo usuario
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableFooter>

                </Table>
            </TableContainer>

            <UserForm
            open={open}
/*
            user={userDet}
*/
            onClose={handleClose}
            readOnly={readOnly}
            title={title}
            />
        </React.Fragment>
        </>

    );
}

UserList.defaultProps = {
    title: "Form",
    users: [],
}
UserList.propTypes = {
    title: PropTypes.string,
    users: PropTypes.array,
};

