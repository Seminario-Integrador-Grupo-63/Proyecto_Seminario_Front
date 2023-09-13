import styles from './ButtonDish.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {theme} from '@/components/Common/Theme/themes'
import {Typography } from '@mui/material';
import {Box} from '@mui/material';

export const ButtonDish = (props: any) => {

    const onClick = () => {
        props.onClick(props.dish)
    }

    if(props.dish !== null) {
        return (<>
            <div
                className={styles.container}
                style={{
                    background: theme.palette.primary.main
                }}
                onClick={onClick}>
                <img 
                    className={styles.imageDish}
                    src={props.dish.image}/>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        paddingTop: '1vh',
                        paddingBottom: '1vh'
                    }}>
                    <Typography
                        sx={{
                            color: theme.palette.secondary.main,
                            typography: {lg: 'h5', xs: 'h6'},
                            textAlign: 'center'
                        }}>
                        {props.dish.name}
                    </Typography>

                    <Typography
                        sx={{
                            color: theme.palette.secondary.main,
                            typography: {lg: 'h6', xs: 'h6'},
                            textAlign: 'center'
                        }}>
                        ${props.dish.price}
                    </Typography>
                </Box>
            </div>
        </>);
    } else {
        return(<></>)
    }
}

ButtonDish.defaultProps =
{
    dish: null,
    onClick: function(){}
}

ButtonDish.propTypes = 
{
    dish: PropTypes.object,
    onClick: PropTypes.func
}


