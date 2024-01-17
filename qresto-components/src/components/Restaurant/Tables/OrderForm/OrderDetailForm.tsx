import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { 
    Grid,
    TextField
} from '@mui/material'
import { Selector } from '@/Common/Selector'
import { FormDialog } from '@/Common/FunctionalTemplates/FormDialog'

export const OrderDetailForm = (props: any) => {
    const [categoryDishes, setCategoryDishes] = useState([])

    const handleCategoryChange = (category) => {
        const categoryDishes = []
        props.dishes.forEach(dish => {
            if(dish.category === category.id){
                categoryDishes.push(dish)
            }
        })
        setCategoryDishes(categoryDishes)
    }

    const handleDishChange = (dish) => {
        
    }

    return (<>
        <FormDialog 
            open={props.open}
            submitText="Crear"
            closeText='Cancelar'
            onClose={props.onClose}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Selector 
                        label="Categoría"
                        items={props.categories}
                        itemText='name'
                        onChange={handleCategoryChange}/>
                </Grid>

                <Grid item xs={3}>
                    <Selector 
                        label="Plato"
                        items={categoryDishes}
                        itemText={'name'}/>
                </Grid>

                <Grid item xs={3}>
                    <Selector label="Guarnición"/>
                </Grid>

                <Grid item xs={2}>
                    <TextField type="number" label="Cantidad"/>
                </Grid>
            </Grid>
        </FormDialog>
    </>)
}

OrderDetailForm.defaultProps =
{
    open: false,
    onClose: function(){},
    categories: [],
    dishes: [],
    sideDishes: [],
    dishChange: function(){}
}

OrderDetailForm.propTypes =
{
    open: PropTypes.bool,
    onClose: PropTypes.func,
    categories: PropTypes.array,
    dishes: PropTypes.array,
    sideDishes: PropTypes.array,
    dishChange: PropTypes.func
}
