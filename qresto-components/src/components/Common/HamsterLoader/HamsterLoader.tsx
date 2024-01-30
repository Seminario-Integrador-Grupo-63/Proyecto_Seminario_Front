import styles from './HamsterLoader.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Backdrop } from '@mui/material'
import {theme} from '@/Common/Theme/themes'

export const HamsterLoader = (props: any) => {
    return (<>
        <Backdrop
            sx={{ color: theme.palette.secondary.main, zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={props.open}>
            <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className={styles.wheelAndHamster}>
                <div className={styles.wheel}></div>
                <div className={styles.hamster}>
                    <div className={styles.hamster__body}>
                        <div className={styles.hamster__head}>
                            <div className={styles.hamster__ear}></div>
                            <div className={styles.hamster__eye}></div>
                            <div className={styles.hamster__nose}></div>
                        </div>
                        <div className={`${styles.hamster__limb} ${styles.hamster__limbFr}`}></div>
                        <div className={`${styles.hamster__limb} ${styles.hamster__limbFl}`}></div>
                        <div className={`${styles.hamster__limb} ${styles.hamster__limbBr}`}></div>
                        <div className={`${styles.hamster__limb} ${styles.hamster__limbBl}`}></div>
                        <div className={styles.hamster__tail}></div>
                    </div>
                </div>
                <div className={styles.spoke}></div>
            </div>
        </Backdrop>
    </>);
}

HamsterLoader.defaultProps =
{
    open: false
}

HamsterLoader.propTypes =
{
    open: PropTypes.bool
}


