// import styles from './SideDishes.module.scss';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Button, Grid } from '@mui/material'
import { DataTable } from '@/Common/DataTable';
import { DishForm } from '../Dishes/DishForm/DishForm';
import { SideDishForm } from './SideDishForm';

export const SideDishes = (props: any) => {
    const [sideDishesRows, setSideDishesRows] = useState([])
    const [openSideDishForm, setOpenSideDishForm] = useState(false)
    const [isNewSideDishForm, setIsNewSideDishForm] = useState(true)
    const [selectedSideDish, setSelectedSideDish] = useState(null)
    
    const headers = [
        {label: 'Nombre', key: 'name'},
        {label: 'Descripcion', key: 'description'}
    ]
    const onCloseSideDishForm = () => {
        setOpenSideDishForm(false)
        
    }

    const onEditSideDish = (sideDish) => {
        setIsNewSideDishForm(false);
        setSelectedSideDish(sideDish); 
        console.log(sideDish)
        console.log(isNewSideDishForm)
        setOpenSideDishForm(true);

    }

    const onNewSideDish = () => {
        setOpenSideDishForm(true);
        setIsNewSideDishForm(true);
        setSelectedSideDish(null); // Establecer selectedSideDish en null para indicar que es un nuevo plato
    }

    const onDeleteSideDish = (sideDish) => {
        console.log(sideDish)
        props.deleteSideDish(sideDish)

        /*const orderIndex = props.sideDish.findIndex(o => o.id === sideDish.id)
        const selectedOrder = props.sideDish[orderIndex]
        if(selectedOrder.state === 'processing' || selectedOrder.state === 'waiting'){
            let orderEntity = searchOrder(order.id)
            showCancelOrder(orderEntity)
        } else {
            showCannotCancelOrder()
        }*/
    }
    // useEffect(() => {

    // }, [props.sideDishes])

    return (<>
        <Grid item sx={{marginBottom: '20px'}}>
            <Button onClick={onNewSideDish}>Agregar Guarnicion</Button>
        </Grid>
        <DataTable
            headers={headers}
            rows={props.sideDishes} // se pasan todas las guarniciones
            actionsType='edit-delete'
            onEdit={onEditSideDish}
            onDelete={props.deleteSideDish}  // Aquí se pasa el método deleteSideDish
/>
        <SideDishForm
                open={openSideDishForm}
                onClose={onCloseSideDishForm}
                sideDish={selectedSideDish}
                isNew={isNewSideDishForm}
                onSubmit={props.createSideDish}
                onUpdate={props.updateSideDishes}
                />
    </>)
}

SideDishes.defaultProps =
{
    sideDishes: [],
    deleteSideDish: function(){},
    createSideDish: function(){},
    updateSideDishes: function(){}
}

SideDishes.propTypes =
{
    sideDishes: PropTypes.array,
    deleteSideDish: PropTypes.func,
    createSideDish: PropTypes.func,
    updateSideDishes: PropTypes.func
}


