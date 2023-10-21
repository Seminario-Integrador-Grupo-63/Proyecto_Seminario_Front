// import styles from './FormDialog.module.scss';
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
                    <Button onClick={props.onSubmit}>
                        Submit
                    </Button>
                    <Button onClick={props.onClose} autoFocus>
                        Close
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
    onClose: function(){},
    title: 'Title',
    children: null,
    maxWidth: 'md',

}

FormDialog.propTypes = 
{
    open: PropTypes.bool,
    onSubmit: PropTypes.func,
    onClose: PropTypes.func,
    title: PropTypes.string,
    children: PropTypes.node,
    maxWidth: PropTypes.string
}


