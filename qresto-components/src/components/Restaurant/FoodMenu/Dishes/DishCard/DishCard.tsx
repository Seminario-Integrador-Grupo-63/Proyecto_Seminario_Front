import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CustomButton } from '@/Common/CustomButton';
import { theme, themeButton } from '@/Common/Theme/themes';
import { Box, Button, Grid } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

export const DishCard = (props: any) => {
    const contenedor = {
        margin: 10,
        width: '300px', // Establece un ancho fijo para la tarjeta
    }

    return (
        <Card sx={{ maxWidth: 300 }} style={contenedor}>
            <div style={{ minHeight: 180 }}>
                <Box
                    component="img"
                    style={{width: '100%',height: '180px',objectFit: 'cover'}}
                    alt=""
                    src={props.dish.image}
                />
            </div>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.dish.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.dish.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Grid container justifyContent="flex-end">
                    <ThemeProvider theme={themeButton}>
                        <Button variant="text" color="primary">
                            Edit
                        </Button>
                        <Button variant="text" color="primary">
                            Delete
                        </Button>
                    </ThemeProvider>
                </Grid>
            </CardActions>
        </Card>
    )
}

DishCard.defaultProps =
{
    dish: {
        image: '',
        name: '',
        description: ''
    }
}

DishCard.propTypes = 
{
    dish: PropTypes.object
}

