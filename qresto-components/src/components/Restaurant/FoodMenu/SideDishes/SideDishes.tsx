// import styles from './SideDishes.module.scss';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { } from '@mui/material'
import { DataTable } from '@/Common/DataTable';
import { DishForm } from '../Dishes/DishForm/DishForm';

export const SideDishes = (props: any) => {
    const [sideDishesRows, setSideDishesRows] = useState([])
    const [openSideDishForm, setOpenSideDishForm] = useState(false)
    const [isNewSideDishForm, setIsNewSideDishForm] = useState(false)
    const [selectedSideDish, setSelectedSideDish] = useState(null)
    
    const headers = [
        {label: 'Nombre', key: 'name'},
        {label: 'Descripcion', key: 'description'}
    ]
    const onCloseDishForm = () => {
        setOpenSideDishForm(false)
        
    }

    const onEditSideDish = (sideDish) => {
        
        /*const orderIndex = props.sideDish.findIndex(o => o.id === sideDish.id)
        const selectedOrder = props.sideDish[orderIndex]
        if(selectedOrder.state === 'processing' || selectedOrder.state === 'waiting'){
            let orderEntity = searchOrder(sideDish.id)
            setOrderFormEntity(orderEntity)
            setOpenOrderForm(true)
            setOrderFormIsNew(false)
        } else {
            showCannotModifyOrder()
        }*/
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
        <DataTable
            headers={headers}
            rows={props.sideDishes} // se pasan todas las guarniciones
            actionsType='edit-delete'
            onEdit={onEditSideDish}
            onDelete={props.deleteSideDish}  // Aquí se pasa el método deleteSideDish
/>
        <DishForm
                open={openSideDishForm}
                onClose={onCloseDishForm}
                dish={selectedSideDish}
                isNew={isNewSideDishForm}/>
    </>)
}

SideDishes.defaultProps =
{
    sideDishes: [],
    deleteSideDish: function(){}
}

SideDishes.propTypes =
{
    sideDishes: PropTypes.array,
    deleteSideDish: PropTypes.func
}


