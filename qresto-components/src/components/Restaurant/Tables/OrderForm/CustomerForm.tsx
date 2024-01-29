import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField } from '@mui/material'
import { FormDialog } from '@/Common/FormDialog';

export const CustomerForm = (props: any) => {
    const [input, setInput] = useState('');
    const [submitText, setSubmitText] = useState('')
    const [title, setTitle] = useState('')

    const handleComensalChange = (event) => {
        setInput(event.target.value);
    }

    useEffect(() => {
        setInput(props.customer)
    }, [props.customer])

    useEffect(() => {
        if(props.isNew){
            setTitle("Crear comensal")
            setSubmitText("Crear")
        } else {
            setTitle("Editar comensal")
            setSubmitText("Actualizar")
        }
    }, [props.isNew])

    const onSubmit = () => {
        props.onSubmit(input)
        setInput('')
    }

    return (<>
        <FormDialog 
            open={props.open}
            maxWidth='sm'
            title={title}
            submitText={submitText}
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
    isNew: true,
    onSubmit: function(){},
    onClose: function(){},
    customer: ''
}

CustomerForm.propTypes =
{
    open: PropTypes.bool,
    isNew: PropTypes.bool,
    onSubmit: PropTypes.func,
    onClose: PropTypes.func,
    customer: PropTypes.string
}


