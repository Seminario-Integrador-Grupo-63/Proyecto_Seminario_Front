import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { ButtonCategory } from './ButtonCategory';
import { CustomerHeader } from '@/Customer/CustomerHeader/CustomerHeader';
import { CustomerContainer } from '@/Customer/CustomerContainer/CustomerContainer';
import { Footer } from '@/Customer/Footer/Footer';

export const MenuCategories = (props: any) => {
    const onClickCategory = (category) => {
        props.onClickCategory(category)
    }

    const createCategory = (category) => {
        return(
            <Grid
                key={category.id}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <ButtonCategory 
                    category={category}
                    onClick={onClickCategory}/>
            </Grid>        
        )
    }

    return (<>
        <CustomerContainer>
            <CustomerHeader title={'Categoría'}/>
            <Grid 
                sx={{
                    width: '90%',
                    overflowY: 'scroll',
                    '&::-webkit-scrollbar':{
                        width:0,
                    }
                }}>
                {props.categories.map(category => createCategory(category))}
            </Grid>
            {props.ordersButtonVisible?
                <Footer 
                    onClick={props.onClickFooter}
                    buttonText={'Ver órdenes'}
                    text={"$" + props.ordersTotal}/>
            :
                null
            }
        </CustomerContainer>
    </>);
}

MenuCategories.defaultProps =
{
    categories: [],
    onClickCategory: function(){},
    ordersButtonVisible: false,
    ordersTotal: 0,
    onClickFooter: function(){}
}

MenuCategories.propTypes = 
{
    categories: PropTypes.array,
    onClickCategory: PropTypes.func,
    ordersButtonVisible: PropTypes.bool,
    ordersTotal: PropTypes.number,
    onClickFooter: PropTypes.func
}


