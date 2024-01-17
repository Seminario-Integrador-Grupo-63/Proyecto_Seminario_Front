import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Select, SelectChangeEvent} from '@mui/material'
import { InputLabel} from '@mui/material'
import {FormControl} from '@mui/material'
import {MenuItem} from '@mui/material'

export const Selector = (props: any) => {
    const [value, setValue] = useState('')

    const handleSelector = (event: SelectChangeEvent) => {
        setValue(event.target.value);
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
        <FormControl sx={{ minWidth: '100%' }}>
            <InputLabel id="label">{props.label}</InputLabel>
            <Select 
                label={props.label}
                value={value}
                onChange={handleSelector}>
                <MenuItem value="">
                    <em>{props.emptyOptionText}</em>
                </MenuItem>
                {props.items.map((item, index) => createItem(item, index))}
            </Select>
        </FormControl>
    </>);
}

Selector.defaultProps =
{
    label: 'Label',
    items: [],
    emptyOptionText: 'Seleccionar opción',
    onChange: function(){},
    itemText: ''
}

Selector.propTypes = 
{
    label: PropTypes.string,
    items: PropTypes.array,
    emptyOptionText: PropTypes.string,
    onChange: PropTypes.func,
    itemText: PropTypes.string
}


