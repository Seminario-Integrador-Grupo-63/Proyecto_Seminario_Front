import styles from './CustomerOrderDetail.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Grid} from '@mui/material'
import { Typography } from '@mui/material'
import { ButtonOrderDetails} from './ButtonOrderDetails'

export const CustomerOrderDetail = (props: any) => {
    const createDish = (dish) => {
        return(
            <Grid 
                key={dish.dish.id} 
                item 
                xs={12}
                sx={{
                    marginTop: '1vh',
                    marginBottom: '1vh'
                }}>
                <ButtonOrderDetails 
                    dish={dish.dish}
                    sideDish={dish.sideDish}/>
            </Grid>
        )
    }

    if(props.customer != null){
        return (<>
            <Grid 
                container
                sx={{
                    paddingTop: '2vh',
                    paddingBottom: '2vh',
                    paddingRight: '2vw',
                    paddingLeft: '2vw'
                }}>
                <Grid 
                    item 
                    xs={12}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                    <Typography
                        typography={{lg: 'h5', md: 'h5', xs:'h5'}}>
                        {props.customer.name}
                    </Typography>
                    <Typography
                        typography={{lg: 'h5', md: 'h5', xs:'h5'}}>
                        {'$' + props.customer.total}
                    </Typography>
                </Grid>
                {props.customer.dishes.map(dish => createDish(dish))}
            </Grid>
        </>);
    } else {
        return (<></>)
    }

}

CustomerOrderDetail.defaultProps =
{
    customer: null
}

CustomerOrderDetail.propTypes = 
{
    customer: PropTypes.object
}


