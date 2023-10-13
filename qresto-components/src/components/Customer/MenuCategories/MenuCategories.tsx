import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { ButtonCategory } from './ButtonCategory';
import { CustomerHeader } from '@/Customer/CustomerHeader/CustomerHeader';
import { CustomerContainer } from '@/Customer/CustomerContainer/CustomerContainer';
<<<<<<< Updated upstream
import { categories } from '@/components/Common/FakeData/CategoriesData';
=======
import { categories } from '@/Common/FakeData/CategoriesData';
>>>>>>> Stashed changes

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


