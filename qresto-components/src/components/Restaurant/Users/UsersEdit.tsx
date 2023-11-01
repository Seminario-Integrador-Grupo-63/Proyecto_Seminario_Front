import {Button, Dialog, DialogActions, DialogContent,
    DialogTitle, ThemeProvider, Typography} from '@mui/material'
import {theme} from "@/Common/Theme/themes";
import React from "react";


export const UsersEdit = (props: any) => {
    return (<>
        <div>
            <Dialog
                fullWidth
                maxWidth={'md'}
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">

                <DialogTitle
                    id="form-dialog-title"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: "50px",
                        backgroundColor: theme.palette.primary.main,
                    }}>
                    <Typography
                        sx={{fontSize: 'h5.fontSize', fontWeight: 'bold'}}>
                        Editar Usuario
                    </Typography>
                </DialogTitle>

                <DialogContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: ''
                    }}>
                    {props.description}
                </DialogContent>

                <DialogActions
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxSizing: 'border-box'
                    }}>
                    <ThemeProvider theme={theme}>
                        <Button
                            sx={{
                                width: '80%',
                                margin: '10px 0'
                            }}
                            color="primary"
                            variant='contained'
                            onClick={props.onSubmit}>
                            {props.submitButtonText}
                        </Button>

                        <Button
                            sx={{
                                width: '80%',
                                margin: '10px 0'
                            }}
                            onClick={props.onClose}
                            color="primary"
                            autoFocus>
                            {props.cancelButtonText}
                        </Button>
                    </ThemeProvider>
                </DialogActions>
            </Dialog>
        </div>
    </>);
}