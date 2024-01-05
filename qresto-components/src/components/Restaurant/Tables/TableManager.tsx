// import styles from './TableManager.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { 
    Container, 
    Grid, 
    Button 
} from '@mui/material'

export const TableManager = (props: any) => {
    return (<>
        <Container maxWidth={false}>
            <Grid container justifyContent="space-between">
                <Grid item xs={3}>
                    <Button variant="contained">Agregar Orden</Button>
                </Grid>
                <Grid item xs={3} sx={{display: 'flex', justifyContent:'right'}}>
                    <Button
                        sx={{marginRight: '5px', marginLeft: '5px'}} 
                        variant="contained">
                        Editar
                    </Button>
                    <Button 
                        sx={{marginRight: '5px', marginLeft: '5px'}}
                        variant="contained">
                        Generar QR
                    </Button>
                </Grid>
            </Grid>
        </Container>
    </>);
}

TableManager.defaultProps =
{

}

TableManager.propTypes =
{

}


