import React, { useState } from 'react';
import { DataGridPro } from '@mui/x-data-grid-pro';
import {
  randomId,
  randomInt,
  randomTraderName,
} from '@mui/x-data-grid-generator';
import { Button, Dialog, DialogActions, DialogTitle, DialogContent, Divider } from '@mui/material';
import Confirmation from './Confirmation';

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'plato', headerName: 'Plato', width: 200 },
  { field: 'precio', headerName: 'Precio', width: 150 },
];

const generateRows = () => {
  const rows = [];

  for (let i = 0; i < 10; i += 1) {
    rows.push({
      id: randomId(),
      plato: randomTraderName(),
      precio: randomInt(5, 50), // Precios aleatorios entre 5 y 50
    });
  }

  return rows;
};

export default function PlatosTable() {
  const [rows] = useState(generateRows());
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleOpenSubDialog = () => {
    setIsDialogOpen(true);
  };

  const handleActualizarPrecios = () => {
    setIsDialogOpen(false);
  };

  return (
    <div style={{ height: 1000, width: '100%' }}>
      <DataGridPro columns={columns} rows={rows} />

      {/* Div para envolver los botones */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '22px' }}>
        <Button  onClick={() => setIsDialogOpen(true)}>
          <Confirmation/>
        </Button>
        </div>

      </div>
  );
}
