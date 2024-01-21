import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { DishCard } from '../Dishes/DishCard/DishCard'
import {
    Container,
    Grid,
    Button
} from '@mui/material'
import { DishForm } from './DishForm/DishForm'

export const Dishes = (props: any) => {
    const [openDishForm, setOpenDishForm] = useState(false)
    const [isNewDishForm, setIsNewDishForm] = useState(false)
    const [selectedDish, setSelectedDish] = useState(null)

    const onEdit = (dish) => {
        setSelectedDish(dish)
        setOpenDishForm(true)
        setIsNewDishForm(false)
    }

    const onNewDish = () => {
        setOpenDishForm(true)
        setIsNewDishForm(false)
    }

    const onDelete = () => {

    }

    const onCloseDishForm = () => {
        setOpenDishForm(false)
    }

    return (<>
        <Container 
            maxWidth={false}>
            <Grid container spacing={2}>
                <Grid item sx={{marginBottom: '20px'}}>
                    <Button onClick={onNewDish}>Agregar Plato</Button>
                </Grid>
                <Grid 
                    item 
                    container
                    xs={12}
                    sx={{
                        border: '1px solid gray',
                        borderRadius: '8px',
                        height: '80vh',
                        overflowY: 'auto',
                        width: '100%'
                    }}
                    spacing={2}>
                    {props.dishes.map((dish, index) => (
                        <Grid item key={index} xs={4} sm={4} md={4} lg={4}>
                            <DishCard 
                                dish={dish} 
                                onEdit={onEdit}
                                onDelete={onDelete}/>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            <DishForm
                open={openDishForm}
                onClose={onCloseDishForm}
                dish={selectedDish}
                isNew={isNewDishForm}/>
        </Container> 
    </>)
}

Dishes.defaultProps =
{
    dishes: []
}

Dishes.propTypes = 
{
    dishes: PropTypes.array
}