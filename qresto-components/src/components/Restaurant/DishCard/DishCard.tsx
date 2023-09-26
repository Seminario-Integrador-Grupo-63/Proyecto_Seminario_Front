import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CustomButton } from '@/components/Common/CustomButton';
import { theme, themeButton } from '@/components/Common/Theme/themes';
import { Box, Grid } from '@mui/material';

export const  DishCard = (props: any) => { // props seria un 
  return (
    
    <Card sx={{ maxWidth: 300 }}>
      <Box
                    component="img"
                    alt=""
                    src={props.dish.image}/>
                <Grid
                    sx={{
                        width: '90vw'
                    }}>
                    <Box 
                        sx={{
                            // width: '90%',
                            background: theme.palette.secondary.light,
                            borderRadius: '5px',
                            padding: '10px',
                            marginBottom: '3vh'
                        }}>
                        
                    </Box>
                  </Grid>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.dish.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.dish.description}
        </Typography>
      </CardContent>
      <CardActions>
      <CustomButton 
            color={themeButton.palette.primary}>
            <div>
                {props.title}
                <span style={{ marginLeft: '30px' }}>Edit{props.price}</span>
            </div>
        </CustomButton>
        <CustomButton 
            color={themeButton.palette.primary}>
            <div>
                {props.title}
                <span style={{ marginLeft: '30px' }}>Delete{props.price}</span>
            </div>
        </CustomButton>
        
      </CardActions>
    </Card>
  );

  }
