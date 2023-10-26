// import styles from './CategoriesForm.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {TextField,
        Grid,
        Card,
        Button} from '@mui/material'
import { FormDialog } from '@/Common/FunctionalTemplates/FormDialog';
import { ImageSelector } from '@/Restaurant/ImageSelector/ImageSelector';
import { useState } from 'react';
import { red } from '@mui/material/colors';

export const CategoriesForm = (props: any) => {
    return (<>
        <FormDialog 
            title={props.isNew ? "Nueva categoría" : "Editar categoría"}
            open={props.open}
            onClose={props.onClose}
            onSubmit={props.onSubmit}
            maxWidth='sm'>
            

            <Grid 
                sx={{
                    display: 'grid',
                    columnGap: 3,
                    rowGap: 1,
                    gridTemplateColumns: 'repeat(1, 1fr)',
                    height:'auto',
                    alignItems: 'center',
                    justify: 'center'
                    //overflowY: 'scroll','&::-webkit-scrollbar':{width:0,}
                }}>
                <TextField sx={{marginTop:1}} id="CategoryName" label="Nombre" variant="outlined" />
                <Card
                    sx={{
                        maxWidth: 'sm',
                        marginBottom: 'marginBottom'
                    }}>
                    <Grid
                        sx={{
                        display: 'column',
                        columnGap: 3,
                        rowGap: 1,
                        gridTemplateColumns: 'repeat(1, 1fr)',
                        height:'auto',
                        alignItems: 'center',
                        justify: 'center'
                        //overflowY: 'scroll','&::-webkit-scrollbar':{width:0,}
                        }}>
                        <img height={"50%"} src="https://img.freepik.com/foto-gratis/pizza-salami-champinones_140725-1070.jpg?w=740&t=st=1698324798~exp=1698325398~hmac=6fc9c714ea627800fcbfc90c22a99085d3551074c6f5e674ba92fbd2f076a427" alt="" />
                        <Button color="error" size="small">Agregar Imagen</Button>
                    </Grid>
                </Card>
            </Grid>
        </FormDialog>
    </>);
}

CategoriesForm.defaultProps =
{
    isNew: true,
    open: false,
    onSubmit: function(){},
    onClose: function(){},
}

CategoriesForm.propTypes = 
{
    isNew: PropTypes.bool,
    open: PropTypes.bool,
    onSubmit: PropTypes.func,
    onClose: PropTypes.func,
}