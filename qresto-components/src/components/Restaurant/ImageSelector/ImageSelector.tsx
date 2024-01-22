import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { FormDialog } from '@/Common/FormDialog';
import { UploadButton } from '@/Common/UploadButton';

export const ImageSelector = (props: any) => {
    const [selectedImage, setSelectedImage] = useState('')

    const onSubmit = () => {
        props.onSubmit(selectedImage)
    }

    const onImageChange = (image) => {
        setSelectedImage(image)
    }

    return (<>
        <FormDialog
            title='Seleccionar imagen'
            open={props.open}
            submitText='Aceptar'
            closeText='Cancelar'
            onSubmit={onSubmit}
            onClose={props.onClose}>
            <UploadButton
                onChange={onImageChange}/>
        </FormDialog>
    </>)
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


