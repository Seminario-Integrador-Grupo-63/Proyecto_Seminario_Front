import {Grid, IconButton, InputAdornment, MenuItem, TextField} from "@mui/material";
import React, {useState} from "react";
import PropTypes from "prop-types";
import {FormDialog} from "@/Common/FormDialog";
import {Visibility, VisibilityOff} from "@mui/icons-material";


export  const UserForm = (props: any) => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const [formData, setFormData] = useState({
        inputValueUsername: props.user.username,
        inputValueEmail: props.user.email,
        inputValuePassword: props.user.password,
        selectedRole: props.user.role,
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
                        margin={"dense"}
                        label="Nombre de Usuario"
                        name="inputValueUser"
                        variant="outlined"
                        aria-readonly={props.readOnly}
                        fullWidth
                        value={formData.inputValueUsername}
                        onChange={(e) => setFormData({ ...formData, inputValueUsername: e.target.value })}
                    >
                    </TextField>
                </Grid>

                <Grid item xs={12} sm={6} >
                    <TextField
                        margin={"dense"}
                        label="Email"
                        name="inputValueEmail"
                        variant="outlined"
                        aria-readonly={props.readOnly}
                        fullWidth
                        value={formData.inputValueEmail}
                        onChange={(e) => setFormData({ ...formData, inputValueEmail: e.target.value })}
                    >
                    </TextField>
                </Grid>


                <Grid item xs={12} sm={6} >
                    <TextField
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{endAdornment:
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>}}
                        margin={"dense"}
                        label="Password"
                        name="inputValuePassword"
                        variant="outlined"
                        fullWidth
                        value={formData.inputValuePassword}
                        onChange={(e) => setFormData({ ...formData, inputValuePassword: e.target.value })}
                    >
                    </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        margin={"dense"}
                        select
                        id="role-selection"
                        label="Rol"
                        name="selected-role"
                        variant="outlined"
                        fullWidth
                        value={formData.selectedRole}
                        onChange={(e) => setFormData({ ...formData, selectedRole: e.target.value })}
                        style={{ marginBottom: '1rem' }}
                    >
                        <MenuItem value={"mozo"}>Mozo</MenuItem>
                        <MenuItem value={"admin"}>Admin</MenuItem>
                    </TextField>
                </Grid>

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
    user: {username: "Johhny", email: "dwad"},
    title: "Detalles de Usuario",

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
}

