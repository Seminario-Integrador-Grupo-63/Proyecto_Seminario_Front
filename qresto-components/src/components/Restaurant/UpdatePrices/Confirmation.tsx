// Confirmation.js
import React from 'react';
import { Dialog, DialogTitle, DialogActions, Button, Typography } from '@mui/material';
import { theme } from '@/components/Common/Theme/themes';

function Confirmation({ open, onClose }) {
  return (
    <div
      style={{

        maxWidth: 200,
        maxHeight: 100, 
      }}>
      <Dialog open={open} onClose={onClose}>
        <Typography
          color="white"
          sx={{
            backgroundColor: theme.palette.primary.main,
            textAlign: "center",
            fontSize: 25,
            marginTop:5
          }}
        >
          Confirmar
        </Typography>
        <Typography variant="h6" gutterBottom align="center" marginTop={2} >
          Estas seguro de que quieres Confirmar?
        </Typography>
        <hr />

        <DialogActions>

          <Button
            type="submit"
            variant="contained"
            onClick={onClose}
            sx={{
              backgroundColor: theme.palette.primary.main,
              margin: 1
            }}
          >
            Confirmar
          </Button>

          <Button
            type="submit"
            variant="contained"
            onClick={onClose}
            sx={{
              backgroundColor: theme.palette.primary.main,
              margin: 1
            }}
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Confirmation;
