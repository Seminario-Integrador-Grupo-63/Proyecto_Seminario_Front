import React from 'react';
import PropTypes from 'prop-types';

export const PositiveFeedbackLogo = (props: any) => {
    return (<>
        <svg width="100%" height="100%" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="54.5" cy="54.5" r="52" stroke={props.color} strokeWidth="5"/>
            <path d="M37 58.9167L50.6606 70.2842" stroke={props.color} strokeWidth="5" strokeLinecap="round"/>
            <path d="M50.6606 70.2842L74 41.5" stroke={props.color} strokeWidth="5" strokeLinecap="round"/>
        </svg>
    </>);
}

PositiveFeedbackLogo.defaultProps =
{
    color: 'green'
}

PositiveFeedbackLogo.propTypes =
{
    color: PropTypes.string
}


