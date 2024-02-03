import {Grid, IconButton, InputAdornment, MenuItem, TextField} from "@mui/material";
import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {FormDialog} from "@/Common/FormDialog";
import {Visibility, VisibilityOff} from "@mui/icons-material";


export  const UserForm = (props: any) => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
/*    const [formData, setFormData] = useState({
        inputValueUsername: '',
        inputValueEmail: '',
        inputValuePassword: '',
        inputSelectedRole: '',
    });*/
    useEffect(() => {
        if (props.user != null) {
            setUserData({
                id: props.user.id,
                user: props.user.user,
                password: props.user.password,
                email: props.user.email,
                role: props.user.role,
                restaurant: props.user.restaurant
            })
            /*setFormData(
                {
                    inputValueUsername: props.user.user,
                    inputValueEmail: props.user.email,
                    inputValuePassword: props.user.password,
                    inputSelectedRole: props.user.role
                }
            )*/
        }
    }, [props.user]);

    const [userData, setUserData] = useState({
        id: 0,
        user: '',
        password: '',
        email: '',
        role: '',
        restaurant: 0
    })
    const handleSubmit = () => {
        if (props.formAction == 1) {
            props.onEdit(userData)
        } else if (props.formAction == 2) {
            props.onDelete(userData.id)
        }
/*
        props.onSubmit(userData)
*/
    }
    return (<>
        <FormDialog
            title={props.title}
            open={props.open}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            submitText={props.submitText}
            closeText={props.closeText}
        >
            <Grid container spacing={2}>

                <Grid item xs={12} sm={12} >
                    <TextField
                        InputProps={{readOnly: props.readOnly,}}
                        margin={"dense"}
                        label="Nombre de Usuario"
                        name="inputValueUser"
                        variant="outlined"
                        fullWidth
                        value={userData.user}
                        onChange={(e) =>
                            setUserData({ ...userData, user: e.target.value })}
                    >
                    </TextField>
                </Grid>

                <Grid item xs={12} sm={12} >
                    <TextField
                        InputProps={{readOnly: props.readOnly,}}
                        margin={"dense"}
                        label="Email"
                        name="inputValueEmail"
                        variant="outlined"
                        fullWidth
                        value={userData.email}
                        onChange={(e) =>
                            setUserData({ ...userData, email: e.target.value })}
                    >
                    </TextField>
                </Grid>


                <Grid item xs={12} sm={12} >
                    <TextField
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                            readOnly: props.readOnly,
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                            </InputAdornment>,
                        }}
                        margin={"dense"}
                        label="Contraseña"
                        name="inputValuePassword"
                        variant="outlined"
                        fullWidth
                        value={userData.password}
                        onChange={(e) =>
                            setUserData({ ...userData, password: e.target.value })}
                    >
                    </TextField>
                </Grid>
{/*

                <Grid item xs={12} sm={6}>
                    <TextField
                        InputProps={{readOnly: props.readOnly,}}
                        margin={"dense"}
                        select
                        label="Rol-Permiso"
                        name="InputSelectedRole"
                        variant="outlined"
                        fullWidth
                        value={formData.inputSelectedRole}
                        onChange={(e) =>
                            setFormData({ ...formData, inputSelectedRole: e.target.value })}
                    >
                        <MenuItem value={"mozo"}>Mozo</MenuItem>
                        <MenuItem value={"admin"}>Admin</MenuItem>
                    </TextField>
                </Grid>
*/}

            </Grid>

        </FormDialog>
    </>)

}


UserForm.defaultProps = {
    submitText: "Confirmar",
    closeText: "Cancelar",
    onSubmit: function () {},
    open: false,
    onClose: function (){},
    readOnly: true,
    user: null,
    title: "Detalles de Usuario",
    formAction: 1,
    onEdit: function () {},
    onDelete: function () {},


}

UserForm.propTypes = {
    submitText: PropTypes.string,
    closeText: PropTypes.string,
    onSubmit: PropTypes.func,
    open: PropTypes.bool,
    onClose: PropTypes.func,
    readOnly: PropTypes.bool,
    user: PropTypes.object,
    title: PropTypes.string,
    formAction: PropTypes.number,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,

}

