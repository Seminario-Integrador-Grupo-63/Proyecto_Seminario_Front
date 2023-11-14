import styles from './ButtonDish.module.scss';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {theme} from '@/Common/Theme/themes'
import {Typography } from '@mui/material';
import {Grid} from '@mui/material';
import { TruncatedText } from '@/Common/TruncatedText/TruncatedText';
import { useNumCharacters } from '@/Common/TruncatedText/utils';

export const ButtonDish = (props: any) => {
    const [isActive, setIsActive] = useState(false);
    const [height, setHeight] = useState('10vh')

    const onClick = () => {
        setIsActive(true)
        props.onClick(props.dish)
        setTimeout(() => {
            setIsActive(false);
        }, 100); 
    }

    const truncatedTextClick = (isUnfolded) => {
        if(isUnfolded) {
            setHeight('fit-content')
        } else {
            setHeight('10vh')
        }
    }

    const containerClasses = `${styles.container} ${isActive ? styles.active : ''}`;
    
    // Estos breakpoints son para establecer la cantidad 
    // de caracteres a truncar dependiendo del ancho de pantalla
    const truncatedTextBreakpoints = [
        {screenWidth: 200, m: 0.045},
        {screenWidth: 500, m: 0.07},
        {screenWidth: 700, m: 0.08},
        {screenWidth: 1300, m: 0.06},
    ]
    const truncatedNumCharacters = useNumCharacters(truncatedTextBreakpoints)
    
    const displayDish = () => {
        return(<>
            <Grid 
                item 
                xs={12}>
                <TruncatedText 
                    onClick={truncatedTextClick}
                    text={props.dish.name}
                    numCharacters={truncatedNumCharacters}
                    color={theme.palette.secondary}/>
            </Grid>
        </>)
    }

    const displayTotalPrice = () => {
        return(
            <Grid item xs={12}>
                <Typography
                    sx={{
                        color: theme.palette.secondary.main,
                        typography: {lg: 'h5', md: 'h6', sm:'subtitle1', xs: 'subtitle1'},
                        textAlign: props.totalPricePosition
                    }}>
                    {'$' + props.dish.price}
                </Typography>
            </Grid>
        )
    }

    if(props.dish !== null) {
        return (<>
            <div
                className={containerClasses}
                style={{
                    background: theme.palette.primary.main,
                    height: height
                }}
                onClick={onClick}>

                <img 
                    className={styles.imageDish}
                    src={props.dish.image}/>
                <Grid
                    container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        paddingTop: '0.5vh',
                        paddingBottom: '0.5vh',
                        paddingRight: '1vw',
                        paddingleft: '1vw'
                    }}>
                    <Grid
                        container
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}>
                        {displayDish()}
                    </Grid>

                    <Grid
                        container
                        sx={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}>
                        {props.displayTotalPrice?displayTotalPrice():null}
                    </Grid>
                </Grid>
            </div>
        </>);
    } else {
        return(<></>)
    }
}

ButtonDish.defaultProps =
{
    dish: null,
    onClick: function(){},
    displayTotalPrice: true,
    totalPricePosition: 'left'
}

ButtonDish.propTypes = 
{
    dish: PropTypes.object,
    onClick: PropTypes.func,
    displayTotalPrice: PropTypes.bool,
    totalPricePosition: PropTypes.oneOf(['right', 'left'])
}
