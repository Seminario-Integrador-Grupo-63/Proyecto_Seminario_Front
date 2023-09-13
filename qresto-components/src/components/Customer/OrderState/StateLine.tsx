import styles from './StateLine.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { stateTheme } from '@/Common/Theme/stateTheme';

export const StateLine = (props: any) => {
    return (<>
        <div 
            style={{
                backgroundColor: props.highlighted?
                    stateTheme.palette.primary.main:
                    stateTheme.palette.primary.dark,
                borderColor: props.highlighted?
                stateTheme.palette.primary.main:
                stateTheme.palette.primary.dark,
            }}
            className={styles.line}>
        </div>
    </>);
}

StateLine.defaultProps =
{
    highlighted: false
}

StateLine.propTypes = 
{
    highlighted: PropTypes.bool
}

