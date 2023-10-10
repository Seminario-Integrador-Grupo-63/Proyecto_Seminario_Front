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

function UpdatePrices() {
  const [formData, setFormData] = useState({
    selectedOption: '',
    selectedCategory: '',
    inputValue: '',
    selectedActualizacion: '',
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [preciosActualizados, setPreciosActualizados] = useState([]);

  const categoryOptions = ['Categoría 1', 'Categoría 2', 'Categoría 3'];
  const ActualizacionOpciones = ['Aumentar', 'Disminuir'];

  const handleActualizarPrecios = () => {
    // Aquí puedes implementar la lógica para actualizar los precios y luego actualizar el estado de "preciosActualizados".
    // Por ejemplo, puedes hacer una solicitud a un servidor para actualizar los precios y luego establecer los nuevos precios en el estado.
    // setPreciosActualizados(nuevosPrecios);
    setIsDialogOpen(false);
  };

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
        {ActualizacionOpciones.map((Opc, index) => (
          <MenuItem key={index} value={Opc}>
            {Opc}
          </MenuItem>
        ))}
      </Select>

      <Button variant="outlined" color="primary" onClick={handleUpdateClick}>
        Actualizar
      </Button>

      {/* Ventana flotante */}
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>"Listado de Precios Actualizados"</DialogTitle>
        <Updatelist />

        <DialogActions>
             <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Button variant="outlined" color="primary" onClick={handleCloseDialog}>
                 Cancelar
                </Button>
            </div>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default UpdatePrices;
