import styles from './CustomButton.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material'

export const CustomButton = (props: any) => {

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
                onClick={props.onClick}>
                {props.children}
            </Button>
        </>);
    } else {
        return (<>
            <Button 
                sx={props.sx}
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
    sx: {}
}

CustomButton.propTypes = 
{
    color: PropTypes.object,
    children: PropTypes.any,
    onClick: PropTypes.func,
    sx: PropTypes.object
}


