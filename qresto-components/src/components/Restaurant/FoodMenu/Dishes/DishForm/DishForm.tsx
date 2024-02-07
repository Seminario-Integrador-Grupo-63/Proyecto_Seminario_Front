import PropTypes from 'prop-types';
import { FormDialog } from '@/Common/FormDialog';
import React, {
    useState,
    useEffect,
} from 'react';
import {
    TextField,
    InputAdornment,
    Grid
} from '@mui/material'
import { ImageButton } from '@/Restaurant/ImageSelector/ImageButton';
import { Selector } from '@/Common/Selector';
import { SelectorChips } from '@/Common/SelectorChips';
import { NumberField } from '@/Common/NumberField';
import { ImageSelector } from '@/Restaurant/ImageSelector/ImageSelector';

const restaurantId = 1

export const DishForm = (props: any) => {
    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState(false)
    const [nameHelperText, setNameHelperText] = useState('')
    const [description, setDescription] = useState('')
    const [selectedSideDishes, setSelectedSideDishes] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedCategoryError, setSelectedCategoryError] = useState(false)
    const [selectedsCategoryHelperText, setSelectedCategoryHelperText] = useState('')
    const [preparationTime, setPreparationTime] = useState(null)
    const [price, setPrice] = useState(null)
    const [priceError, setPriceError] = useState(false)
    const [priceHelperText, setPriceHelperText] = useState('')
    const [openImageSelector, setOpenImageSelector] = useState(false)

    const marginBottom = '15px'
    
    useEffect(() => {
        if(props.isNew){
            clear()
        } else {
            if(props.dish !== null){
                setImage(props.dish.image)
                setName(props.dish.name)
                setDescription(props.dish.description)
                setPrice(props.dish.price)
                setPreparationTime(props.dish.preparationTime)
                setSelectedSideDishes(props.dish.sideDishes)
                if(props.categories.length > 0){
                    setupSelectedCategory()
                }
            }
        }
    }, [props.dish, props.isNew, props.categories])

    const setupSelectedCategory = () => {
        let index = props.categories.findIndex(category => {
            return category.dishes.some(dish => dish.id === props.dish.id)
        })

        if(index !== -1){
            setSelectedCategory(props.categories[index])
        }
    }

    const handlePreparationTimeChange = (value) => {
        setPreparationTime(value)
    }

    const handlePriceChange = (value) => {
        setPrice(value)
    }

    const clear = () => {
        setImage('')
        setName('')
        setDescription('')
        setSelectedCategory(null)
        setSelectedSideDishes([])
        setPrice(null)
        setPreparationTime(null)
        setNameError(false)
        setNameHelperText('')
        setPriceError(false)
        setPriceHelperText('')
        setSelectedCategoryError(false)
        setSelectedCategoryHelperText('')
    }

    const onOpenImageSelector = () => {
        setOpenImageSelector(true)
    }

    const onChangeImage = (image) => {
        setImage(image)
        setOpenImageSelector(false)
    }

    const handleSelectedSideDishesChange = (values) => {
        setSelectedSideDishes(values)
    }

    const onSubmit = () => {
        if(verifyFields()){
            let selectedSideDishesIds = []
            selectedSideDishes.forEach(sideDish => {
                selectedSideDishesIds.push(sideDish.id)
            })

            if(props.isNew){
                let object = {
                    dish: {
                        name: name,
                        description: description,
                        preparationTime: preparationTime,
                        category: selectedCategory.id,
                        restaurant: restaurantId,
                        price: price,
                        image: image,
                    },
                    options: selectedSideDishesIds
                }
                props.onCreate(object)
            } else {
                let object = {
                    dish: {
                        id: props.dish.id,
                        name: name,
                        description: description,
                        preparationTime: preparationTime,
                        category: selectedCategory.id,
                        restaurant: restaurantId,
                        price: price,
                        image: image,
                    },
                    options: selectedSideDishesIds
                }
                props.onUpdate(object)
            }
        }
    }

    const handleCategoryChange = (value) => {
        if(value === ''){
            setSelectedCategory(null)
        } else {
            setSelectedCategory(value)
        }
    }
    
    const verifyFields = () => {
        let isReady = true
        if(name === ''){
            isReady = false
            setNameError(true)
            setNameHelperText('Este campo es obligatorio')
        } else {
            setNameError(false)
            setNameHelperText('')
        }

        if(price === null){
            isReady = false
            setPriceError(true)
            setPriceHelperText('Este campo es obligatorio')
        } else {
            setPriceError(false)
            setPriceHelperText('')
        }

        if(selectedCategory === null){
            isReady = false
            setSelectedCategoryError(true)
            setSelectedCategoryHelperText('Este campo es obligatorio')
        } else {
            setSelectedCategoryError(false)
            setSelectedCategoryHelperText('')
        }

        return isReady
    }

    const handleNameChange = (event) => {
        let nameAux = event.target.value
        setName(nameAux)
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    const onClose = () => {
        clear()
        props.onClose()
    }

    return (<>
        <FormDialog
            open={props.open}
            onSubmit={onSubmit}
            submitText={props.isNew?'Crear':'Actualizar'}
            closeText={'Cerrar'}
            onClose={onClose}
            title={props.isNew?'Agregar Plato':'Editar Plato'}>
            <Grid container spacing={2}>
                {/* -----------------------------------------------------Lado izquierdo */}
                <Grid item xs={6} 
                    sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                    <Grid 
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginBottom: marginBottom
                        }}>
                        
                        <ImageButton 
                            onChange={onOpenImageSelector}
                            image={image}/>
                    </Grid>
                    <Grid sx={{marginBottom: marginBottom}}>
                        <Selector
                            label={'Categorías'} 
                            itemText={'name'}
                            error={selectedCategoryError}
                            helperText={selectedsCategoryHelperText}
                            onChange={handleCategoryChange}
                            value={selectedCategory}
                            items={props.categories}/>
                    </Grid>
                </Grid>

                {/* --------------------------------------------------------- Lado derecho */}
                <Grid item xs={6}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                    <Grid sx={{marginBottom: marginBottom}}>
                        <TextField
                            label={'Nombre del Plato'}
                            onChange={handleNameChange}
                            error={nameError}
                            helperText={nameHelperText}
                            value = {name}
                            fullWidth/>
                    </Grid>
                    <Grid sx={{marginBottom: marginBottom}}>
                        <TextField
                            label={'Descripción'}
                            value={description}
                            onChange={handleDescriptionChange}
                            multiline
                            fullWidth
                            maxRows={4}
                            minRows={4}/>
                    </Grid>
                    <Grid sx={{marginBottom: marginBottom}}>
                        <NumberField
                            fullWidth
                            label={'Tiempo de preparación'}
                            value={preparationTime}
                            onChange={handlePreparationTimeChange}/>
                    </Grid>
                    <Grid sx={{marginBottom: marginBottom}}>
                        <NumberField
                            fullWidth
                            label={'Precio'}
                            error={priceError}
                            helperText={priceHelperText}
                            value={price}
                            onChange={handlePriceChange}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>
                            }}/>
                    </Grid>
                </Grid>
                
                {/* --------------------------------------------------------- Parte de abajo */}
                <Grid sx={{marginBottom: marginBottom}} item xs={12}>
                    <SelectorChips
                        label={'Guarniciones'} 
                        itemText={'name'}
                        onChange={handleSelectedSideDishesChange}
                        values={selectedSideDishes}
                        items={props.sideDishes}/>
                </Grid>
            </Grid>
            
            <ImageSelector 
                open={openImageSelector}
                onSubmit={onChangeImage}
                onClose={() => setOpenImageSelector(false)}/>

        </FormDialog>
    </>);
}

DishForm.defaultProps =
{
    dish: null,
    isNew: true,
    categories: [],
    sideDishes: [],
    open: false,
    onCreate: function(){},
    onUpdate: function(){},
    onClose: function(){},
    title: 'Title'
}

DishForm.propTypes = 
{
    dish: PropTypes.object,
    isNew: PropTypes.bool,
    categories: PropTypes.array,
    sideDishes: PropTypes.array,
    open: PropTypes.bool,
    onCreate: PropTypes.func,
    onUpdate: PropTypes.func,
    onClose: PropTypes.func,
    title: PropTypes.string,
}
