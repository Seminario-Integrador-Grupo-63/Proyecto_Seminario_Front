import React, {useState, useEffect} from 'react';
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

export const BasicFormDialog = (props: any) => {
    return (<>
        <div>
            <Dialog
                fullWidth
                maxWidth={props.maxWidth}
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogContent sx={{padding: 0}}>
                    {props.children}
                </DialogContent>
            </Dialog>
        </div>
    </>)
}

BasicFormDialog.defaultProps =
{
    open: false,
    children: null,
    maxWidth: 'md',
    onClose: function(){},
}

BasicFormDialog.propTypes = 
{
    open: PropTypes.bool,
    children: PropTypes.any,
    maxWidth: PropTypes.string,
    onClose: PropTypes.func,
}