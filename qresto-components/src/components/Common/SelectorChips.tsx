import React, {useState} from 'react'
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

function getStyles(name: string, selectedItem: readonly string[], theme: Theme) {
  return {
    fontWeight:
      selectedItem.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const SelectorChips = (props: any) => {
    const theme = useTheme();
    const [selectedItem, setSelectedItem] = useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof selectedItem>) => {
        const {
        target: { value },
        } = event;
        setSelectedItem(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
        <FormControl sx={{ width: '100%' }}>
            <InputLabel id="selector-chips-label">{props.label}</InputLabel>
            <Select
                labelId="selector-chips-label"
                id="selector-chips-chip"
                multiple
                value={selectedItem}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label={props.label} />}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                        <Chip key={value} label={value} />
                    ))}
                    </Box>
                )}
                MenuProps={MenuProps}>
                {props.items.map((item) => (
                    <MenuItem
                    key={item}
                    value={item}
                    style={getStyles(item, selectedItem, theme)}>
                    {item}
                </MenuItem>
            ))}
            </Select>
        </FormControl>
        </div>
    );
}

SelectorChips.defaultProps =
{
    label: 'Label',
    items: []
}

SelectorChips.propTypes = 
{
    label: PropTypes.string,
    items: PropTypes.array,

}   