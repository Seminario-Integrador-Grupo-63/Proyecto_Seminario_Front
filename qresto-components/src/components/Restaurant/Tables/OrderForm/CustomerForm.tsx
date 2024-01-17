import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField } from '@mui/material'
import { FormDialog } from '@/Common/FunctionalTemplates/FormDialog';

export const CustomerForm = (props: any) => {
    const [input, setInput] = useState('');

    const handleComensalChange = (event) => {
        setInput(event.target.value);
    }

    const onSubmit = () => {
        props.onSubmit(input)
        setInput('')
    }

    return (<>
        <FormDialog 
            open={props.open}
            maxWidth='sm'
            title='Crear Comensal'
            submitText="Crear"
            onClose={props.onClose}
            onSubmit={onSubmit}
            closeText='Cancelar'>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item>
                    <TextField 
                        label="Comensal"
                        value={input}
                        onChange={handleComensalChange}/>
                </Grid>
            </Grid>
        </FormDialog>
    </>)
}

CustomerForm.defaultProps =
{
    open: false,
    onSubmit: function(){},
    onClose: function(){}
}

CustomerForm.propTypes =
{
    open: PropTypes.bool,
    onSubmit: PropTypes.func,
    onClose: PropTypes.func
}


