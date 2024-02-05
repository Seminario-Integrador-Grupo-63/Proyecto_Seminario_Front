
import styles from './DishForm.module.scss';
import React, {
    useState,
    useEffect,
    forwardRef,
    useImperativeHandle
} from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Grid,
    Typography,
    TextField,
    InputAdornment,
    Checkbox,
    FormGroup,
    FormControlLabel
} from '@mui/material'
import { ImageButton } from '@/Restaurant/ImageSelector/ImageButton';
import { PreparationTimeField } from './PreparationTimeField';
import { Selector } from '@/Common/Selector';
import { SelectorChips } from '@/Common/SelectorChips';

export const DishFormContent = forwardRef((props: any, ref: any) => {
    const marginBottom = '15px';

    const [dish, setDish] = useState({
        name: '',
        description: '',
        preparationTime: '',
        price: '',
        categories: [],
        sideDishes: [],
    });

    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        if (props.isNew) {
            setDish({
                name: '',
                description: '',
                preparationTime: '',
                price: '',
                categories: [],
                sideDishes: [],
            });
        } else {
            setDish({ ...props.dish });
        }
    }, [props.isNew, props.dish]);

    
    useImperativeHandle(ref, () => ({
        verifyFields() {
            // Your verification logic
            return true;
        },
    }));

    const loadCategories = () => props.categories.map((category) => category);
    const loadSideDishes = () => props.sideDishes.map((sideDish) => sideDish.name); //si no mandamos sideDish.name salta un error, en SelectorChips haria falta un value com en Selector

    const onChangeImage = () => {
        console.log(' ');
        console.log('DishFormContent onChangeImage()');
        // Handle image change logic
    };

    return (
        <Container>
            <Grid container spacing={2}>
                {/* -----------------------------------------------------Lado izquierdo */}
                <Grid
                    item
                    xs={6}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Grid
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginBottom: marginBottom,
                        }}
                    >
                        <ImageButton onChange={(e) =>
                        props.setImage(e.target.value )} image={props.image} /> 
                    </Grid>
                    {/* si pongo props.dish.image aparece la imagen cuando oprimo editar, sino No*/ }
                    <Grid sx={{ marginBottom: marginBottom }}>
                        <Selector label="Categoría" items={loadCategories()} value={props.category}
                        itemText= "name"
                        onChange={(e) =>{
                        props.setCategory(e.target.value ); console.log(e)}} />
                    </Grid>
                </Grid>

                {/* --------------------------------------------------------- Lado derecho */}
                <Grid
                    item
                    xs={6}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Grid sx={{ marginBottom: marginBottom }}>
                        <TextField
                            label={'Nombre del Plato'}
                            value={props.name}
                            fullWidth
                            onChange={(e) =>
                                props.setName(e.target.value )}
                        />
                    </Grid>
                    <Grid sx={{ marginBottom: marginBottom }}>
                        <TextField
                            label={'Descripción'}
                            value={props.description}
                            multiline
                            fullWidth
                            maxRows={4}
                            minRows={4}
                            onChange={(e) =>
                                props.setDescription(e.target.value )}
                        />
                    </Grid>
                    <Grid sx={{ marginBottom: marginBottom }}>
                        <PreparationTimeField onChange={(e) =>
                        props.setPreparationTime(e.target.value )} value={props.preparationTime}
                         />
                    </Grid>
                    <Grid sx={{ marginBottom: marginBottom }}>
                        <TextField
                            fullWidth
                            type="number"
                            value={props.price}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                            onChange={(e) =>
                                props.setPrice(e.target.value )}
                        />
                    </Grid>
                </Grid>

                {/* --------------------------------------------------------- Parte de abajo */}
                <Grid sx={{ marginBottom: marginBottom }} item xs={12}>
                    <SelectorChips label={'Guarniciones'} items={loadSideDishes()} 
                    onChange={(e) =>{
                        props.setOptions(e.target.value ); console.log(e.target.value)}}/>
                </Grid>
            </Grid>
        </Container>
    );
    // solo esta guardando el nombre y descripcion.. el respo aparece como undefined
});

DishFormContent.defaultProps = {
    dish: null,
    isNew: true,
    categories: [],
    sideDishes: [],
};

DishFormContent.propTypes = {
    dish: PropTypes.object,
    isNew: PropTypes.bool,
    categories: PropTypes.array,
    sideDishes: PropTypes.array,
};
