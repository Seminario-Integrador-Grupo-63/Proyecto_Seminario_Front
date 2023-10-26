import React, {useState, useEffect} from 'react';
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
    const [selectedSideDish, setSelectedSideDish] = useState<any>(null)
    const [observation, setObservation] = useState('')

    const addDish = (subTotal, amount) => {
        let sideDishId = 0
        if(selectedSideDish != null) {
            sideDishId = selectedSideDish.id
        } else {
            sideDishId = null
        }
        const orderDetail = {
            dish: props.dish.id,
            sideDish: sideDishId,
            observation: observation,
            ammount: amount,
            customerName: props.customer,
            subTotal: subTotal
        }
        props.onAdd(orderDetail)
    }

    const onSelectSideDish = (sideDishId) => {
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

                    {props.dish.sideDishes.length > 0?
                        <SideDishSelector 
                        title={'Guarniciones'}
                        onCheckSideDish={onSelectSideDish}
                        sideDishes={props.dish.sideDishes}/>
                    :
                        null
                    }

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
                    sideDish={selectedSideDish}
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

