// Confirmation.js
import React from 'react';
import { Dialog, DialogActions, Button, Typography } from '@mui/material';
import { theme } from '@/Common/Theme/themes';
import PropTypes from "prop-types";

function Confirmation(props: any) {
  return (
    <div
      style={{

        maxWidth: 200,
        maxHeight: 100, 
      }}>
      <Dialog open={props.open} onClose={props.onClose}>
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
            onClick={props.onSubmit}
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
            onClick={props.onClose}
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


Confirmation.propTypes = {
    onSubmit: PropTypes.func,
    open: PropTypes.bool,
    onClose: PropTypes.func,
}