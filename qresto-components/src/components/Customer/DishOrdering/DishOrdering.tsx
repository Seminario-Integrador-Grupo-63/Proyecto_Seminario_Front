import styles from './DishOrdering.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { CustomerContainer } from '@/Customer/CustomerContainer/CustomerContainer';
import { CustomerHeader } from '@/components/Customer/CustomerHeader/CustomerHeader';
import { Box, Typography } from '@mui/material';
import { theme } from '@/components/Common/Theme/themes';
import { SideDishSelector } from './SideDishSelector';
import {Grid} from '@mui/material'
import { AdderFooter } from '../AdderFooter/AdderFooter';

export const DishOrdering = (props: any) => {
    console.log(" ")
    console.log("DishOrdering")
    console.log("props.dish: ", props.dish)

    if(props.dish != null){
        return (<>
            <CustomerContainer>
                <CustomerHeader 
                    title={props.dish.name}
                    goBackEnabled={true}/>
                <Box
                    component="img"
                    sx={{
                        height: 'auto',
                        width: '100%',
                        marginBottom: '3vh'
                    }}
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
                        <Typography>
                            {props.dish.description}
                        </Typography>
                    </Box>


                    <SideDishSelector 
                        title={'Guarniciones'}
                        sideDishes={props.dish.sideDishes}/>
                </Grid>
                <AdderFooter/>
            </CustomerContainer>
        </>);
    } else {
        return (<></>)
    }

}

DishOrdering.defaultProps =
{
    dish: null
}

DishOrdering.propTypes = 
{
    dish: PropTypes.object
}
/**
console.log(" ")
console.log("DishOrdering")
console.log(": ", )
*/

