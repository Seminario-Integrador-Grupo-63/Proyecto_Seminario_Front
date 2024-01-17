// import styles from './CategoriesForm.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {TextField,
        Grid,
        Card,
        Button} from '@mui/material'
import { FormDialog } from '@/Common/FunctionalTemplates/FormDialog';
import { ImageButton } from '@/Restaurant/ImageSelector/ImageButton';
import { ImageSelector } from '@/Restaurant/ImageSelector/ImageSelector';
import { useState, useEffect } from 'react';

export const CategoriesForm = (props: any) => {

    const [categoryName, setCategoryName] = useState('')
    const [categoryImage, setCategoryImage] = useState('')

    useEffect(() =>{
        // if(props.category != null){
        //     if(props.isNew == false){
        //         setCategoryName(props.category.name)
        //         setCategoryImage(props.category.image)
        //     }
        if(props.isNew == false){
                setCategoryName(props.category.name)
                setCategoryImage(props.category.image)
            }
        else
            {
                setCategoryName('')
                setCategoryImage('')
            }
        },[props.category])

    
    const handleName=(event)=>{
        setCategoryName(event.target.value)
    }
    const deleteCategory=()=>{
        props.onDelete(props.category.id)
    }
    const updateCategory=()=>{
        let category = null
        if (props.isNew){
            category = {
                name: categoryName,
                image: categoryImage
            }
        }
        else{
            category = {
                id: props.category.id,
                name: categoryName,
                image: categoryImage
            }
        }
        props.onUpdate(category)
    }
    return (<>
        <FormDialog 
            title={props.isNew ? "Nueva categoría" : "Editar categoría"}
            open={props.open}
            closeText='Cerrar'
            onClose={props.onClose}
            submitText='Actualizar'
            onSubmit={props.onUpdate}
            maxWidth='sm'
            action1Visible
            action1Text= 'Eliminar'
            onAction1={props.onDelete}>
            
            

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
                <TextField 
                    sx={{marginTop:1}}
                    id="CategoryName"
                    label="Nombre"
                    variant="outlined"
                    value={categoryName}
                    onChange={handleName}
                    />
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
                        <ImageButton
                            // image='https://img.freepik.com/foto-gratis/pizza-salami-champinones_140725-1070.jpg?w=740&t=st=1698324798~exp=1698325398~hmac=6fc9c714ea627800fcbfc90c22a99085d3551074c6f5e674ba92fbd2f076a427'
                            image={categoryImage}
                            buttonText={props.isNew ? "Agregar imagen" : "Cambiar"}/>
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
    onUpdate: function(){},
    onClose: function(){},
    onDelete: function(){},
    category: null,
}

CategoriesForm.propTypes = 
{
    isNew: PropTypes.bool,
    open: PropTypes.bool,
    onUpdate: PropTypes.func,
    onClose: PropTypes.func,
    onDelete: PropTypes.func,
    category: PropTypes.object,
}