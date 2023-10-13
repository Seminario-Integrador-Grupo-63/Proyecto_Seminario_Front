
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import { Checkbox } from '@mui/material';
import {FormGroup} from '@mui/material'
import {FormControlLabel} from '@mui/material'
import { useState, useEffect} from 'react'

export const SideDishSelector = (props: any) => {
    const initialCheckedSideDishes = {};
    props.sideDishes.forEach(sideDish => {
        initialCheckedSideDishes[sideDish.id] = false;
    });

    const initialEnableCheckboxConfiguration = {}
    props.sideDishes.forEach(sideDish => {
        initialEnableCheckboxConfiguration[sideDish.id] = true;
    });

    const [checkedSideDishes, setCheckedSideDishes] = useState(initialCheckedSideDishes);
    const [enableCheckboxConfiguration, setEnableCheckboxConfiguration] = useState(initialEnableCheckboxConfiguration);

    const handleCheckboxChange = (sideDish) => {
        setCheckedSideDishes((prevCheckedSideDishes) => ({
            ...prevCheckedSideDishes,
            [sideDish.id]: !prevCheckedSideDishes[sideDish.id],
        }));
    };

    useEffect(() => {
        let sideDishId = -1
        for(let id in checkedSideDishes){
            if(checkedSideDishes[id]){
                sideDishId = parseInt(id)
                break
            }
        }
        props.onCheckSideDish(sideDishId)
        handleEnableCheckboxConfiguration()
    }, [checkedSideDishes])

    const handleEnableCheckboxConfiguration = () => {
        for(let id1 in checkedSideDishes){
            if(checkedSideDishes[id1]){
                for(let id2 in enableCheckboxConfiguration){
                    if(id2 === id1){
                        enableCheckboxConfiguration[id2] = true
                    } else {
                        enableCheckboxConfiguration[id2] = false
                    }
                }
                return
            }
        }
        for(let id2 in enableCheckboxConfiguration){
            enableCheckboxConfiguration[id2] = true
        }
    }

    const createCheckbox = (sideDish) => {

        return(
            <FormControlLabel 
                key={sideDish.id}
                checked={checkedSideDishes[sideDish.id] || false}
                onChange={() => handleCheckboxChange(sideDish)}
                control={<Checkbox />} 
                disabled={!enableCheckboxConfiguration[sideDish.id]}
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
    title: 'Title',
    onCheckSideDish: function(){}
}

SideDishSelector.propTypes = 
{
    sideDishes: PropTypes.array,
    title: PropTypes.string,
    onCheckSideDish: PropTypes.func
}

/**
console.log(" ")
console.log("SideDishSelector")
console.log(": ", )
*/
