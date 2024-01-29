import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  AppBar,
  Toolbar,
  Grid,
  InputLabel,
} from '@mui/material';
import PropTypes from 'prop-types';
import { theme } from '@/Common/Theme/themes';

function UserEdit({ permisosOpciones }) {
    const [formData, setFormData] = useState({
    selectedOption: '',
    selectedCategory: '',
    inputValueNombre: '',
    inputValueUsuario: '',
    selectedActualizacion: '',
    inputValueContraseña: '',
    inputValueDescripcion: '',
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCloseDialog = () => {
      setIsDialogOpen(false);
  };

  const handleUpdateClick = () => {
      setIsDialogOpen(true);
  };

  return (<>
      <AppBar
          position="sticky"
          sx={{
              width: { sm: `100%` },
              marginTop: 'auto',
              bottom: 0,
              backgroundColor: theme.palette.primary.main
          }}
      >
          <Toolbar>
              <Grid container>
                  <Grid
                      xs={6}
                      item
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                    <Typography
                        sx={{
                          display: 'flex',
                          color: theme.palette.secondary.main,
                          alignItems: 'center',
                          typography: { lg: 'h5' }
                        }}>
                      {"Editar Usuario"}
                    </Typography>

                  </Grid>
              </Grid>
          </Toolbar>
      </AppBar>

    <div style={{ marginTop: '2rem' }}>
      <Typography>
        Nombre de Cuenta
      </Typography>
      <TextField
          label="Nombre de Cuenta"
          name="inputValueNombre"
          variant="outlined"
          fullWidth
          value={formData.inputValueNombre}
          onChange={(e) => setFormData({ ...formData, inputValueNombre: e.target.value })}
      />
    </div>

    <div style={{ marginBottom: '1rem' }}>
      <Typography>
        Usuario
      </Typography>
      <TextField
          label="Usuario"
          name="inputValueUsuario"
          variant="outlined"
          fullWidth
          value={formData.inputValueUsuario}
          onChange={(e) => setFormData({ ...formData, inputValueUsuario: e.target.value })}
      />
    </div>
    {formData.selectedOption === 'ActualizarPorCategoria' && (
        <div>
          <Typography variant="h6" gutterBottom>
            Permisos
          </Typography>
          <Select
              label="Permisos"
              name="selectedCategory"
              variant="outlined"
              fullWidth
              value={formData.selectedCategory}
              onChange={(e) => setFormData({ ...formData, selectedCategory: e.target.value })}
              style={{ marginBottom: '1rem' }}
          >
            {permisosOpciones.map((category, index) => (
                <MenuItem key={index} value={category}>
                  {category}
                </MenuItem>
            ))}
          </Select>
        </div>
    )}

    <Typography >
      Permisos
    </Typography>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
    <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        fullWidth
        label="Age"
        value={formData.selectedActualizacion}
        onChange={(e) => setFormData({ ...formData, selectedActualizacion: e.target.value })}
        style={{ marginBottom: '1rem' }}>

      {permisosOpciones.map((Opc, index) => (
          <MenuItem key={index} value={Opc}>
            {Opc}
          </MenuItem>
      ))}
    </Select>
    {formData.selectedOption === 'ActualizarPorCategoria' && (
        <div style={{ marginBottom: '1rem' }}>
          <Typography variant="h6">
            Permisos
          </Typography>
          <Select
              label="Permisos"
              name="selectedCategory"
              variant="outlined"
              fullWidth
              value={formData.selectedCategory}
              onChange={(e) => setFormData({ ...formData, selectedCategory: e.target.value })}
          >
            {permisosOpciones.map((category, index) => (
                <MenuItem key={index} value={category}>
                  {category}
                </MenuItem>
            ))}
          </Select>
        </div>
    )}

    <div style={{ marginBottom: '1rem' }}>
      <Typography>
        Contraseña
      </Typography>
      <TextField
          type="password"
          label="Contraseña"
          name="inputValueContraseña"
          variant="outlined"
          fullWidth
          value={formData.inputValueContraseña}
          onChange={(e) => setFormData({ ...formData, inputValueContraseña: e.target.value })}
      />
    </div>

    <div style={{ marginBottom: '1rem' }}>
      <Typography>
        Descripcion
      </Typography>
      <TextField
          label="Descripcion"
          name="inputValueDescripcion"
          variant="outlined"
          fullWidth
          value={formData.inputValueDescripcion}
          onChange={(e) => setFormData({ ...formData, inputValueDescripcion: e.target.value })}
      />
    </div>

    <div style={{ display: 'flex', marginTop: '10px', justifyContent: 'space-between' }}>
      <Button
          type="submit"
          variant="contained"
          onClick={handleUpdateClick}
          sx={{
            backgroundColor: theme.palette.primary.main,
          }}
      >
        Actualizar
      </Button>
      <Button
          type="submit"
          variant="contained"
          onClick={handleUpdateClick}
          sx={{
            backgroundColor: theme.palette.primary.main,
          }}
      >
        Eliminar Usuario
      </Button>
    </div>
  </>);
}

UserEdit.propTypes = {
  title: PropTypes.string,
};

export default UserEdit;

