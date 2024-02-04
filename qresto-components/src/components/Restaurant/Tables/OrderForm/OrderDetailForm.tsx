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
    const [title, setTitle] = useState('')
    const [submitText, setSubmitText] = useState('')
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
    const [initialized, setInitialized] = useState(false)

    useEffect(() => {
        setCustomer(props.customer)
    }, [props.customer])

    useEffect(() => {
        setupEditForm()
    }, 
    [
        props.isNew, 
        props.orderDetail, 
        categories, 
        props.menu,
        selectedDish,
        categoryDishes,
        sideDishes,
        selectedCategory,
        selectedSideDish
    ])

    const setupEditForm = () => {
        if(!initialized){ // Si el componente todavía no está inicializado
            setCategories(props.menu)
            if(!props.isNew){ // Si se abre para editar un detalle
                setTitle("Editar Detalle de Orden")
                setSubmitText("Actualizar")
                if(props.orderDetail !== null){ // Si se pasó un detalle de orden
                    setQuantity(props.orderDetail.amount)
                    setQuantityInput(props.orderDetail.amount.toString())
                    setObservation(props.orderDetail.observation)
                    if(selectedCategory === null){ // Si aún no se seleccionó la categoría
                        if(categories.length > 0){
                            setupSelectedCategory(props.orderDetail.dish)
                        }
                    } else if (selectedDish === null){ // Si todavía no se selecció un plato
                        if(categoryDishes.length > 0){ // Si ya hay platos cargados en el selector
                            setSelectedDish(props.orderDetail.dish)
                        } else { // Si no hay platos cargados en el selector
                            setupCategoryDishes()
                        }
                    } else if (sideDishes.length === 0){ // Si todavía no se seleccionó una guarnición
                        if(selectedDish.sideDishes.length > 0){ // Si hay guarniciones cargadas en el selector
                            setSideDishes(selectedDish.sideDishes)
                        }
                    } else if (props.orderDetail.sideDish !== null){ // Si el detalle incluye una guarnición
                        if(selectedSideDish === null){ // Si la guarnición seleccionada todavía no se seteó
                            setSelectedSideDish(props.orderDetail.sideDish)
                        } else { // Si ya se cargó todo
                            setInitialized(true)
                        }
                    }
                }
            } else { // Si se abre para crear un detalle
                setTitle("Crear Detalle de Orden")
                setSubmitText("Crear")
            }
        }
    }

    const setupSelectedCategory = (dish) => {
        categories.forEach(category => {
            if(category.dishes.some(d => d.id === dish.id)){
                setSelectedCategory(category)
            }
        })
    }

    const setupCategoryDishes = () => {
        /**
        Se cargan en el selector los platos de la categoría seleccionada
        Si no hay categoría seleccionada no se carga nada
        */
        const index = categories.findIndex(c => c.id === selectedCategory.id )
        if(index !== -1){
            setCategoryDishes(categories[index].dishes)
        }
    }

    // const setupCreateDetail = () => {
    //     setTitle("Crear Detalle de Orden")
    //     setSubmitText("Crear")
    //     setSelectedCategory(null)
    //     setCategoryDishes([])
    //     setSideDishes([])
    //     setSelectedDish(null)
    //     setSelectedSideDish(null)
    //     setQuantity(1)
    //     setQuantityInput('1')
    //     setObservation('')
    // }

    const handleCategoryChange = (category) => {
        setSideDishes([])
        if(category === ''){
            setSelectedDish(null)
            setSelectedCategory(null)
            setCategoryDishes([])
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
        } else if (isNaN(event.target.value)){
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

    const submit = () => {
        console.log(' ')
        console.log('OrderDetailForm submit()')
        console.log('selectedSideDish: ', selectedSideDish)
        if(verifySubmit()){
            let sideDishId = null
            let extraPrice = 0
            if (selectedSideDish !== null){
                sideDishId = selectedSideDish.id
                extraPrice = selectedSideDish.extraPrice
            }
            const detail = {
                dish: selectedDish,
                sideDish: selectedSideDish,
                customerName: customer,
                subTotal: calculateSubTotal(selectedDish, extraPrice, quantity),
                amount: quantity,
                observation: observation
            }
            clearComponent()
            if(props.isNew){
                props.onCreate(detail)
            } else {
                props.onUpdate(detail)
            }
            // props.submit(detail)
        } 
    }

    const clearComponent = () => {
        setSelectedCategory(null)
        setSelectedDish(null)
        setCategoryDishes([])
        setSideDishes([])
        setQuantity(1)
        setQuantityInput('1')
        setObservation('')
        setSelectedSideDish(null)
        setInitialized(false)
        
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

    const onClose = () => {
        clearComponent()
        props.onClose()
    }

    return (<>
        <FormDialog 
            open={props.open}
            title={title}
            submitText={submitText}
            onSubmit={submit}
            closeText='Cancelar'
            onClose={onClose}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Selector 
                        label="Categoría"
                        items={categories}
                        value={selectedCategory}
                        error={errorCategorySelector}
                        helperText={helperTextCategorySelector}
                        itemText='name'
                        onChange={handleCategoryChange}/>
                </Grid>

                <Grid item xs={3}>
                    <Selector 
                        label="Plato"
                        items={categoryDishes}
                        value={selectedDish}
                        error={errorDishSelector}
                        helperText={helperTextDishSelector}
                        itemText={'name'}
                        onChange={handleDishChange}/>
                </Grid>

                <Grid item xs={3}>
                    <Selector 
                        label="Guarnición"
                        value={selectedSideDish}
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
    // submit: function(){},
    onCreate: function(){},
    onUpdate: function(){},
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
    // submit: PropTypes.func,
    onCreate: PropTypes.func,
    onUpdate: PropTypes.func,
    customer: PropTypes.string,
    orderDetail: PropTypes.object
}
