import styles from './CustomerOrderDetail.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Grid} from '@mui/material'
import { Typography } from '@mui/material'
import { ButtonDish } from '@/Customer/MenuDishes/ButtonDish';

export const CustomerOrderDetail = (props: any) => {

    const createDish = (dish, ) => {
        return(
            <ButtonDish dish={dish}/>
        )
    }

    if(props.orderDetail != null){
        return (<>
            <Grid container>
                <Typography>
                    props.orderDetail.customer
                </Typography>
                {/* <ButtonDish dish={}/> */}

            </Grid>
        </>);
    } else {
        return (<></>)
    }

}

CustomerOrderDetail.defaultProps =
{
    orderDetail: null
}

CustomerOrderDetail.propTypes = 
{
    orderDetail: PropTypes.object
}


