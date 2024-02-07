import React, { useEffect} from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Card,
    CardActions,
    CardMedia,
    Button
} from '@mui/material'

export const ImageButton = (props: any) => {
    // useEffect(() => {
    //     console.log(' ')
    //     console.log('ImageButton useEffect props.image')
    //     console.log('props.image: ', props.image)
    // }, [props.image])

    return (<>
        <Card 
            sx={{ 
                width: '100%',
                height: 266,
            }}>
            {props.image !== '' ?
                <CardMedia
                    sx={{ 
                        height: 226,
                        width: '100%'
                    }}
                    image={props.image}
                    title="imagen"/>
            :
                <Box sx={{ height: 226, width: '100%'}}></Box>
            }

            <CardActions
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                <Button 
                    onClick={props.onChange}
                    size="small">
                    {props.buttonText}
                </Button>
            </CardActions>
        </Card>
    </>);
}

ImageButton.defaultProps = {
    image: '',
    buttonText: 'Cambiar', 
    onChange: function(){}
}

ImageButton.propTypes = {
    image: PropTypes.string,
    buttonText: PropTypes.string, 
    onChange: PropTypes.func
}
