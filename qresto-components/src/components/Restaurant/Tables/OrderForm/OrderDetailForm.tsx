// import styles from './OrderDetailForm.module.scss';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { 
    Grid,
    TextField
} from '@mui/material'
import { Selector } from '@/Common/Selector';
import { FormDialog } from '@/Common/FunctionalTemplates/FormDialog';

export const OrderDetailForm = (props: any) => {
    return (<>
        <FormDialog 
            open={props.open}
            submitText="Crear"
            closeText='Cancelar'
            onClose={props.onClose}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Selector label="Categoría"/>
                </Grid>

                <Grid item xs={3}>
                    <Selector label="Plato"/>
                </Grid>

                <Grid item xs={3}>
                    <Selector label="Guarnición"/>
                </Grid>

                <Grid item xs={2}>
                    <TextField type="number" label="Cantidad"/>
                </Grid>
            </Grid>
        </FormDialog>
    </>);
}

OrderDetailForm.defaultProps =
{
    open: false,
    onClose: function(){}
}

OrderDetailForm.propTypes =
{
    open: PropTypes.bool,
    onClose: PropTypes.func
}


