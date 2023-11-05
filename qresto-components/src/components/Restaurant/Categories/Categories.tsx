import styles from './Categories.module.scss';
import {Grid,
    } from '@mui/material'
import { useState } from 'react';
import { ButtonCategory } from '../../Customer/MenuCategories/ButtonCategory'
import { Layout } from '../Layout/Layout';
import { CategoriesForm } from './CategoriesForm';
 
import PropTypes from 'prop-types';

export const Categories = (props: any) => {
    // En esta parte van las funciones
    const [open, setOpen] = useState <boolean>(false);
    const [isNew, setIsNew] = useState <boolean>(true);
    const [selectedCategory, setSelectedCategory] = useState(null)
  
    const handleClose = () => {
        setOpen(false);
    };

    const onClickCategory = (category) => {
        //props.onClickCategory(category)
        setSelectedCategory(category)
        setOpen(true)
        setIsNew(false)
    }

    const createCategory = (category) => {
        return(
            <Grid
                key={category.id}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
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
        <Layout title={'Categorías'}>
            <Grid 
                sx={{
                    display: 'grid',
                    columnGap: 3,
                    rowGap: 1,
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    //overflowY: 'scroll','&::-webkit-scrollbar':{width:0,}
                }}>
                {props.categories.map(category => createCategory(category))}
                <CategoriesForm
                    isNew={isNew}
                    open={open}
                    onClose={handleClose}
                    onUpdate={props.onUpdate}
                    onDelete={props.onDelete}
                    category={selectedCategory}/>
            </Grid>
        </Layout>
    </>);
}

Categories.defaultProps =
{
    categories: [],
    // onClickCategory: function(){},
    onUpdate: function(){},
    onDelete: function(){}
  // Acá van los valores por default de los atributos en caso de que no se pasen desde el pader
}

Categories.propTypes = 
{
    categories: PropTypes.array,
    // onClickCategory: PropTypes.func,
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func
  // Acá se definen los atributos o propiedades que que se le pasan al componente desde el padre
}