import React, { useState } from 'react';
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
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import Updatelist from './Updatelist';
import PropTypes from 'prop-types';
import { theme } from '@/components/Common/Theme/themes';

function UpdatePrices({ categoryOptions, actualizacionOpciones, listaProducto }) {
  const [formData, setFormData] = useState({
    selectedOption: '',
    selectedCategory: '',
    inputValue: '',
    selectedActualizacion: '',
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

 

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleUpdateClick = () => {
    setIsDialogOpen(true);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Actualizar Platos
      </Typography>

      <RadioGroup
        aria-label="Opciones"
        name="selectedOption"
        value={formData.selectedOption}
        onChange={(e) => setFormData({ ...formData, selectedOption: e.target.value })}
      >
        <FormControlLabel value="ActualizarTodos" control={<Radio />} label="Actualizar Todos los Productos" />
        <FormControlLabel value="ActualizarPorCategoria" control={<Radio />} label="Actualizar por Categoría" />
      </RadioGroup>

      {formData.selectedOption === 'ActualizarPorCategoria' && (
        <div>
          <Typography variant="h6" gutterBottom>
            Categoría
          </Typography>
          <Select
            label="Categoría"
            name="selectedCategory"
            variant="outlined"
            fullWidth
            value={formData.selectedCategory}
            onChange={(e) => setFormData({ ...formData, selectedCategory: e.target.value })}
            style={{ marginBottom: '1rem' }}
          >
            {categoryOptions.map((category, index) => (
              <MenuItem key={index} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </div>
      )}

      <Typography variant="h4" gutterBottom>
        Taza
      </Typography>
      <TextField
        label="Porcentaje %"
        name="inputValue"
        variant="outlined"
        fullWidth
        value={formData.inputValue}
        onChange={(e) => setFormData({ ...formData, inputValue: e.target.value })}
        style={{ marginBottom: '1rem' }}
      />

      <Typography variant="h6" gutterBottom>
        Actualización
      </Typography>
      <Select
        fullWidth
        value={formData.selectedActualizacion}
        onChange={(e) => setFormData({ ...formData, selectedActualizacion: e.target.value })}
        style={{ marginBottom: '1rem' }}
      >
        {actualizacionOpciones.map((Opc, index) => (
          <MenuItem key={index} value={Opc}>
            {Opc}
          </MenuItem>
        ))}
      </Select>
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

      {/* Ventana flotante */}
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <Updatelist open={isDialogOpen} onClose={handleCloseDialog} listaProducto={listaProducto} />
      </Dialog>
    </Container>
  );
}

UpdatePrices.propTypes = {
  title: PropTypes.string,
};

export default UpdatePrices;
