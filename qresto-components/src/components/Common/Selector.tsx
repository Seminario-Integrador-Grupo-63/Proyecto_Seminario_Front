import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Select, SelectChangeEvent} from '@mui/material'
import { InputLabel} from '@mui/material'
import {FormControl} from '@mui/material'
import {MenuItem} from '@mui/material'

export const Selector = (props: any) => {
    const [value, setValue] = useState('')
    const [helperText, setHelperText] = useState('')
    const [error, setError] = useState(false)
    const [items, setItems] = useState([])

    useEffect(() => {
        setError(props.error)
    }, [props.error])

    useEffect(() => {
        if(props.items.length === 0){
            if(value !== ''){
                setValue('')
            } else {
                setItems(props.items)
            }
        } else {
            if(value !== ''){
                const valueIsInItems = props.items.some(item => item === value)
                if(valueIsInItems){
                    setItems(props.items)
                } else {
                    setValue('')
                }
            } else {
                setItems(props.items)
            }
        }
    }, [props.items, value])

    useEffect(() => {
        setHelperText(props.helperText)
    }, [props.helperText])

    const handleSelector = (event: SelectChangeEvent) => {
        setValue(event.target.value)
        props.onChange(event.target.value)
    }

    const createItem = (item, index) => {
        if(props.itemText === ''){
            return(<MenuItem key={index} value={item}>{item}</MenuItem>)
        } else {
            return(<MenuItem key={index} value={item}>{item[props.itemText]}</MenuItem>)
        }
    }

    return (<>
        <FormControl 
            error={error} 
            sx={{ minWidth: '100%' }}>
            <InputLabel id="label">{props.label}</InputLabel>
            <Select 
                label={props.label}
                value={value}
                onChange={handleSelector}>
                <MenuItem value="">
                    <em>{props.emptyOptionText}</em>
                </MenuItem>
                {items.map((item, index) => createItem(item, index))}
            </Select>
            {error && <span style={{color: '#D32F2F'}}>{helperText}</span>}
        </FormControl>
    </>)
}

Selector.defaultProps =
{
    label: 'Label',
    items: [],
    emptyOptionText: 'Seleccionar opción',
    onChange: function(){},
    itemText: '',
    helperText: 'Error',
    error: false
}

Selector.propTypes = 
{
    label: PropTypes.string,
    items: PropTypes.array,
    emptyOptionText: PropTypes.string,
    onChange: PropTypes.func,
    itemText: PropTypes.string,
    error: PropTypes.bool,
    helperText: PropTypes.string
}

