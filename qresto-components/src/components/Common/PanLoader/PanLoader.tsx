import styles from './PanLoader.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Backdrop } from '@mui/material'
import {theme} from '@/Common/Theme/themes'

export const PanLoader = (props: any) => {
    return (<>
        <Backdrop
            sx={{ color: theme.palette.secondary.main, zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={props.open}>
            <div className={styles.panWrapper}>
                <div className={styles.pan}>
                <div className={styles.food}></div>
                <div className={styles.panBase}></div>
                <div className={styles.panHandle}></div>
                </div>
                <div className={styles.panShadow}></div>
            </div>
        </Backdrop>
    </>)
}

PanLoader.defaultProps =
{
    open: false
}

PanLoader.propTypes =
{
    open: PropTypes.bool
}


