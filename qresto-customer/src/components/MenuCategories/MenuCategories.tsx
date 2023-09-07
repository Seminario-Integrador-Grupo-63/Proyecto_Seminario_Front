import styles from './MenuCategories.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import {theme} from '../theme'
import { ButtonCategory } from './ButtonCategory';
import { CustomerAppBar } from '../CustomerAppBar/CustomerAppBar';
import { CustomerContainer } from '../CustomerContainer/CustomerContainer';
import { categories } from '../FakeData/CategoriesFakeData';

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
            <CustomerAppBar title={'Categoría'}/>

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
        </CustomerContainer>
    </>);
}

MenuCategories.defaultProps =
{
    categories: categories,
    onClickCategory: function(){}
}

MenuCategories.propTypes = 
{
    categories: PropTypes.array,
    onClickCategory: PropTypes.func
}


