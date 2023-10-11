import styles from './ButtonCategory.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {Typography } from '@mui/material';
import {theme} from '@/Common/Theme/themes'

export const ButtonCategory = (props: any) => {

    const onClick = () => {
        props.onClick(props.category)
    }

    if(props.category !== null) {
        return (<>
            <div
                className={styles.categoryButton}
                style={{
                    background: props.category.image === ''?
                        theme.palette.primary.main:
                        'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(' + props.category.image + ')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
                onClick={onClick}>
                <Typography
                    sx={{
                        color: theme.palette.secondary.main,
                        typography: {lg: 'h3', xs: 'h5', md: 'h4'},
                        textAlign: 'center'
                    }}>
                    {props.category.name}
                </Typography>
            </div>
        </>);
    } else {
        return(<></>)
    }
}

ButtonCategory.defaultProps =
{
    category: null,
    onClick: function(){}
}

ButtonCategory.propTypes = 
{
    category: PropTypes.object,
    onClick: PropTypes.func
}
/**
console.log(" ")
console.log("ButtonCategory")
console.log(": ", )
*/

