import styles from './Component.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

export const Component = (props: any) => {
    return (<>

    </>);
}

Component.defaultProps =
{
    mode: "portrait",
    title: 'Default value'
}

Component.propTypes = 
{
    mode: PropTypes.oneOf(["portrait", "landscape"]),
    title: PropTypes.string
}


