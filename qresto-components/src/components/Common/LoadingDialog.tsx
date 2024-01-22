import React from 'react';
import PropTypes from 'prop-types';
import { 
    CircularProgress,
    Backdrop
} from '@mui/material'
import {theme} from '@/Common/Theme/themes'

export const LoadingDialog = (props: any) => {
    return (<>
        <Backdrop
            sx={{ color: theme.palette.secondary.main, zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={props.open}>
            <CircularProgress color="inherit" size={80}/>
        </Backdrop>
    </>)
}

LoadingDialog.defaultProps =
{
    open: false
}

LoadingDialog.propTypes =
{
    open: PropTypes.bool
}


