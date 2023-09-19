import styles from './CustomAppBar.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {AppBar} from '@mui/material'
import { Toolbar, Typography } from '@mui/material';
import {theme} from '@/components/Common/Theme/themes'
import { LogoWitch } from '@/Common/Logos/LogoWitch/LogoWitch';
import { LogoQResto } from '@/Common/Logos/LogoQResto/LogoQResto';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from '@mui/material'

export const CustomerHeader = (props: any) => {

    const enableGoBackButton = () => {
        return(
            <IconButton
                sx={{
                    marginRight: '20px'
                }}>
                <ArrowBackIcon 
                    fontSize='large'
                    sx={{
                        color: theme.palette.secondary.main,
                    }}/>
            </IconButton>
        )
    }

    const enableSearch = () => {
        return(
            <IconButton
                sx={{
                    marginRight: '20px'
                }}>
                <SearchIcon 
                    fontSize='large'
                    sx={{
                        color: theme.palette.secondary.main,
                    }}/>
            </IconButton>
        )
    }

    return (<>
        <AppBar 
            position="sticky"
            sx={{
                width: { sm: `100%` },
                backgroundColor: theme.palette.primary.main
            }}>
            <Toolbar 
                sx={{
                    backgroundColor: theme.palette.primary.contrastText,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                <LogoWitch/>
                <LogoQResto/>
            </Toolbar>

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
                        {props.goBackEnabled ? enableGoBackButton() : null}
                        <Typography
                            variant={'h6'}
                            sx={{
                                color: theme.palette.secondary.main,
                            }}>
                            {props.title}
                        </Typography>
                    </Grid>
                    <Grid 
                        xs={4}
                        item
                        sx={{
                            display: 'flex',
                            flexDirection: 'row-reverse'
                        }}>
                        {props.searchEnabled? enableSearch() : null}
                    </Grid>
                </Grid>
            </Toolbar>
            {props.children}
        </AppBar>
    </>);
}

CustomerHeader.defaultProps =
{
    goBackEnabled: false,
    searchEnabled: false,
    title: 'Title',
    children: null
}

CustomerHeader.propTypes = 
{
    goBackEnabled: PropTypes.bool,
    searchEnabled: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.node
}

