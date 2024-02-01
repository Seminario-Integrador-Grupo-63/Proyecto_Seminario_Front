import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField } from '@mui/material'
import { FormDialog } from '@/Common/FormDialog';

export const SectorForm = (props: any) => {
    const [input, setInput] = useState('');
    // const [submitText, setSubmitText] = useState('')
    // const [title, setTitle] = useState('')

    const handleSectorChange = (event) => {
        setInput(event.target.value)
    }

    const onSubmit = () => {
        props.onSubmit({
            name: input,
            restaurant: props.restaurantId
        })
        setInput('')
    }

    return (<>
        <FormDialog 
            open={props.open}
            maxWidth='sm'
            title={'Crear sector'}
            submitText={'Crear'}
            onClose={props.onClose}
            onSubmit={onSubmit}
            closeText='Cancelar'>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item>
                    <TextField 
                        label="Nombre"
                        value={input}
                        onChange={handleSectorChange}/>
                </Grid>
            </Grid>
        </FormDialog>
    </>)
}

SectorForm.defaultProps =
{
    open: false,
    onSubmit: function(){},
    onClose: function(){},
    restaurantId: 0
}

SectorForm.propTypes =
{
    open: PropTypes.bool,
    onSubmit: PropTypes.func,
    onClose: PropTypes.func,
    restaurantId: PropTypes.number
}