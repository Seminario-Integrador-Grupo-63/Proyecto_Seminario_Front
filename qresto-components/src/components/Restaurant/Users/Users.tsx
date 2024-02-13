import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {DataTable} from "@/Common/DataTable/DataTable";
import {UserForm} from "@/Restaurant/Users/UserForm";
import {Button, IconButton} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const Users = (props: any) => {

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("Form")
    const [readOnly, setReadonly] = useState(true)
    const [selectedUser, setSelectedUser] = useState()
    const [onSubmit, setOnSubmit] = useState()
    const [formAction, setFormAction] = useState(0)

    useEffect(() => {
        setOpen(props.userFormOpen)
    }, [props.userFormOpen]);

    const handleClose = () => {
        setTitle(" ")
        setReadonly(false)
        setSelectedUser(null);
        setOpen(false);
    };

    // Users
    const [users, setUsers] = useState([])
    useEffect(() => {
        setUsers(props.users)
    }, [props.users]);


    const createHeaders = () => {
        return [
            {label: "Usuario", id: "user"},
            {label: "Email", id: "email"},
        ]
    }
    const createRows = (users) => {
        return users.map(u => {
            return {
                id: u.id,
                user: u.user,
                password: u.password,
                email: u.email,
                role: u.role,
                restaurant: u.restaurant
            }
        })
    }

    const createForm = () => {
        setOpen(true)
        setReadonly(false)
        setTitle("Crear Usuario")
        setSelectedUser(null)
        setFormAction(1)

        /*
                setOnSubmit(props.onCreate)
        */
    }
    const editForm = (row) => {
        setOpen(true)
        setReadonly(false)
        setTitle("Editar Usuario")
        setSelectedUser(row)
        setFormAction(2)
/*
        setOnSubmit(props.onEdit)
*/
    }
    const deleteForm = (row) => {
        setOpen(true)
        setReadonly(true)
        setTitle("Eliminar Usuario")
        setSelectedUser(row)
        setFormAction(3)
/*
        setOnSubmit(props.onDelete)
*/
    }


    return <>
        <Button
            startIcon={<AddIcon/>}
            onClick={createForm}
        >
            Nuevo usuario
        </Button>

        <DataTable headers={createHeaders()}
                   rows={createRows(users)}
                   onEdit={editForm}
                   onDelete={deleteForm}

        />

        <UserForm
            open={open}
            user={selectedUser}
            onClose={handleClose}
            onSubmit={onSubmit}
            onEdit={props.onEdit}
            onDelete={props.onDelete}
            onCreate={props.onCreate}
            readOnly={readOnly}
            title={title}
            formAction={formAction}
        />
    </>;
}

Users.defaultProps =
{
    users: [],
    onDelete: function (){},
    onEdit: function () {},
    onCreate: function () {},
    userFormOpen: false,
}

Users.propTypes = 
{
    users: PropTypes.array,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    onCreate: PropTypes.func,
    userFormOpen: PropTypes.bool,
}