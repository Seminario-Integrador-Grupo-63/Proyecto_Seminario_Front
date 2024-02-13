import React, {useState, useEffect} from 'react'
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import PropTypes from 'prop-types';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
};

export const SelectorChips = (props: any) => {
    const theme = useTheme();
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
        setSelectedItems(props.values)
    }, [props.values])

    const getStylesString = (name, selectedItems, theme: Theme) => {
        return {
            fontWeight:
            selectedItems.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
        }
    }


    const getStylesObject = (item, selectedItems, theme: Theme) => {
        let selected = selectedItems.some(selectedItem => {
            if(selectedItem[props.itemText] === item[props.itemText]){
                return true
            }
        })

        if(selected){
            return {
                fontWeight: 'bold',
                backgroundColor: '#EDF4FB'
            };
        } else {
            return {
                fontWeight: 'normal',
                backgroundColor: '#FFFFFF'
            };
        }
    }

    const handleChangeString = (event) => {
        selectedItems.findIndex(item => {

        })
        let values = event.target.value
        setSelectedItems(values);
    }

    const handleChangeObject = (event) => {
        let values = event.target.value
        const repeatedObjects = values.filter((value, index) =>
            values.findIndex((item) => item[props.itemText] === value[props.itemText]) !== index
        );

        let selectedItemsAux = []
        if (repeatedObjects.length > 0){1
            values.forEach(value => {
                if(value[props.itemText] !== repeatedObjects[0][props.itemText]){
                    selectedItemsAux.push(value)
                }
            })

        } else {
            selectedItemsAux = values
        }

        props.onChange(selectedItemsAux)
        setSelectedItems(selectedItemsAux)
    }

    const renderStringItems = () => {
        return(
            <Select
                labelId="selector-chips-label"
                id="selector-chips-chip"
                multiple
                value={selectedItems}
                onChange={handleChangeString}
                input={<OutlinedInput id="select-multiple-chip" label={props.label} />}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} />
                        ))}
                    </Box>
                )}
                MenuProps={MenuProps}>
                <MenuItem value="">
                    <em>{props.emptyOptionText}</em>
                </MenuItem>
                {props.items.map((item, index) => (
                    <MenuItem
                        key={'item' + index}
                        value={item}
                        style={getStylesString(item, selectedItems, theme)}>
                        {item}
                    </MenuItem>
                ))}
            </Select>
        )
    }

    const renderObjectItems = () => {
        return(
            <Select
                labelId="selector-chips-label"
                id="selector-chips-chip"
                multiple
                value={selectedItems}
                onChange={handleChangeObject}
                input={<OutlinedInput id="select-multiple-chip" label={props.label} />}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value, index) => (
                            <Chip key={'chip' + index} label={value[props.itemText]} />
                        ))}
                    </Box>
                )}
                MenuProps={MenuProps}>
                <MenuItem value="">
                    <em>{props.emptyOptionText}</em>
                </MenuItem>
                {props.items.map((item, index) => (
                    <MenuItem
                        key={'item' + index}
                        value={item}
                        style={getStylesObject(item, selectedItems, theme)}>
                        {item[props.itemText]}
                    </MenuItem>
                ))}
            </Select>
        )
    }

    const renderItems = () => {
        if(props.itemText !== ''){
            return(renderObjectItems())
        } else {
            return(renderStringItems())
        }
    }

    return (
        <div>
            <FormControl sx={{ width: '100%' }}>
                <InputLabel id="selector-chips-label">{props.label}</InputLabel>
                {renderItems()}
            </FormControl>
        </div>
    )
}

SelectorChips.defaultProps =
{
    label: 'Label',
    emptyOptionText: 'Seleccionar opción',
    items: [],
    itemText: '',
    values: [],
    onChange: function(){}
}

SelectorChips.propTypes = 
{
    emptyOptionText: PropTypes.string,
    label: PropTypes.string,
    items: PropTypes.array,
    itemText: PropTypes.string,
    values: PropTypes.array,
    onChange: PropTypes.func
}   