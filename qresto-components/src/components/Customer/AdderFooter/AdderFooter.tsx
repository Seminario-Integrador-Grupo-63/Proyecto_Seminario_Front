import styles from './CustomAppBar.module.scss';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {AppBar} from '@mui/material'
import { Toolbar } from '@mui/material';
import {theme, themeButton} from '@/Common/Theme/themes'
import { Grid } from '@mui/material'
import {AddButton} from './AddButton'
import { Adder} from '@/Common/Adder'

export const AdderFooter = (props: any) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const [units, setUnits] = useState(1)

    useEffect(() => {
        if(props.dish != null){
            setTotalPrice(props.dish.price)
        }
    }, [props.dish])

    const increaseQuantity = (value) => {
        setTotalPrice(totalPrice + props.dish.price)
        setUnits(value)
    }

    const decreaseQuantity = (value) => {
        setTotalPrice(totalPrice - props.dish.price)
        setUnits(value)
    }

    const onAdd = () => {
        props.onAdd(totalPrice, units)
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
                            color={themeButton.palette.primary}
                            increase={increaseQuantity}
                            decrease={decreaseQuantity}
                            minValue={1}
                            value={units}/>
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
    dish: function(){},
    onAdd: function(){}
}

AdderFooter.propTypes = 
{
    dish: PropTypes.func,
    onAdd: PropTypes.func
}

