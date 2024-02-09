import React, {useState, useEffect} from 'react'
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
    const [menu, setMenu] = useState([])
    const [sideDishes, setSideDishes] = useState()

    useEffect(() => {
        setMenu(props.menu)
    }, [props.menu])

    useEffect(() => {
        setSideDishes(props.sideDishes)
    }, [props.sideDishes])

    const onEdit = (dish) => {
        setSelectedDish(dish)
        setOpenDishForm(true)
        setIsNewDishForm(false)
    }

    const onNewDish = () => {
        setOpenDishForm(true)
        setIsNewDishForm(true)
    }

    const onCloseDishForm = () => {
        setOpenDishForm(false)
        setSelectedDish(null)
        setIsNewDishForm(true)
    }

    const onCreate = async (object) => {
        const result = await props.createDish(object)
        if(result){
            setOpenDishForm(false)
        }
    }

    const onUpdate = async (object) => {
        const result = props.updateDish(object)
        if(result){
            setOpenDishForm(false)
        }
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
                    {props.menu.map(category =>{
                        return category.dishes.map((dish, index) => (
                            <Grid item key={index} xs={12} sm={12} md={6} lg={4}>
                                <DishCard 
                                    dish={dish} 
                                    onEdit={onEdit}
                                    onDelete={props.deleteDish}/>
                            </Grid>
                        ))}
                    )}
                </Grid>
            </Grid>

            <DishForm
                open={openDishForm}
                onClose={onCloseDishForm}
                onCreate={onCreate}
                onUpdate={onUpdate}
                sideDishes={sideDishes}
                categories={props.menu}
                dish={selectedDish}
                isNew={isNewDishForm}/>
        </Container> 
    </>)
}

Dishes.defaultProps =
{
    sideDishes: [],
    deleteDish:function(){},
    updateDish: function(){},
    createDish: function(){},
    menu: [],
    categories: []
}

Dishes.propTypes = 
{
    deleteDish: PropTypes.func,
    createDish: PropTypes.func,
    updateDish: PropTypes.func,
    categories: PropTypes.array,
    menu: PropTypes.array,
    sideDishes: PropTypes.array
}
