// import styles from './CustomerForm.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField } from '@mui/material'
import { FormDialog } from '@/Common/FunctionalTemplates/FormDialog';

export const CustomerForm = (props: any) => {
    return (<>
        <FormDialog 
            open={props.open}
            maxWidth='sm'
            title='Crear Comensal'
            submitText="Crear"
            onClose={props.onClose}
            closeText='Cancelar'>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item>
                    <TextField label="Comensal"/>
                </Grid>
            </Grid>
        </FormDialog>
    </>)
}

CustomerForm.defaultProps =
{
    open: false,
    onClose: function(){}
}

CustomerForm.propTypes =
{
    open: PropTypes.bool,
    onClose: PropTypes.func
}


