import styles from './OrderButton.module.scss';
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Grid} from '@mui/material'
import {Typography} from '@mui/material'
import { theme } from '@/Common/Theme/themes';

export const OrderButton = (props: any) => {
    const onClick = () => {

    }

    return (<>
        <div
            className={styles.container}
            style={{
                background: theme.palette.primary.main,
                height: '15vh'
            }}
            onClick={onClick}>
            <Grid
                container
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingTop: '0.5vh',
                    paddingBottom: '0.5vh',
                    paddingRight: '3vw',
                    paddingLeft: '3vw'
                }}>
                <Grid
                    item
                    xs={8}
                    sx={{

                    }}>
                    <Typography
                        sx={{
                            color: theme.palette.secondary.main,
                            typography: {lg: 'h5', xs: 'h5'},
                            textAlign: 'left'
                        }}>
                        {'Orden ' + props.order.numCustomers + ' Personas'}
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={4}
                    sx={{
                        
                    }}>
                    <Typography
                        sx={{
                            color: theme.palette.secondary.main,
                            typography: {lg: 'subtitle1', xs: 'subtitle1'},
                            textAlign: 'right'
                        }}>
                        {'Confirmados ' + props.order.confirmedCustomers + '/' + props.order.numCustomers}
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingTop: '0.5vh',
                    paddingBottom: '0.5vh',
                    paddingRight: '3vw',
                    paddingLeft: '3vw'
                }}>
                <Grid
                    item
                    xs={6}
                    sx={{

                    }}>
                    <Typography
                        sx={{
                            color: theme.palette.secondary.main,
                            typography: {lg: 'subtitle1', xs: 'subtitle1'},
                            textAlign: 'left'
                        }}>
                        {'Estado: ' + props.order.state}
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingTop: '0.5vh',
                    paddingBottom: '0.5vh',
                    paddingRight: '3vw',
                    paddingLeft: '3vw'
                }}>
                <Grid
                    item
                    xs={6}
                    sx={{

                    }}>
                    <Typography
                        sx={{
                            color: theme.palette.secondary.main,
                            typography: {lg: 'subtitle1', xs: 'subtitle1'},
                            textAlign: 'left'
                        }}>
                        {'Total: $' + props.order.total}
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={6}
                    sx={{

                    }}>
                    <Typography
                        sx={{
                            color: theme.palette.secondary.main,
                            typography: {lg: 'subtitle1', xs: 'subtitle1'},
                            textAlign: 'right'
                        }}>
                        {props.order.createAt + ' ' + props.order.createAtTime}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    </>);
}

OrderButton.defaultProps =
{
    order: {},
    onClick: function(){}
}

OrderButton.propTypes = 
{
    order: PropTypes.object,
    onClick: PropTypes.func
}


