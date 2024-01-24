import React from 'react';
import PropTypes from 'prop-types';

export const NegativeFeedbackLogo = (props: any) => {
    return (<>
        <svg width="100%" height="100%" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="54.5" cy="54.5" r="52" stroke={props.color} strokeWidth="5"/>
            <path d="M38 38L72.5 72.5M72.5 38L38 72.5" stroke={props.color} strokeWidth="5" strokeLinecap="round"/>
        </svg>
    </>);
}

NegativeFeedbackLogo.defaultProps =
{
    color: 'red'
}

NegativeFeedbackLogo.propTypes =
{
    color: PropTypes.string
}


