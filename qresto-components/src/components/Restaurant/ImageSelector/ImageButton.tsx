import styles from './ImageButton.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const ImageButton = (props: any) => {
    return (<>
        <Card 
            sx={{ 
                width: '100%',
                height: 266,
            }}>
            <CardMedia
                sx={{ 
                    height: 226,
                    width: '100%'
                }}
                image={props.image}
                title="imagen"/>

            <CardActions
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                <Button 
                    onClick={props.onChange}
                    size="small">
                    Cambiar
                </Button>
            </CardActions>
        </Card>
    </>);
}

ImageButton.defaultProps = {
    image: '',
    onChange: function(){}
}

ImageButton.propTypes = {
    image: PropTypes.string,
    onChange: PropTypes.func
}
