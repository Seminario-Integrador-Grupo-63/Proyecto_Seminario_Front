import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

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
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                {props.title}
            </Typography>
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
                label="Password"
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
                    sx={{ mt: 3, mb: 2 }}>
                    Sign In
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
    title: "Sign in",
    usernameText: "Username",
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

/**
console.log("")
console.log(":", )
console.log("  ")
*/
