import styles from './ButtonOrderDetails.module.scss';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {theme} from '@/Common/Theme/themes'
import {
    Typography,
    Grid,
    IconButton,
} from '@mui/material';
import { TruncatedText } from '@/Common/TruncatedText/TruncatedText';
import { useNumCharacters } from '@/Common/TruncatedText/utils';
import CloseIcon from '@mui/icons-material/Close';

export const ButtonOrderDetails = (props: any) => {
    const fixedHeight = '18vh'
    const [isActive, setIsActive] = useState(false);
    const [height, setHeight] = useState(fixedHeight)

    const onClick = () => {
        setIsActive(true)
        props.onClick(props.dish)
        setTimeout(() => {
            setIsActive(false);
        }, 100); 
    }

    const onDelete = () => {
        props.onDelete(props.dish, props.sideDish)
    }

    const truncatedTextClick = (isUnfolded) => {
        if(isUnfolded) {
            setHeight('fit-content')
        } else {
            setHeight(fixedHeight)
        }
    }

    const containerClasses = `${styles.container} ${isActive ? styles.active : ''}`;
    
    // Estos breakpoints son para establecer la cantidad 
    // de caracteres a truncar dependiendo del ancho de pantalla
    const truncatedTextBreakpoints = [
        {screenWidth: 200, m: 0.045},
        {screenWidth: 500, m: 0.055},
        {screenWidth: 700, m: 0.04},
        {screenWidth: 1300, m: 0.047},
    ]
    const truncatedNumCharacters = useNumCharacters(truncatedTextBreakpoints)

    const displayDish = () => {
        return(<>
            <Grid
                container
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                <Grid 
                    item 
                    xs={9}>
                    <TruncatedText 
                        onClick={truncatedTextClick}
                        typography={{lg: 'h5', md: 'h6', sm:'h5', xs: 'subtitle1'}}
                        text={props.dish.name}
                        numCharacters={truncatedNumCharacters}
                        color={theme.palette.secondary}/>
                </Grid>
                <Grid 
                    item 
                    xs={3}
                    sx={{
                        paddingRight: '1vw'
                    }}>
                    <Typography
                        sx={{
                            color: theme.palette.secondary.main,
                            textAlign: 'right',
                            typography: {lg: 'h5', md: 'h6', sm:'h5', xs: 'subtitle1'}
                        }}>
                        {'$' + props.dish.price}
                    </Typography>
                </Grid>
            </Grid>
        </>)
    }

    const displaySideDish = () => {

        return(
            <Grid
                container
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                <Grid 
                    item 
                    xs={9}>
                    <TruncatedText 
                        onClick={truncatedTextClick}
                        text={'Guarnición: ' + props.sideDish.name}
                        typography={{lg: 'h6', md: 'h6', sm: 'h6', xs: 'subtitle2'}}
                        numCharacters={truncatedNumCharacters}
                        color={theme.palette.secondary}/>
                </Grid>
                <Grid 
                    item 
                    xs={3}
                    sx={{
                        paddingRight: '1vw'
                    }}>
                    <Typography
                        sx={{
                            color: theme.palette.secondary.main,
                            textAlign: 'right',
                            typography: {lg: 'h6', md: 'h6', sm: 'h6', xs: 'subtitle2'}
                        }}>
                        {'$' + props.sideDish.extraPrice}
                    </Typography>
                </Grid>
            </Grid>
        )
    }

    const displayTotalPrice = () => {
        return(
            <Grid
                container
                sx={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                <Grid 
                    item 
                    xs={12}
                    sx={{
                        paddingRight: '1vw'
                    }}>
                    <Typography
                        sx={{
                            color: theme.palette.secondary.main,
                            typography: {lg: 'h5', md: 'h6', sm:'h6', xs: 'subtitle1'},
                            textAlign: 'right'
                        }}>
                        {'$' + props.orderDetail.subTotal}
                    </Typography>
                </Grid>
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
                    {displayDish()}
                    {props.sideDish != null?displaySideDish():null}
                    {displayTotalPrice()}
                </Grid>
                {props.deleteButtonVisible?
                    <Grid>
                        <IconButton
                            onClick={onDelete}>
                            <CloseIcon 
                                fontSize='small'
                                sx={{
                                    color: theme.palette.secondary.main,
                                }}/>
                        </IconButton>
                    </Grid>
                :
                    null
                }
            </div>
        </>);
    } else {
        return(<></>)
    }
}

ButtonOrderDetails.defaultProps =
{
    dish: null,
    sideDish: null,
    onClick: function(){},
    displayTotalPrice: true,
    totalPricePosition: 'left',
    onDelete: function(){},
    deleteButtonVisible: false,
    orderDetail: null
}

ButtonOrderDetails.propTypes = 
{
    dish: PropTypes.object,
    sideDish: PropTypes.object,
    onClick: PropTypes.func,
    displayTotalPrice: PropTypes.bool,
    totalPricePosition: PropTypes.oneOf(['right', 'left']),
    onDelete: PropTypes.func,
    deleteButtonVisible: PropTypes.bool,
    orderDetail: PropTypes.object
}

