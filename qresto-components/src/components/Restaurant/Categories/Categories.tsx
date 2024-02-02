import {Grid} from '@mui/material'
import { useState } from 'react';
import { ButtonCategory } from '../../Customer/MenuCategories/ButtonCategory'
import { CategoriesForm } from './CategoriesForm';
import PropTypes from 'prop-types';
import {theme, themeButtonWine} from '@/Common/Theme/themes'

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
        console.log(`categoria: ${category} categoria seleccionada ${selectedCategory}`);
    }
    const onClickNew = (category) => {
        setSelectedCategory(category)
        setOpen(true)
        setIsNew(true)
        console.log(`categoria: ${category} categoria seleccionada ${selectedCategory}`);
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
        <Grid 
            sx={{
                display: 'grid',
                columnGap: 3,
                rowGap: 1,
                gridTemplateColumns: 'repeat(3, 1fr)',
                //overflowY: 'scroll','&::-webkit-scrollbar':{width:0,}
            }}>

            <ButtonCategory 
                category={null}
                onClick={onClickNew}/>
                
            {props.categories.map(category => createCategory(category))}
        </Grid>
        <CategoriesForm
                    isNew={isNew}
                    open={open}
                    onClose={handleClose}
                    onCreate={props.onCreate}
                    onUpdate={props.onUpdate}
                    onDelete={props.onDelete}
                    category={selectedCategory}/>
    </>);
}

Categories.defaultProps =
{
    categories: [],
    // onClickCategory: function(){},
    onCreate: function(){},
    onUpdate: function(){},
    onDelete: function(){}
  // Acá van los valores por default de los atributos en caso de que no se pasen desde el pader
}

Categories.propTypes = 
{
    categories: PropTypes.array,
    // onClickCategory: PropTypes.func,
    onCreate: PropTypes.func,
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func
  // Acá se definen los atributos o propiedades que que se le pasan al componente desde el padre
}