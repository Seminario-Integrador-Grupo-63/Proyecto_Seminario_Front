import {Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import React, {useState} from "react";
import PropTypes from "prop-types";
import {FormDialog} from "@/Common/FormDialog";


export  const UserForm = (props: any) => {


    const [formData, setFormData] = useState({
        selectedOption: '',
        selectedCategory: '',
        inputValueUsername: '',
        inputValueEmail: '',
        inputValuePassword: '',
        selectedRole: '',
    });

    return (<>
        <FormDialog
            title={props.title}
            open={props.open}
            onClose={props.onClose}
            onSubmit={props.onSubmit}
            submitText={props.submitText}
            closeText={props.closeText}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} >
                    <TextField
                        label="Nombre de Usuario"
                        name="inputValueUser"
                        variant="outlined"
                        aria-readonly={props.readOnly}
                        defaultValue={props.user.username}
                        fullWidth
                        value={formData.inputValueUsername}
                        onChange={(e) => setFormData({ ...formData, inputValueUsername: e.target.value })}
                    >
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <TextField
                        label="Email"
                        name="inputValueEmail"
                        variant="outlined"
                        aria-readonly={props.readOnly}
                        defaultValue={props.user.email}
                        fullWidth
                        value={formData.inputValueEmail}
                        onChange={(e) => setFormData({ ...formData, inputValueEmail: e.target.value })}
                    >
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <TextField
                        label="Password"
                        name="inputValuePassword"
                        variant="outlined"
/*
                        aria-readonly={props.readOnly}
*/
/*
                        defaultValue={props.user.password}
*/
                        fullWidth
                        value={formData.inputValuePassword}
                        onChange={(e) => setFormData({ ...formData, inputValuePassword: e.target.value })}
                    >
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputLabel id="role-label">Rol</InputLabel>
                    <Select
                        labelId="role-label"
                        id="role-selection"
                        label="Rol"
                        name="selected-role"
                        variant="outlined"
/*                        aria-readonly={props.readOnly}
                        readOnly={props.readOnly}*/
/*
                        defaultValue={props.user.role}
*/
                        fullWidth
                        value={formData.selectedRole}
                        onChange={(e) => setFormData({ ...formData, selectedRole: e.target.value })}
                        style={{ marginBottom: '1rem' }}
                    >
                        <MenuItem value={"mozo"}>Mozo</MenuItem>
                        <MenuItem value={"admin"}>Admin</MenuItem>
                    </Select>
                </Grid>

            </Grid>

        </FormDialog>
    </>)

}


UserForm.DefaultProps = {
    submitText: "Confirmar",
    closeText: "Cancelar",
    onSubmit: function () {},
    open: false,
    onClose: function (){},
    readOnly: false,
    user: {username: "Johhny", email: "dwad"},
    title: "Form",

}

UserForm.PropTypes = {
    submitText: PropTypes.string,
    closeText: PropTypes.string,
    onSubmit: PropTypes.func,
    open: PropTypes.bool,
    onClose: PropTypes.func,
    readOnly: PropTypes.bool,
    user: PropTypes.object,
    title: PropTypes.string,
}

