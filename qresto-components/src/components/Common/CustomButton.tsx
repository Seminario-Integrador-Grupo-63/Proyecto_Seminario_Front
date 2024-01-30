import styles from './CustomButton.module.scss';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material'

export const CustomButton = (props: any) => {
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        setDisabled(props.disabled)
    }, [props.disabled])

    if(props.color != null){
        const sx={
            color: props.color.main,
            backgroundColor: props.color.contrastText,
            '&:hover': {
                backgroundColor: props.color.dark, // Change to your desired hover color
            },
            ...props.sx
        }

        return (<>
            <Button
                sx={sx}
                disabled={disabled}
                onClick={props.onClick}>
                {props.children}
            </Button>
        </>);
    } else {
        return (<>
            <Button 
                sx={props.sx}
                disabled={disabled}
                onClick={props.onClick}>
                {props.children}
            </Button>
        </>);
    }
}

CustomButton.defaultProps =
{
    color: null,
    children: null,
    onClick: function(){},
    sx: {},
    disabled: false
}

CustomButton.propTypes = 
{
    color: PropTypes.object,
    children: PropTypes.any,
    onClick: PropTypes.func,
    sx: PropTypes.object,
    disabled: PropTypes.bool
}


