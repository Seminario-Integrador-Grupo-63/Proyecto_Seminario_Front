import React, {useEffect, useState} from 'react';
import {
  Container,
  Typography,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Select,
  MenuItem,
  Dialog,
} from '@mui/material';
import Updatelist from './Updatelist';
import PropTypes from 'prop-types';
import { theme } from '@/Common/Theme/themes';

function UpdatePrices(props: any) {
    const [formData, setFormData] = useState({
        selectedOption: 'ActualizarPorCategoria',
        selectedCategory: '0',
        inputValue: '',
        selectedActualizacion: '',
    });

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [productList, setProductList] = useState([])


    const [reqData, setReqData] = useState({
        percentage: 0,
        categoryId: 0,
        action: 'increase',
    })
    useEffect(() => {
        setReqData({
            percentage: +formData.inputValue,
            categoryId: +formData.selectedCategory,
            action: formData.selectedActualizacion
        })
    }, [formData]);

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };
    const handleUpdateClick = () => {
        props.onSubmit(reqData)
        setProductList(props.productList)
        setIsDialogOpen(true);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                  Actualizar precios
            </Typography>

{/*
            <RadioGroup
                aria-label="Opciones"
                name="selectedOption"
                value={formData.selectedOption}
                onChange={(e) => setFormData({ ...formData, selectedOption: e.target.value })}
            >
                <FormControlLabel value="ActualizarTodos" control={<Radio />} label="Actualizar Todos los Productos" />
                <FormControlLabel value="ActualizarPorCategoria" control={<Radio />} label="Actualizar por Categoría" />
            </RadioGroup>
*/}

            {formData.selectedOption === 'ActualizarPorCategoria' && (
                <div>

                    <TextField
                        select
                        label="Aplicar a "
                        name="selectedCategory"
                        variant="outlined"
                        fullWidth
                        value={formData.selectedCategory}
                        onChange={(e) => setFormData({ ...formData, selectedCategory: e.target.value })}
                        style={{ marginBottom: '1rem' }}
                    >
                        <MenuItem value={"0"}>Todos los Productos</MenuItem>
                        {props.categories.map((category:any, index:number) => (
                            <MenuItem key={index} value={category.id}>
                                Categoría: {category.name}
                            </MenuItem>
                        ))}
                    </TextField>

                </div>
            )}

            <TextField
                label="Porcentaje %"
                name="inputValue"
                variant="outlined"
                fullWidth
                type={"percentage"}
                value={formData.inputValue}
                onChange={(e) => setFormData({ ...formData, inputValue: e.target.value })}
                style={{ marginBottom: '1rem' }}
            />

            <TextField
                select
                label="Actualización"
                variant="outlined"
                margin={"dense"}
                fullWidth
                value={formData.selectedActualizacion}
                onChange={(e) =>
                    setFormData({ ...formData, selectedActualizacion: e.target.value })}
            >
                <MenuItem value={"increase"}>Aumentar</MenuItem>
                <MenuItem value={"decrease"}>Disminuir</MenuItem>
            </TextField>

            <div style={{ display: 'flex', marginTop: '10px', justifyContent: 'space-between' }}>
                <Button
                    type="submit"
                    variant="contained"
                    onClick={handleUpdateClick}
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                    }}>
                    Actualizar
                </Button>
            </div>


        </Container>
  );
}


UpdatePrices.defaultProps = {
    title: 'Actualizar Precios',
    onSubmit: function (){},
    onConfirm: function () {},
    categories: [],
    updateOptions:["increase", "decrease"],
    productList:[],
}
UpdatePrices.propTypes = {
    title: PropTypes.string,
    onSubmit: PropTypes.func,
    onConfirm: PropTypes.func,
    categories: PropTypes.array,
    updateOptions:PropTypes.array,
    productList:PropTypes.array,

};

export default UpdatePrices;
