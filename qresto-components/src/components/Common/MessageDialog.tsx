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
import { themeMessageDialog } from './Theme/themeMessageDialog';

export const MessageDialog = (props: any) => {
    return (<>
        <div>
            <Dialog
                fullWidth
                maxWidth={props.maxWidth}
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
                        textAlign: 'center'
                    }}>
                    <Typography
                        sx={{
                            fontSize: 'h5.fontSize',
                            fontWeight: 'bold',
                        }}>
                         {props.title}
                    </Typography>
                </DialogTitle>
                
                <DialogContent                    
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        
                    }}>
                    <Typography 
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: themeMessageDialog.palette.primary.light,
                            fontSize: 'subtitle2.fontSize'
                        }}>
                        {props.description}
                    </Typography>
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

                        {props.cancelButtonVisible?
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
                        :
                            null}
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
    maxWidth: 'xs',
    submitButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar',
    cancelButtonVisible: true
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
    cancelButtonVisible: PropTypes.bool,
    cancelButtonText: PropTypes.string
}


