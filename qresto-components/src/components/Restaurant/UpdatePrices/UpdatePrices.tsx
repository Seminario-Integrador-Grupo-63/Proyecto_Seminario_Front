import React, {useEffect, useState} from 'react';
import {
  Container,
  Typography,
  Button,
  TextField,
  Dialog,
  MenuItem,
} from '@mui/material';
import PropTypes from 'prop-types';
import { theme } from '@/Common/Theme/themes';
import Confirmation from './Confirmation'
import UpdateList from './Updatelist';

function UpdatePrices(props: any) {
    const [formData, setFormData] = useState({
        selectedOption: 'ActualizarPorCategoria',
        selectedCategory: '0',
        inputValue: '',
        selectedActualizacion: '',
    });
    const [updateListOpen, setUpdateListOpen] = useState(false)
    const [confirmationOpen, setConfirmationOpen] = useState(false)
    const [previewDishesPrices, setPreviewDishesPrices] = useState([])
    const [uuid, setUuid] = useState('')

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

    const handleListClose = () => {
        setUpdateListOpen(false)
    }

    const handleConfirmationOpen = () => {
        setConfirmationOpen(true)
    }

    const handleConfirmationClose = () => {
        setConfirmationOpen(false)
    }

    const handleUpdateClick = async () => {
        const result = await props.onSubmit(reqData)
        setPreviewDishesPrices(result.dishPrices)
        setUuid(result.prices_code)
        setUpdateListOpen(true)
    }

    const confirmUpdate = async () => {
        const result = await props.confirmUpdatePrices(uuid)
        if(result){
            setConfirmationOpen(false)
            setUpdateListOpen(false)
        }
    }

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                  Actualizar precios
            </Typography>

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
                        style={{ marginBottom: '1rem' }}>
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
                style={{ marginBottom: '1rem' }}/>

            <TextField
                select
                label="Actualización"
                variant="outlined"
                margin={"dense"}
                fullWidth
                value={formData.selectedActualizacion}
                onChange={(e) => setFormData({ ...formData, selectedActualizacion: e.target.value })}>
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

            <Dialog open={updateListOpen} onClose={handleListClose}>
                <UpdateList
                    open={updateListOpen}
                    onClose={handleListClose}
                    onSubmit={handleConfirmationOpen}
                    dishList={previewDishesPrices}/>
            </Dialog>

            <Dialog open={confirmationOpen} onClose={handleConfirmationClose}>
                <Confirmation
                    open={confirmationOpen}
                    onClose={handleConfirmationClose}
                    onSubmit={confirmUpdate}/>
            </Dialog>
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
    confirmUpdatePrices: function(){}
}
UpdatePrices.propTypes = {
    title: PropTypes.string,
    onSubmit: PropTypes.func,
    onConfirm: PropTypes.func,
    categories: PropTypes.array,
    updateOptions:PropTypes.array,
    productList:PropTypes.array,
    confirmUpdatePrices: PropTypes.func
};

export default UpdatePrices;