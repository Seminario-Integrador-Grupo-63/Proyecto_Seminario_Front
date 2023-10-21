// import styles from './UploadButton.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {
    Button
} from '@mui/material'
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

export const UploadButton = (props: any) => {
    return (<>
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Seleccionar imagen
            <VisuallyHiddenInput type="file" />
        </Button>
    </>);
}

UploadButton.defaultProps =
{

}

UploadButton.propTypes = 
{

}


