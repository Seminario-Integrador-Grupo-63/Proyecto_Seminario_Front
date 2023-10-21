import styles from './PreparationTimeField.module.scss';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {TextField} from '@mui/material'

export const PreparationTimeField = (props: any) => {
    const [preparationTime, setPreparationTime] = useState('');

    const handlePreparationTimeChange = (event) => {
        const newValue = event.target.value;
    
        // Check if the entered value is a non-negative number
        if (/^\d+$/.test(newValue) || newValue === '') {
            setPreparationTime(newValue);
        }
    };

    useEffect(() => {
        props.onChange(preparationTime)
    }, [preparationTime])

    return (<>
        <TextField
            label={'Tiempo de Preparación (Minutos)'}
            type='number'
            value={preparationTime}
            onChange={handlePreparationTimeChange}
            inputProps={{
                min: 0,
            }}
            fullWidth/>
    </>);
}

PreparationTimeField.defaultProps =
{
    onChange: function(){}
}

PreparationTimeField.propTypes = 
{
    onChange: PropTypes.func
}


