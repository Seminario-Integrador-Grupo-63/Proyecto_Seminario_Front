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

export const FormDialog = (props: any) => {
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
                    id="form-dialog-title">
                    <Typography
                        sx={{
                            fontSize: 'h5.fontSize',
                            fontWeight: 'bold'
                        }}>
                         {props.title}
                    </Typography>
                </DialogTitle>

                <DialogContent>
                    {props.children}
                </DialogContent>

                <DialogActions>
                    <ThemeProvider theme={theme}>
                        {props.action1Visible?
                            <Button onClick={props.onAction1}
                                    color='primary'>
                                {props.action1Text}
                            </Button>
                        :
                            null
                        }
                        {props.submitVisible?
                            <Button
                                disabled={props.isInvalid}
                                onClick={props.onSubmit}
                                color='primary'>
                                {props.submitText}
                            </Button>
                        :
                            null
                        }
                    </ThemeProvider>
                    <Button onClick={props.onClose} autoFocus
                            sx={{color: 'black'}}>
                        {props.closeText}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    </>)
}

FormDialog.defaultProps =
{
    open: false,
    onSubmit: function(){},
    submitText: 'Submit',
    onClose: function(){},
    closeText: 'Close',
    title: 'Title',
    children: null,
    maxWidth: 'md',
    action1Visible: false,
    action1Text: 'Action 1',
    onAction1: function(){},
    submitVisible: true,
    isInvalid: false
}

FormDialog.propTypes = 
{
    open: PropTypes.bool,
    onSubmit: PropTypes.func,
    submitText: PropTypes.string,
    onClose: PropTypes.func,
    closeText: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.any,
    maxWidth: PropTypes.string,
    action1Visible: PropTypes.bool,
    action1Text: PropTypes.string,
    onAction1: PropTypes.func,
    submitVisible: PropTypes.bool,
    isInvalid: PropTypes.bool
}