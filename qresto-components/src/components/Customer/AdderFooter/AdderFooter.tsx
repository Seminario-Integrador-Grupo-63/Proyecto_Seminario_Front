import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {AppBar} from '@mui/material'
import { Toolbar } from '@mui/material';
import {theme, themeButtonWine} from '@/Common/Theme/themes'
import { Grid } from '@mui/material'
import {AddButton} from './AddButton'
import { Adder} from '@/Common/Adder'

export const AdderFooter = (props: any) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const [amount, setAmount] = useState(1)
    const [sideDishPrice, setSideDishPrice] = useState(0)

    useEffect(() => {
        if(sideDishPrice !== 0){
            setSideDishPrice(0)
        }
    }, [])

    useEffect(() => {
        if(props.dish !== null){
            setTotalPrice(props.dish.price)
        }
    }, [props.dish])

    useEffect(() => {
        if(props.sideDish !== null){
            setSideDishPrice(props.sideDish.extraPrice)
        } else {
            if(sideDishPrice !== undefined){
                setTotalPrice((props.dish.price - sideDishPrice)*amount)
            }
            setSideDishPrice(0)
        }
    }, [props.sideDish])

    useEffect(() => {
        if(sideDishPrice !== undefined){
            setTotalPrice((props.dish.price + sideDishPrice)*amount)
        }
    }, [sideDishPrice])

    const increaseQuantity = (value) => {
        setTotalPrice((props.dish.price + sideDishPrice)*value)
        setAmount(value)
    }

    const decreaseQuantity = (value) => {
        setTotalPrice((props.dish.price + sideDishPrice)*value)
        setAmount(value)
    }

    const onAdd = () => {
        props.onAdd(totalPrice, amount)
    }

    return (<>
        <AppBar 
            position="sticky"
            sx={{
                width: { sm: `100%` },
                marginTop: 'auto',
                bottom: 0,
                backgroundColor: theme.palette.primary.main
            }}>
            <Toolbar>
                <Grid container>
                    <Grid 
                        xs={8}
                        item
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <Adder 
                            color={themeButtonWine.palette.primary}
                            increase={increaseQuantity}
                            decrease={decreaseQuantity}
                            minValue={1}
                            value={amount}/>
                    </Grid>
                    <Grid 
                        xs={4}
                        item
                        sx={{
                            display: 'flex',
                            flexDirection: 'row-reverse'
                        }}>
                        <AddButton
                            price={totalPrice}
                            onClick={onAdd}
                            title={'Agregar'}/>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    </>);
}

AdderFooter.defaultProps =
{
    dish: null,
    sideDish: null,
    onAdd: function(){}
}

AdderFooter.propTypes = 
{
    dish: PropTypes.object,
    sideDish: PropTypes.object,
    onAdd: PropTypes.func
}

