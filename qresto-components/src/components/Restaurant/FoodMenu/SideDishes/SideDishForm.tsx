import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField } from '@mui/material'
import { FormDialog } from '@/Common/FormDialog';

export const SideDishForm = (props: any) => {
    const [sideDishName, setSideDishName] = useState(props.isNew ? '' : props.sideDish.name)
    const [sideDishDescription, setSideDishDescription] = useState(props.isNew ? '' : props.sideDish.description)

    useEffect(
        () => {
            if (props.sideDish !== null){
            setSideDishName(props.sideDish.name)
            setSideDishDescription(props.sideDish.description)}
        },[props.sideDish]
    )

    const onSubmit = () => {
        let sideDishData = {
            name: sideDishName,
            description: sideDishDescription,
            restaurant: 1
        }
        
        if (props.isNew) {
            console.log(sideDishData)
            props.onSubmit(sideDishData)
        }else {
            sideDishData["id"] = props.sideDish.id
            props.onUpdate(sideDishData)
        }
        onClose()
    }

    const clear = () => {
        setSideDishName('')
        setSideDishDescription('')
    }
    
    const onClose = () => {
        clear()
        props.onClose()
    }

    return (<>
        <FormDialog
            open={props.open}
            title={props.isNew ? 'Agregar Guarnición' : 'Editar Guarnición'}
            submitText={props.isNew ? 'Crear' : 'Actualizar'}
            closeText={'Cerrar'}
            onSubmit={onSubmit}
            onClose={onClose}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} >
                    <TextField
                        InputProps={{readOnly: props.readOnly,}}
                        margin={"dense"}
                        label="Nombre de la guarnición"
                        name="inputValueSideDish"
                        variant="outlined"
                        fullWidth
                        value={sideDishName}
                        onChange={(e) => setSideDishName(e.target.value)}>
                    </TextField>
                </Grid>

                <Grid item xs={12} sm={6} >
                    <TextField
                        InputProps={{readOnly: props.readOnly,}}
                        margin={"dense"}
                        label="Descripción"
                        name="inputValueDescription"
                        variant="outlined"
                        fullWidth
                        value={sideDishDescription}
                        onChange={(e) => setSideDishDescription(e.target.value )}>
                    </TextField>
                </Grid>
            </Grid>
        </FormDialog>
    </>);
}

SideDishForm.defaultProps =
{
    sideDish: null,
    isNew: true,
    categories: [],
    sideDishes: [],
    open: false,
    onSubmit: function () { },
    onUpdate: function () { },
    onClose: function () { },
    title: 'Title'
}

SideDishForm.propTypes =
{
    sideDish: PropTypes.object,
    isNew: PropTypes.bool,
    categories: PropTypes.array,
    sideDishes: PropTypes.array,
    open: PropTypes.bool,
    onSubmit: PropTypes.func,
    onUpdate: PropTypes.func,
    onClose: PropTypes.func,
    title: PropTypes.string
}