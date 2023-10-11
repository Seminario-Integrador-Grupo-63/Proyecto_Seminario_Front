// import styles from './MessageDialog.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { FormDialog } from './FunctionalTemplates/FormDialog';
import { } from '@mui/material'


export const MessageDialog = (props: any) => {
    return (<>
        <FormDialog
            open={props.open}
            onClose={props.onClose}
            onSubmit={props.onSubmit}>
            <h1>MessageDialog</h1>
        </FormDialog>
    </>);
}

MessageDialog.defaultProps =
{
    open: false,
    onClose: function(){},
    onSubmit: function(){}
}

MessageDialog.propTypes =
{
    open: PropTypes.bool,
    onClose: PropTypes.func,
    onSubmit: PropTypes.func
}


