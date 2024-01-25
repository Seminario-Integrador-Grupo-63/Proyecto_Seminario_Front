import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { 
    Grid,
    TextField
} from '@mui/material'
import { Selector } from '@/Common/Selector'
import { FormDialog } from '@/Common/FormDialog'

export const OrderDetailForm = (props: any) => {
    const [categoryDishes, setCategoryDishes] = useState([])
    const [sideDishes, setSideDishes] = useState([])
    const [selectedSideDish, setSelectedSideDish] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedDish, setSelectedDish] = useState(null)
    const [observation, setObservation] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [quantityInput, setQuantityInput] = useState('')
    const [customer, setCustomer] = useState('')

    useEffect(() => {
        setCustomer(props.customer)
    }, [props.customer])

    const handleCategoryChange = (category) => {
        setCategoryDishes(category.dishes)
        setSelectedCategory(category)
    }

    const handleDishChange = (dish) => {
        setSideDishes(dish.sideDishes)
        setSelectedDish(dish)
    }

    const handleSideDishChange = (sideDish) => {
        setSelectedSideDish(sideDish)
    }

    const handleQuantityChange = (event) => {
        if(event.target.value === ''){
            setQuantityInput('')
        } else if (!isNaN(event.target.value)){
            
        }else if(event.target.value < 1){
            setQuantityInput('1')
        } else {
            setQuantityInput(event.target.value)
        }
    }

    const addNewDetail = () => {
        console.log(' ')
        console.log('OrderDetailForm addNewDetail()')
        console.log('selectedDish: ', selectedDish)
        console.log('selectedSideDish: ', selectedSideDish)

        return {
            dish: selectedDish.id,
            sideDish: selectedSideDish.id,
            customerName: customer,
            subTotal: calculateSubTotal(selectedDish, selectedSideDish, quantity),
            amount: quantity,
            observation: observation
        }
    }

    const calculateSubTotal = (dish, sideDish, quantity) => {
        return (dish.price + sideDish.extraPrice)*quantity
    }

    return (<>
        <FormDialog 
            open={props.open}
            submitText="Crear"
            onSubmit={addNewDetail}
            closeText='Cancelar'
            onClose={props.onClose}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Selector 
                        label="Categoría"
                        items={props.menu}
                        itemText='name'
                        onChange={handleCategoryChange}/>
                </Grid>

                <Grid item xs={3}>
                    <Selector 
                        label="Plato"
                        items={categoryDishes}
                        itemText={'name'}
                        onChange={handleDishChange}/>
                </Grid>

                <Grid item xs={3}>
                    <Selector 
                        label="Guarnición"
                        items={sideDishes}
                        itemText={'name'}
                        onChange={handleSideDishChange}/>
                </Grid>

                <Grid item xs={2}>
                    <TextField 
                        error={true}
                        type="number" 
                        label="Cantidad"
                        InputProps={{inputProps: {min: 1}}}
                        value={quantityInput}
                        onChange={handleQuantityChange}/>
                </Grid>
                <Grid item xs={12}>
                <TextField
                        label={'Observaciones'}
                        multiline
                        fullWidth
                        value={observation}
                        maxRows={4}
                        minRows={4}
                        onChange={(e) => setObservation(e.target.value)}/>
                </Grid>
            </Grid>
        </FormDialog>
    </>)
}

OrderDetailForm.defaultProps =
{
    open: false,
    onClose: function(){},
    menu: [],
    dishChange: function(){},
    addNewDetail: function(){},
    customer: ''
}

OrderDetailForm.propTypes =
{
    open: PropTypes.bool,
    onClose: PropTypes.func,
    menu: PropTypes.array,
    dishChange: PropTypes.func,
    addNewDetail: PropTypes.func,
    customer: PropTypes.string
}
