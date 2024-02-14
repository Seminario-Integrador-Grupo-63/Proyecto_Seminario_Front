import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material'

export const NumberField = (props) => {
    const [value, setValue] = useState(null)
    const [valueInput, setValueInput] = useState('')

    useEffect(() => {
        handleValueChange(props.value)
    }, [props.value])

    const handleValueChange = (input) => {
        if(input !== null && input !== undefined){
            if(input === ''){
                setValueInput('')
                setValue(null)
                props.onChange(null)
            } else if (isNaN(input)){
                setValueInput('0')
                setValue(0)
                props.onChange(0)
            }else if(input < 0){
                setValueInput('0')
                setValue(0)
                props.onChange(0)
            } else {
                setValueInput(input)
                setValue(parseInt(input))
                props.onChange(parseInt(input))
            }
        } else {
            setValueInput('')
            setValue(null)
        }
    }

    return (<>
        <TextField
            fullWidth={props.fullWidth}
            error={props.error}
            label={props.label}
            helperText={props.helperText}
            value={valueInput}
            onChange={(e) => handleValueChange(e.target.value)}
            type='number'
            InputProps={props.InputProps}/>
    </>)
}

NumberField.defaultProps =
{
    error: false,
    label: '',
    helperText: '',
    fullWidth: false,
    value: null,
    InputProps: {},
    onChange: function(){},
}

NumberField.propTypes =
{
    error: PropTypes.bool,
    label: PropTypes.string,
    helperText: PropTypes.string,
    fullWidth: PropTypes.bool,
    value: PropTypes.any,
    InputProps: PropTypes.any,
    onChange: PropTypes.func
}


