import React from 'react';
import PropTypes from 'prop-types';
import {
    TextField,
    Grid,
    InputLabel,
} from '@mui/material'
import { Selector } from '@/Common/Selector';
import { FormDialog } from '@/Common/FunctionalTemplates/FormDialog';
import { useState, useEffect } from 'react';



export const TableForm = (props: any) => {

    const [tableNumber, setTableNumber] = useState('')
    const [tableSection, setTableSection] = useState('')

    useEffect(() =>{
        if(props.table != null){
            if(props.isNew == false){
                setTableNumber(props.table.id)
                setTableSection(props.table.section)
            }
        }
    },[props.table])

    const loadSections = () => {
        let sectionsList = []
        props.sections.forEach(section => {
            sectionsList.push(section.id)
        })

    // const handleNumber=(event)=>{
    //     setTableNumber(event.target.value)
    // }
    const handleSection=(event)=>{
        setTableSection(event.target.value)
    }
    const deleteCategory=()=>{
        props.onDelete(props.table.id)
    }
    const updateCategory=()=>{
        let table = null
        if (props.isNew){
            table = {
                section: tableSection
            }
        }
        else{
            table = {
                id: props.table.id,
                section: tableSection
            }
        }
        props.onUpdate(table)
    }

    return (
        <FormDialog
            title={props.isNew ? "Nueva Mesa" : "Editar Mesa"}
            open={props.open}
            closeText='Cerrar'
            onClose={props.onClose}
            submitText={props.isNew ? "Crear" : "Actualizar"}
            //onSubmit={props.onUpdate}
            maxWidth='sm'>
            
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                <Grid item xs={6}>
                    <TextField 
                        sx={{marginTop:1}}
                        id="TableNumber"
                        label="Número"
                        variant="outlined"
                        value={tableNumber}
                        //onChange={handleNumber}
                        />
                </Grid>
                <Grid item xs={6}>
                    <InputLabel id="select-label-section">Sección</InputLabel>
                    <Selector
                            label={'Categoría'} 
                            items={loadSections()}
                    />
                </Grid>
            </Grid>      
        </FormDialog>
    );
}

TableForm.defaultProps =
{
    isNew: false,
    open: false,
    onUpdate: function(){},
    onClose: function(){},
    onDelete: function(){},
    table: null,
    sections: null,
}

TableForm.propTypes = 
{
    isNew: PropTypes.bool,
    open: PropTypes.bool,
    onUpdate: PropTypes.func,
    onClose: PropTypes.func,
    onDelete: PropTypes.func,
    table: PropTypes.object,
    sections: PropTypes.array,
}