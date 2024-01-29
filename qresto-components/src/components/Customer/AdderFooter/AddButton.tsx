import React from 'react';
import PropTypes from 'prop-types';
import { themeButtonWine } from '@/Common/Theme/themes';
import { CustomButton } from '@/Common/CustomButton';

export const AddButton = (props: any) => {
    return (<>
        <CustomButton 
            color={themeButtonWine.palette.primary}
            onClick={props.onClick}>
            <div>
                {props.title}
                <span style={{ marginLeft: '50px' }}>${props.price}</span>
            </div>
        </CustomButton>
    </>);
}

AddButton.defaultProps =
{
    title: 'Add',
    price: 1000,
    onClick: function(){}
}

AddButton.propTypes = 
{
    title: PropTypes.string,
    price: PropTypes.number,
    ponClick: PropTypes.func
}


