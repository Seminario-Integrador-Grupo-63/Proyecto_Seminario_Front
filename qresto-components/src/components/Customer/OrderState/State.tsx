import styles from './State.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { stateTheme } from '@/Common/Theme/stateTheme';

export const State = (props: any) => {
    return (<>
        <div className={styles.container}>
            <div 
                style={{
                    backgroundColor: props.circleHighlighted?
                        stateTheme.palette.primary.main:
                        stateTheme.palette.primary.dark
                }}
                className={styles.circle}> 
                <span 
                    className={styles.circleNumber}
                    style={{color: stateTheme.palette.primary.contrastText}}>
                    {props.number}
                </span>
            </div>
            <span 
                style={{
                    color: props.textHighlighted?
                        stateTheme.palette.primary.main:
                        stateTheme.palette.primary.dark
                }}
                className={styles.text}>
                {props.text}
            </span>
        </div>
    </>);
}

State.defaultProps =
{
    text: 'State',
    number: 0,
    circleHighlighted: false,
    textHighlighted: false
}

State.propTypes = 
{
    text: PropTypes.string,
    number: PropTypes.number,
    circleHighlighted: PropTypes.bool,
    textHighlighted: PropTypes.bool
}


