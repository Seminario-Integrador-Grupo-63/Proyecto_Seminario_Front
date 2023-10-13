// import styles from './MessageDialog.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
    ThemeProvider
} from '@mui/material'
import {theme} from '@/Common/Theme/themes'

export const MessageDialog = (props: any) => {
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
                        marginTop: "50px"
                    }}>
                    <Typography
                        sx={{
                            fontSize: 'h5.fontSize',
                            fontWeight: 'bold'
                        }}>
                         {props.title}
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

MessageDialog.defaultProps =
{
    open: false,
    onSubmit: function(){},
    onClose: function(){},
    title: 'Title',
    description: 'Description',
    maxWidth: 'sm',
    submitButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar'
}

MessageDialog.propTypes =
{
    open: PropTypes.bool,
    onSubmit: PropTypes.func,
    onClose: PropTypes.func,
    title: PropTypes.string,
    description: PropTypes.string,
    maxWidth: PropTypes.string,
    submitButtonText: PropTypes.string,
    cancelButtonText: PropTypes.string
}


