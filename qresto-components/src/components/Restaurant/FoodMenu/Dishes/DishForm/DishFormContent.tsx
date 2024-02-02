
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

    const handlePreparationTimeChange = (preparationTime) => {
        // Handle preparation time change logic
    };

    useImperativeHandle(ref, () => ({
        verifyFields() {
            // Your verification logic
            return true;
        },
    }));

    const loadCategories = () => props.categories.map((category) => category.name);
    const loadSideDishes = () => props.sideDishes.map((sideDish) => sideDish.name);

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
                        <ImageButton onChange={onChangeImage} image={props.dish.image} />
                    </Grid>
                    <Grid sx={{ marginBottom: marginBottom }}>
                        <Selector label="Categoría" items={loadCategories()} value={selectedCategory} />
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
                            value={dish.name}
                            fullWidth
                            onChange={(event) => setDish({ ...dish, name: event.target.value })}
                        />
                    </Grid>
                    <Grid sx={{ marginBottom: marginBottom }}>
                        <TextField
                            label={'Descripción'}
                            value={dish.description}
                            multiline
                            fullWidth
                            maxRows={4}
                            minRows={4}
                            onChange={(event) => setDish({ ...dish, description: event.target.value })}
                        />
                    </Grid>
                    <Grid sx={{ marginBottom: marginBottom }}>
                        <PreparationTimeField onChange={handlePreparationTimeChange} value={props.dish.preparationTime} />
                    </Grid>
                    <Grid sx={{ marginBottom: marginBottom }}>
                        <TextField
                            fullWidth
                            type="number"
                            value={props.dish.price}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                        />
                    </Grid>
                </Grid>

                {/* --------------------------------------------------------- Parte de abajo */}
                <Grid sx={{ marginBottom: marginBottom }} item xs={12}>
                    <SelectorChips label={'Guarniciones'} items={loadSideDishes()} />
                </Grid>
            </Grid>
        </Container>
    );
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
