import styles from './ImageSelector.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { FormDialog } from '@/Common/FunctionalTemplates/FormDialog';
import { UploadButton } from '@/Common/UploadButton';

export const ImageSelector = (props: any) => {
    return (<>
        <FormDialog
            open={props.open}
            onClose={props.onClose}>
            <UploadButton/>
        </FormDialog>
    </>);
}

ImageSelector.defaultProps =
{
    open: false,
    onSubmit: function(){},
    onClose: function(){},
}

ImageSelector.propTypes = 
{
    open: PropTypes.bool,
    onSubmit: PropTypes.func,
    onClose: PropTypes.func,
}


