import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {UserList} from "@/Restaurant/Users/UserList";
import {Box} from "@mui/material";
import {DataTable} from "@/Common/DataTable";
import {UserForm} from "@/Restaurant/Users/UserForm";

export const Users = (props: any) => {

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("Form")
    const [readOnly, setReadonly] = useState(true)
    const [selectedUser, setSelectedUser] = useState()
    const [onSubmit, setOnSubmit] = useState()


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
            {label: "Usuario", key: "user"},
            {label: "Email", key: "email"},
        ]
    }
    const createRows = (users) => {
        return users.map(u => {
            return {
                id: u.id,
                user: u.user,
                email: u.email,
                password: u.password,
            }
        })
    }

    const createForm = () => {
        setOpen(true)
        setReadonly(false)
        setTitle("Crear Usuario")
        // No selected User
        setOnSubmit(props.onCreate)
    }
    const editForm = (row) => {
        setOpen(true)
        setReadonly(false)
        setTitle("Editar Usuario")
        setSelectedUser(row)
        setOnSubmit(props.onEdit)
    }
    const deleteForm = (row) => {
        setOpen(true)
        setReadonly(true)
        setTitle("Eliminar Usuario")
        setSelectedUser(row)
        setOnSubmit(props.onDelete)
    }


    return <>
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
            readOnly={readOnly}
            title={title}
        />
    </>;
}

Users.defaultProps =
{
    users: [],
    onDelete: function (){},
    onEdit: function () {},
    onCreate: function () {},
}

Users.propTypes = 
{
    users: PropTypes.array,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    onCreate: PropTypes.func,
}