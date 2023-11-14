import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import {theme} from "@/Common/Theme/themes";
import {ThemeProvider, Toolbar} from "@mui/material";
import {LogoWitch} from "@/Common/Logos/LogoWitch/LogoWitch";
import {LogoQResto} from "@/Common/Logos/LogoQResto/LogoQResto";


export const Login = (props: any) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        props.onSignInSubmit({
            username: data.get('username'),
            password: data.get('password'),
          });
    };

    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs"
                   sx={{backgroundColor: theme.palette.primary.contrastText,
                   }}>
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Toolbar
                    sx={{
                        backgroundColor: theme.palette.primary.contrastText,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <LogoWitch/>
                    <LogoQResto/>
                </Toolbar>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    {props.usernameInputType === "email"?
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label={props.usernameText}
                        name="username"
                        autoComplete="email"
                        autoFocus/>
                    :null}

                    {props.usernameInputType === "username"?
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label={props.usernameText}
                        name="username"
                        autoFocus/>
                    :null}

                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    autoComplete="current-password"/>
                    {props.error && (
                        <p style={{ color: 'red' }}>Error: Invalid username or password.</p>
                    )}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            mt: 3, mb: 2 }}>
                        Ingresar
                    </Button>
                </Box>
            </Box>
        </Container>
        </ThemeProvider>
    );
}
Login.defaultProps =
{
    onSignInSubmit: function(){},
    title: "Iniciar Sesión",
    usernameText: "Usuario",
    usernameInputType: "email",
    error: false
}

Login.propTypes = 
{
    onSignInSubmit: PropTypes.func,
    title: PropTypes.string,
    usernameText: PropTypes.string,
    usernameInputType: PropTypes.oneOf(["email", "username"]),
    error: PropTypes.bool
}
