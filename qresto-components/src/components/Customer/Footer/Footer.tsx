import styles from './CustomAppBar.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {AppBar, Typography} from '@mui/material'
import { Toolbar } from '@mui/material';
import {theme, themeButton} from '@/components/Common/Theme/themes'
import { Grid } from '@mui/material'
import {Button} from '@mui/material';

export const Footer = (props: any) => {
    return (<>
        <AppBar 
            position="sticky"
            sx={{
                width: { sm: `100%` },
                marginTop: 'auto',
                bottom: 0,
                backgroundColor: theme.palette.primary.main
            }}>
            <Toolbar>
                <Grid container>
                    <Grid 
                        xs={6}
                        item
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        {
                            props.buttonVisible?
                                <Button 
                                    variant='text'
                                    sx={{
                                        color: theme.palette.secondary.main
                                    }}>
                                    <Typography
                                        sx={{
                                            display: 'flex',
                                            color: theme.palette.secondary.main,
                                            alignItems: 'center',
                                            textTransform: 'capitalize',
                                            typography: {lg: 'h6'}
                                        }}>
                                        {props.buttonText}
                                    </Typography>
                                </Button>
                            :
                                null
                        }
                    </Grid>
                    <Grid 
                        xs={6}
                        item
                        sx={{
                            display: 'flex',
                            flexDirection: 'row-reverse'
                        }}>
                        <Typography
                            sx={{
                                display: 'flex',
                                color: theme.palette.secondary.main,
                                alignItems: 'center',
                                typography: {lg: 'h5'}
                            }}>
                            {props.text}
                        </Typography>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    </>);
}

Footer.defaultProps =
{
    text: 'Text',
    buttonText: 'Button',
    buttonVisible: true
}

Footer.propTypes = 
{
    text: PropTypes.string,
    buttonText: PropTypes.string,
    buttonVisible: PropTypes.bool
}

