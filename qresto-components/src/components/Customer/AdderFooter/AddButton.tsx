import styles from './AddButton.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Button} from '@mui/material'
import {theme} from '@/components/Common/Theme/themes'
import { themeButton } from '@/components/Common/Theme/themes';
import { CustomButton } from '@/components/Common/CustomButton';

export const AddButton = (props: any) => {
    return (<>
        <CustomButton 
            color={themeButton.palette.primary}>
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
}

AddButton.propTypes = 
{
    title: PropTypes.string,
    price: PropTypes.number,
}


