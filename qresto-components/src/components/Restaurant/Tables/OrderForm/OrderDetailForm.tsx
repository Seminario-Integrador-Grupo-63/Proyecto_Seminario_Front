import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { 
    Grid,
    TextField
} from '@mui/material'
import { Selector } from '@/Common/Selector'
import { FormDialog } from '@/Common/FormDialog'

export const OrderDetailForm = (props: any) => {
    const [categories, setCategories] = useState([])
    const [categoryDishes, setCategoryDishes] = useState([])
    const [sideDishes, setSideDishes] = useState([])
    const [selectedSideDish, setSelectedSideDish] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [errorCategorySelector, setErrorCategorySelector] = useState(false)
    const [helperTextCategorySelector, setHelperTextCategorySelector] = useState('')
    const [selectedDish, setSelectedDish] = useState(null)
    const [errorDishSelector, setErrorDishSelector] = useState(false)
    const [helperTextDishSelector, setHelperTextDishSelector] = useState('')
    const [observation, setObservation] = useState('')
    const [quantity, setQuantity] = useState(null)
    const [errorQuantity, setErrorQuantity] = useState(false)
    const [helperTextQuantity, setHelperTextQuantity] = useState('')
    const [quantityInput, setQuantityInput] = useState('')
    const [customer, setCustomer] = useState('')

    useEffect(() => {
        setCustomer(props.customer)
    }, [props.customer])

    useEffect(() => {
        setCategories(props.menu)
    }, [props.menu])

    useEffect(() => {
        if(!props.isNew){
            // set
        }
    }, [props.isNew])

    const handleCategoryChange = (category) => {
        if(category === ''){
            setSelectedDish(null)
            setSelectedCategory(null)
            setCategoryDishes([])
            setSideDishes([])
            setSelectedSideDish(null)
        } else {
            setCategoryDishes(category.dishes)
            setSelectedCategory(category)
        }
    }

    const handleDishChange = (dish) => {
        setSideDishes(dish.sideDishes)
        setSelectedDish(dish)
    }

    const handleSideDishChange = (sideDish) => {
        if(sideDish === ''){
            setSelectedSideDish(null)
        } else {
            setSelectedSideDish(sideDish)
        }
    }

    const handleQuantityChange = (event) => {
        if(event.target.value === ''){
            setQuantityInput('')
            setQuantity(null)
        } else if (!isNaN(event.target.value)){
            setQuantityInput('1')
            setQuantity(1)
        }else if(event.target.value < 1){
            setQuantityInput('1')
            setQuantity(1)
        } else {
            setQuantityInput(event.target.value)
            setQuantity(parseInt(event.target.value))
        }
    }

    const addNewDetail = () => {
        if(verifySubmit()){
            let sideDishId = null
            let extraPrice = 0
            if (selectedSideDish !== null){
                sideDishId = selectedSideDish.id
                extraPrice = selectedSideDish.extraPrice
            }
            const newDetail = {
                dish: selectedDish,
                sideDish: selectedSideDish,
                customerName: customer,
                subTotal: calculateSubTotal(selectedDish, extraPrice, quantity),
                amount: quantity,
                observation: observation
            }
            setSelectedCategory(null)
            setSelectedDish(null)
            setQuantity(1)
            props.createNewDetail(newDetail)
        } 
    }

    const verifySubmit = () => {
        let isReady = true
        if(selectedCategory === null){
            setErrorCategorySelector(true)
            setHelperTextCategorySelector("Seleccione una categoría")
            isReady = false
        } else {
            setErrorCategorySelector(false)
            setHelperTextCategorySelector("")
        }
        
        if (selectedDish === null){
            setErrorDishSelector(true)
            setHelperTextDishSelector("Seleccione un plato")
            isReady = false
        } else {
            setErrorDishSelector(false)
            setHelperTextDishSelector("")
        }

        if(quantity === null){
            isReady = false
            setErrorQuantity(true)
            setHelperTextQuantity("Especifique la cantidad")
        } else {
            setErrorQuantity(false)
            setHelperTextQuantity("")
        }
        return isReady
    }

    const calculateSubTotal = (dish, extraPrice, quantity) => {
        return (dish.price + extraPrice)*quantity
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
                        items={categories}
                        error={errorCategorySelector}
                        helperText={helperTextCategorySelector}
                        itemText='name'
                        onChange={handleCategoryChange}/>
                </Grid>

                <Grid item xs={3}>
                    <Selector 
                        label="Plato"
                        items={categoryDishes}
                        error={errorDishSelector}
                        helperText={helperTextDishSelector}
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
                        type="number" 
                        label="Cantidad"
                        error={errorQuantity}
                        helperText={helperTextQuantity}
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
    isNew: true,
    menu: [],
    dishChange: function(){},
    addNewDetail: function(){},
    createNewDetail: function(){},
    customer: '',
    orderDetail: null
}

OrderDetailForm.propTypes =
{
    open: PropTypes.bool,
    isNew: PropTypes.bool,
    onClose: PropTypes.func,
    menu: PropTypes.array,
    dishChange: PropTypes.func,
    createNewDetail: PropTypes.func,
    customer: PropTypes.string,
    orderDetail: PropTypes.object
}
