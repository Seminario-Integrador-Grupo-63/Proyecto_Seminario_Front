import styles from './DishForm.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {} from '@mui/material';
import { FormDialog } from '@/Common/FormDialog';
import { DishFormContent } from './DishFormContent';

export const DishForm = (props: any) => {

    const [openImgSelector,setOpenImgSelector]= useState<boolean>(false);
    const[dishName,setDishName]= useState('')
    const[dishDescription,setDishDescription]= useState('')
    const[dishImage,setDishImage]= useState('')
    const[dishPreparationTime,setDishPreparationTime]= useState('')
    const[dishCategory,setDishCategory]= useState('')
    const[dishPrice,setDishPrice]= useState('')
    const[dishOptions,setDishOptions]= useState('')

    /*const onSubmit = () => {
        

        let dishData =  {
            name: dishName,
            description: dishDescription,
            image:dishImage,
            preparationTime: dishPreparationTime,
            category: dishCategory,
            price: dishPrice,
            restaurant: 1
        }
        
        if (props.isNew) {
            console.log(dishData)
            props.onSubmit(dishData)
        }else {
            dishData["id"] = props.dish.id
            props.onSubmit(dishData)
        }

        

        props.onClose()
    }*/

    const handleName=(event)=>{
        setDishName(event.target.value)
    }

    const handleDescription=(event)=>{
        setDishDescription(event.target.value)
    }

    const updateDish=()=>{
        let dish = null
        if (props.isNew){
            console.log('crea el plato')
            dish = {
            name: dishName,
            description: dishDescription,
            image:dishImage,
            preparationTime: dishPreparationTime,
            category: dishCategory,
            price: dishPrice,
            
            
            }
            console.log('crea el plato2' + dish )
            props.onSubmit(dish)
        }
        
        else{
            console.log(' modifica en else')
            dish = 
            {
                id: props.dish.id,
                name: dishName,
                description: dishDescription,
                image:dishImage,
                preparationTime: dishPreparationTime,
                category: dishCategory,
                price: dishPrice,
            
            }
            props.onUpdate(dish)
        }
        
        props.onClose()
    }


    useEffect(
        () => {
            if(props.isNew == false){
                setDishName(props.dish.name)
                setDishDescription(props.dish.description)
                setDishImage(props.dish.image)
                setDishPreparationTime(props.dish.preparationTime)
                setDishCategory(props.dish.category)
                setDishPrice(props.dish.price)}
        },[props.sideDish]
    )

    const contentRef = useRef(null);

    const verifyFields = () => {
        // Realiza validaciones si es necesario
        contentRef.current.verifyFields();
    }

    return (
        <>
            <FormDialog
                open={props.open}
                onSubmit={updateDish}
                onClose={props.onClose}
                title={props.isNew ? 'Agregar Plato' : 'Editar Plato'}>
                <DishFormContent
                 ref={contentRef}
                 categories={props.categories}
                 sideDishes={props.sideDishes}
                 dish={props.dish}
                 isNew={props.isNew}
                 setName={setDishName}
                 setDescription={setDishDescription}
                 setPrice={setDishPrice}
                 setImage={setDishImage}
                 setCategory={setDishCategory}
                 setPreparationTime ={setDishPreparationTime}
                 setOptions={setDishOptions}
                 name={dishName}
                 description={dishDescription}
                 price={dishPrice}
                 image={dishImage}
                 category={dishCategory}
                 preparationTime={dishPreparationTime}
                 options={dishOptions}
                />
            </FormDialog>
        </>
    );
}

DishForm.defaultProps = {
    dish: null,
    isNew: true,
    categories: [],
    sideDishes: [],
    open: false,
    onSubmit: function () { },
    onClose: function () { },
    onUpdate:function(){},
    title: 'Title'
}

DishForm.propTypes = {
    dish: PropTypes.object,
    isNew: PropTypes.bool,
    categories: PropTypes.array,
    sideDishes: PropTypes.array,
    open: PropTypes.bool,
    onSubmit: PropTypes.func,
    onClose: PropTypes.func,
    onUpdate: PropTypes.func,
    title: PropTypes.string,
};
