import React from 'react';
import PropTypes from 'prop-types';
import {TextField,
        Grid,
        Card,
        Button} from '@mui/material'
import { FormDialog } from '@/Common/FormDialog';
import { ImageButton } from '@/Restaurant/ImageSelector/ImageButton';
import { ImageSelector } from '@/Restaurant/ImageSelector/ImageSelector';
import { useState, useEffect } from 'react';

export const CategoriesForm = (props: any) => {
    const [openImgSelector, setOpenImgSelector] = useState <boolean>(false);
    const [categoryName, setCategoryName] = useState('')
    const [categoryImage, setCategoryImage] = useState('')
    const [isInvalid, setIsInvalid] = useState <boolean>(false)

    useEffect(() =>{
        if(props.isNew){
            setCategoryName('')
            setCategoryImage('')
        } else{
            if(props.category !== null){
                setCategoryName(props.category.name)
                setCategoryImage(props.category.image)
                setIsInvalid(false)
            }
        }
    },[props.category, props.isNew])

    function validateInput(input){
        if(input == '' || input.length > 30)
            {setIsInvalid(true)}
        else
            {setIsInvalid(false)}
    }
    const handleName=(event)=>{
        setCategoryName(event.target.value)
        validateInput(event.target.value)
    }
    const deleteCategory=()=>{
        props.onDelete(props.category)
        props.onClose()
    }
    const updateCategory=()=>{
        let category = null
        if (props.isNew){
            category = {
                name: categoryName,
                image: categoryImage
            }
            props.onCreate(category)
        }
        else{
            category = {
                id: props.category.id,
                name: categoryName,
                image: categoryImage
            }
            props.onUpdate(category)
        }
        setCategoryName(null)
        setCategoryImage(null)
        props.onClose()
    }
    const onClickButtonCategory=()=>{
        setOpenImgSelector(true)
    }
    const handleClose = () => {
        setOpenImgSelector(false)
    };
    const handleSelecImage = (image) => {
        if (image != ''){
            setCategoryImage(image)
        }
        setOpenImgSelector(false)
    };

    return (<>
        <FormDialog 
            title={props.isNew ? "Nueva categoría" : "Editar categoría"}
            open={props.open}
            closeText='Cerrar'
            onClose={props.onClose}
            submitText={props.isNew ? "Crear" : "Actualizar"}
            onSubmit={updateCategory}
            maxWidth='sm'
            action1Visible= {props.isNew ? false : true}
            action1Text= 'Eliminar'
            onAction1={deleteCategory}
            submitDisabled={isInvalid}>
            <Grid 
                sx={{
                    display: 'grid',
                    columnGap: 3,
                    rowGap: 1,
                    gridTemplateColumns: 'repeat(1, 1fr)',
                    height:'auto',
                    alignItems: 'center',
                    justify: 'center'
                }}>
                <TextField
                    error={isInvalid}
                    helperText={isInvalid ? 'Ingrese un nombre valido (1-30 caracteres).' : ''}
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
                        }}>
                        <ImageButton
                            // image='https://img.freepik.com/foto-gratis/pizza-salami-champinones_140725-1070.jpg?w=740&t=st=1698324798~exp=1698325398~hmac=6fc9c714ea627800fcbfc90c22a99085d3551074c6f5e674ba92fbd2f076a427'
                            image={categoryImage}
                            buttonText={props.isNew ? "Agregar imagen" : "Cambiar"}
                            onChange={onClickButtonCategory}/>
                    </Grid>
                </Card>
            </Grid>
        </FormDialog>
        <ImageSelector open={openImgSelector} onClose={handleClose} onSubmit={handleSelecImage}/>
    </>)
}

CategoriesForm.defaultProps =
{
    isNew: true,
    open: false,
    onCreate: function(){},
    onUpdate: function(){},
    onDelete: function(){},
    onClose: function(){},
    category: null,
}

CategoriesForm.propTypes = 
{
    isNew: PropTypes.bool,
    open: PropTypes.bool,
    onCreate: PropTypes.func,
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func,
    onClose: PropTypes.func,
    category: PropTypes.object,
}