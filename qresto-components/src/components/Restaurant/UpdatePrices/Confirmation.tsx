// Confirmation.js
import React from 'react';
import { 
    Dialog, 
    DialogActions, 
    Button, 
    Typography,
    ThemeProvider 
} from '@mui/material';
import { theme } from '@/Common/Theme/themes';
import PropTypes from "prop-types";

function Confirmation(props: any) {
  return (
    <div
      style={{
        padding: '10px',
        maxWidth: 200,
        maxHeight: 100, 
      }}>
      <Dialog 
        open={props.open} 
        onClose={props.onClose}>
        <Typography
          color="white"
          sx={{
            backgroundColor: theme.palette.primary.main,
            textAlign: "center",
            fontSize: 25,
            marginTop:5,
          }}
        >
          Confirmar
        </Typography>
        <Typography 
            variant="h6" 
            gutterBottom align="center" 
            marginTop={2}
            marginRight={4}
            marginLeft={4}>
            Estas seguro de que quieres Confirmar?
        </Typography>
        <hr />

        <DialogActions>
          <ThemeProvider theme={theme}>
            <Button
                type="submit"
                onClick={props.onSubmit}
                color={"primary"}>
                Confirmar
            </Button>

            <Button
                type="submit"
                onClick={props.onClose}
                sx={{color: 'black'}}>
                Cancelar
            </Button>
          </ThemeProvider>

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