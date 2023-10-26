import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography
} from '@mui/material'

export const FormDialog = (props: any) => {
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
                    {props.action1Visible?
                        <Button onClick={props.onaction1}>
                            {props.action1Text}
                        </Button>
                    :
                        null
                    }
                    <Button onClick={props.onSubmit}>
                        {props.submitText}
                    </Button>
                    <Button onClick={props.onClose} autoFocus>
                        {props.closeText}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    </>);
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
    onAction1: function(){}
}

FormDialog.propTypes = 
{
    open: PropTypes.bool,
    onSubmit: PropTypes.func,
    submitText: PropTypes.string,
    onClose: PropTypes.func,
    closeText: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node,
    maxWidth: PropTypes.string,
    action1Visible: PropTypes.bool,
    action1Text: PropTypes.string,
    onAction1: PropTypes.func
}
