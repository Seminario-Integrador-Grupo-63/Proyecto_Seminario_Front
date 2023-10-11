import styles from './Adder.module.scss';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { CustomButton } from './CustomButton';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';

export const Adder = (props: any) => {
    const [value, setValue] = useState(props.value || 0)

    const verifyMinValue = (value) => {
        return value >= props.minValue
    }

    const increase = () => {
        setValue(value + 1)
        props.increase(value + 1)
    }

    const decreaseOnlyPositives = () => {
        if (value > 0) {
            if(verifyMinValue(value - 1)){
                setValue(value - 1);
                props.decrease(value - 1)
            }
        }
    }

    const decrease = () => {
        if(verifyMinValue(value - 1)){
            setValue(value - 1)
            props.decrease(value -1)
        }
    }

    return (<>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            }}>
            <CustomButton 
                color={props.color}
                sx={{
                    p: 0,
                    fontWeight: 'bold',
                    minWidth: '25px'
                }}
                onClick={props.allowNegatives?decrease: decreaseOnlyPositives}>
                -
            </CustomButton>
            <Typography 
                sx={{
                        color: props.color.contrastText,
                        mr: 1,
                        ml: 1
                    }}>
                    {value}
                </Typography>
            <CustomButton 
                sx={{
                    p: 0,
                    fontWeight: 'bold',
                    minWidth: '25px'
                }}
                color={props.color}
                onClick={increase}>
                +
            </CustomButton>
        </Box>
    </>);
}

Adder.defaultProps =
{
    color: null,
    value: 0,
    allowNegatives: false,
    increase: function(){},
    decrease: function(){},
    minValue: 0,
}

Adder.propTypes = 
{
    color: PropTypes.object,
    value: PropTypes.number,
    allowNegatives: PropTypes.bool,
    increase: PropTypes.func,
    decrease: PropTypes.func,
    minValue: PropTypes.number

}


