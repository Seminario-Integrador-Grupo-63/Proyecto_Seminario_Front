import styles from './CustomAppBar.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {AppBar} from '@mui/material'
import { Toolbar, Typography } from '@mui/material';
import {theme, themeButton} from '@/Common/theme'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from '@mui/material'
import {AddButton} from './AddButton'
import { Adder} from '@/Common/Adder'

export const AdderFooter = (props: any) => {
    return (<>
        <AppBar 
            position="sticky"
            sx={{
                width: { sm: `100%` },
                bottom:0,
                backgroundColor: theme.palette.primary.main
            }}>
            <Toolbar>
                <Grid container>
                    <Grid 
                        xs={8}
                        // md={8}
                        item
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <Adder 
                            color={themeButton.palette.primary}
                            value={1}/>
                    </Grid>
                    <Grid 
                        xs={4}
                        item
                        sx={{
                            display: 'flex',
                            flexDirection: 'row-reverse'
                        }}>
                        <AddButton
                            title={'Agregar'}/>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    </>);
}

AdderFooter.defaultProps =
{
    goBackEnabled: false,
    searchEnabled: false,
    title: 'Title'
}

AdderFooter.propTypes = 
{
    goBackEnabled: PropTypes.bool,
    searchEnabled: PropTypes.bool,
    title: PropTypes.string
}
