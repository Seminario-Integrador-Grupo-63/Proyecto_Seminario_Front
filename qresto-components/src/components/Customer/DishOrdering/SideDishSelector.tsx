
import styles from './SideDishSelector.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import { theme } from '@/components/Common/Theme/themes';
import { Checkbox } from '@mui/material';
import {FormGroup} from '@mui/material'
import {FormControlLabel} from '@mui/material'

export const SideDishSelector = (props: any) => {
    
    const createCheckbox = (sideDish) => {
        return(
            <FormControlLabel 
                key={sideDish.id}
                control={<Checkbox />} 
                label={sideDish.name} />
        )
    }

    return (<>
        <Grid 
            container
            sx={{
                display: 'flex',
                flexDirection: 'column'
            }}>
            <Typography
                variant={'h6'}
                sx={{
                    fontWeight: 'bold'
                }}>
                {props.title}
            </Typography>
            <FormGroup>
                {props.sideDishes.map(sideDish => createCheckbox(sideDish))}
            </FormGroup>
        </Grid>
    </>);

}

SideDishSelector.defaultProps =
{
    sideDishes: [],
    title: 'Title'
}

SideDishSelector.propTypes = 
{
    sideDishes: PropTypes.array,
    title: PropTypes.string
}

/**
console.log(" ")
console.log("SideDishSelector")
console.log(": ", )
*/
