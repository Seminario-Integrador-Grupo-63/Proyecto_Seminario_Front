// import styles from './DishOrdering.module.scss';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { CustomerContainer } from '@/Customer/CustomerContainer/CustomerContainer';
import { CustomerHeader } from '@/Customer/CustomerHeader/CustomerHeader';
import { 
    Box, 
    Typography,
    Grid,
    TextField
} from '@mui/material';
import { theme } from '@/Common/Theme/themes';
import { SideDishSelector } from './SideDishSelector';
import { AdderFooter } from '../AdderFooter/AdderFooter';

export const DishOrdering = (props: any) => {
    const [selectedSideDish, setSelectedSideDish] = useState({})
    const [observation, setObservation] = useState('')

    const addDish = (totalPrice, units) => {
        console.log(" ")
        console.log("totalPrice: ", totalPrice)
        console.log("units: ", units)
        console.log("selectedSideDish: ", selectedSideDish)
        console.log("observation: ", observation)
        // const orderDetails = []
        // for (let i = 0; i < units; i++){
        //     orderDetails.push({
        //         dish: props.dish,
        //         sideDish: null,
        //         customer: props.customer,
        //         subtotal: props.dish.price
        //     })
        // }

        // props.onAdd(orderDetails)
    }

    const onSelectSideDish = (sideDishId) => {
        console.log(" ")
        console.log("onSelectSideDish(sideDishId)")
        console.log("sideDishId: ", sideDishId)
        console.log("props.dish: ", props.dish)
        if(sideDishId > -1){
            const index = props.dish.sideDishes.findIndex(sideDish => sideDish.id == sideDishId)
            setSelectedSideDish(props.dish.sideDishes[index])
        } else {
            setSelectedSideDish(null)
        }
    }

    if(props.dish != null){
        return (<>
            <CustomerContainer>
                <CustomerHeader
                    title={props.dish.name}
                    goBackEnabled={true}
                    onGoBack={props.goBack}/>
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
                        onCheckSideDish={onSelectSideDish}
                        sideDishes={props.dish.sideDishes}/>

                    <TextField
                        label={'Observaciones'}
                        multiline
                        fullWidth
                        value={observation}
                        maxRows={4}
                        minRows={4}
                        onChange={(e) => setObservation(e.target.value)}/>
                    <p>
                        Describe aquí cualquier cosa que necesite saber el mozo como por ejemplo ingredientes que no quieres incluir
                    </p>
                    
                </Grid>
                <AdderFooter 
                    dish={props.dish}
                    onAdd={addDish}/>
            </CustomerContainer>
        </>);
    } else {
        return (<></>)
    }
}

DishOrdering.defaultProps =
{
    dish: null,
    goBack: function(){},
    customer: '',
    onAdd: function(){}
}

DishOrdering.propTypes = 
{
    dish: PropTypes.object,
    goBack: PropTypes.func,
    customer: PropTypes.string,
    onAdd: PropTypes.func
}
/**
console.log(" ")
console.log("DishOrdering")
console.log(": ", )
*/

