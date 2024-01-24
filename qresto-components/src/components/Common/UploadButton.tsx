// import styles from './UploadButton.module.scss';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Grid
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
})

export const UploadButton = (props: any) => {
    const [selectedFile, setSelectedFile] = useState('')
    const [comments, setComments] = useState('')
    const [commentsColor, setCommentsColor] = useState('black')

    const handleFileChange = (event) => {
        const file = event.target.files[0]

        // Check if a file is selected
        if (file) {
            // Check if the file type is an image
            if (file.type.startsWith('image/')) {
                setComments('Selected: ' + file.name)
                setCommentsColor('black')
                convertToBase64(file)
            } else {
                setComments('Selected file is not an image.')
                setCommentsColor('red')
            }
        }
    }

    const convertToBase64 = (file) => {
        // Read the image file as a data URL
        const reader = new FileReader()
        reader.onloadend = () => {
            // Get the base64 representation of the image
            const base64String = reader.result as string
            const [, base64Data] = base64String.split(',')
            
            // Now you can use the base64String as needed (e.g., store it in state)
            setSelectedFile(base64String);
        }

        // Read the image file as a data URL
        reader.readAsDataURL(file)
    }

    useEffect(() => {
        props.onChange(selectedFile)
    }, [selectedFile])

    return (<>
        <Grid 
            container 
            direction={'column'}
            justifyContent={'center'} 
            alignContent={'center'}>
            <Grid item>
                <Button 
                    component="label" 
                    variant="contained" 
                    startIcon={<CloudUploadIcon />}>
                    Seleccionar imagen
                    <VisuallyHiddenInput 
                        type="file" 
                        onChange={handleFileChange}/>
                </Button>
            </Grid>
            {comments !== '' ?
                <Grid 
                    item 
                    textAlign={'center'}
                    color={commentsColor}>
                    <p>{comments}</p>
                </Grid>
            :
                null
            }
        </Grid>
    </>)
}

UploadButton.defaultProps =
{
    onChange: function(){}
}

UploadButton.propTypes = 
{
    onChange: PropTypes.func
}


