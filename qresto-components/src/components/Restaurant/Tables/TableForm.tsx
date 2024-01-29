import React from 'react';
import PropTypes from 'prop-types';
import {
    TextField,
    Grid,
    InputLabel,
} from '@mui/material'
import { Selector } from '@/Common/Selector';
import { FormDialog } from '@/Common/FormDialog';
import { useState, useEffect } from 'react';

export const TableForm = (props: any) => {
    // const [tableNumber, setTableNumber] = useState('')
    // const [tableSector, setTableSector] = useState('')
    const [sectors, setSectors] = useState([])
    const [selectedSector, setSelectedSector] = useState(null)
    const [errorSectorSelector, setErrorSectorSelector] = useState(false)
    const [helperTextSectorSelector, setHelperTextSectorSelector] = useState('')
    const [number, setNumber] = useState(null)
    const [errorNumber, setErrorNumber] = useState(false)
    const [helperTextNumber, setHelperTextNumber] = useState('')
    const [numberInput, setNumberInput] = useState('')

    useEffect(() =>{
        console.log(' ')
        console.log('TableForm useEffect')
        console.log('props.table: ', props.table)
        if(props.table != null){
            if(props.isNew == false){
                setNumberInput(props.table.number)
                setSelectedSector(props.table.sector)
            }
        }
    },[props.table, props.isNew])

    useEffect(() => {
        if (props.sectors !== null){
            setSectors(props.sectors)
        }
    }, [props.sectors])

    // const loadSections = () => {
    //     let sectionsList = []
    //     props.sections.forEach(section => {
    //         sectionsList.push(section.id)
    //     })
    //     return sectionsList
    // }


    const handleNumberChange = (event) => {
        console.log(' ')
        console.log('TableForm ')
        console.log(': ', )
        if(event.target.value === ''){
            setNumberInput('')
            setNumber(null)
        } else if (isNaN(event.target.value)){
            setNumberInput('1')
            setNumber(1)
        }else if(event.target.value < 1){
            setNumberInput('1')
            setNumber(1)
        } else {
            setNumberInput(event.target.value)
            setNumber(parseInt(event.target.value))
        }
    }

    // const handleNumber=(event)=>{
    //     setTableNumber(event.target.value)
    // }
    // const handleSection=(event)=>{
    //     setTableSector(event.target.value)
    // }
    // const deleteCategory=()=>{
    //     props.onDelete(props.table.id)
    // }
    // const updateCategory=()=>{
    //     let table = null
    //     if (props.isNew){
    //         table = {
    //             section: tableSector
    //         }
    //     }
    //     else{
    //         table = {
    //             id: props.table.id,
    //             section: tableSector
    //         }
    //     }
    //     props.onUpdate(table)
    // }

    const handleSectorChange = (sector) => {
        setSelectedSector(sector)
    }

    const verifySubmit = () => {
        let isReady = true

        if(number === null){
            isReady = false
            setErrorNumber(true)
            setHelperTextNumber("Este campo es obligatorio")
        } else {
            setErrorNumber(false)
            setHelperTextNumber("")
        }

        if (selectedSector === null){
            setErrorSectorSelector(true)
            setHelperTextSectorSelector("Seleccione un sector")
            isReady = false
        } else {
            setErrorSectorSelector(false)
            setHelperTextSectorSelector("")
        }

        return isReady
    }

    const submit = () => {
        console.log(' ')
        console.log('TableForm submit()')
        console.log('selectedSector: ', selectedSector)
        console.log('number: ', number)
        if(verifySubmit()){
            const table = {
                restaurant: props.restaurantId,
                sector: selectedSector.id,
                number: number,
            }
            props.onSubmit(table)
        }
    }

    return (
        <FormDialog
            title={props.isNew ? "Nueva Mesa" : "Editar Mesa"}
            open={props.open}
            closeText='Cerrar'
            onClose={props.onClose}
            submitText={props.isNew ? "Crear" : "Actualizar"}
            onSubmit={submit}
            maxWidth='sm'>
            
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <TextField 
                        type="number" 
                        sx={{marginTop:2}}
                        label="Numero"
                        error={errorNumber}
                        helperText={helperTextNumber}
                        InputProps={{inputProps: {min: 1}}}
                        value={numberInput}
                        onChange={handleNumberChange}/>
                </Grid>
                <Grid
                    item xs={6}
                    sx={{marginTop:2}}>
                    <Selector 
                        label="Sector"
                        items={sectors}
                        value={selectedSector}
                        error={errorSectorSelector}
                        helperText={helperTextSectorSelector}
                        itemText={'name'}
                        onChange={handleSectorChange}/>
                </Grid>
            </Grid>      
        </FormDialog>
    )
}

TableForm.defaultProps =
{
    isNew: false,
    open: false,
    onClose: function(){},
    onSubmit: function(){},
    table: null,
    sectors: [],
    restaurantId: 0,
}

TableForm.propTypes = 
{
    isNew: PropTypes.bool,
    open: PropTypes.bool,
    onSubmit: PropTypes.func,
    onClose: PropTypes.func,
    table: PropTypes.object,
    sectors: PropTypes.array,
    restaurantId: PropTypes.number
}