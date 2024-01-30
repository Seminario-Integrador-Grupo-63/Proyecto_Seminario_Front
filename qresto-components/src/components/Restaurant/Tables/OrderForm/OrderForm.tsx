import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { 
    Grid,
    Button,
    ThemeProvider,
    Typography
} from '@mui/material'
import { FormDialog } from '@/Common/FormDialog';
import { OrderDetailForm } from './OrderDetailForm';
import {OrderDetailTable} from './OrderDetailTable'
import { CustomerForm } from './CustomerForm';
import { MessageDialog } from '@/Common/MessageDialog'
import { themeButtonWine } from '@/Common/Theme/themes';

export const OrderForm = (props: any) => {
    const [orderDetailFormOpen, setOrderDetailFormOpen] = useState(false)
    const [stateButtonText, setStateButtonText] = useState('')
    const [stateButtonVisible, setStateButtonVisible] = useState(false)
    const [selectedOrderDetail, setSelectedOrderDetail] = useState(null)
    const [currentState, setCurrentState] = useState('En espera')
    const [isNewOrderDetail, setIsNewOrderDetail] = useState(false)
    const [customerFormOpen, setCustomerFormOpen] = useState(false)
    const [title, setTitle] = useState('Generar Orden')
    const [submitText, setSubmitText] = useState('Generar')
    const [order, setOrder] = useState(null)
    const [selectedCustomer, setSelectedCustomer] = useState('')
    const [isNewCustomer, setIsNewCustomer] = useState(true)
    const [openMessageDialog, setOpenMessageDialog] = useState(false)
    const [titleMessageDialog, setTitleMessageDialog] = useState('')
    const [descriptionMessageDialog, setDescriptionMessageDialog] = useState('')
    const [actionMessageDialog, setActionMessageDialog] = useState('')
    const [closeText, setCloseText] = useState('Cancelar')
    const [submitButtonVisible, setSubmitButtonVisible] = useState(true)
    const messageDialogActions = {
        deleteCustomerOrderDetail: 'delete-customer-order-detail',
        deleteOrderDetail: 'delete-order-detail'
    }
    const stateButtonTexts = {
        processing: 'Confirmar orden',
        waiting: 'Orden en preparación',
        preparation: 'Orden entregada',
        delivered: 'Cerrar orden',
    }

    const states = {
        processing: 'En Armado',
        waiting: 'En Espera',
        preparation: 'En Preparación',
        delivered: 'Entregada',
        // close: 'Cerrada'
    }

    const [orderToPost, setOrderToPost] = useState([])

    useEffect(() => {
        console.log(' ')
        console.log('OrderForm useEffect props.order')
        console.log('props.order: ', props.order)
        if(props.isNew){
            clear()
            setSubmitButtonVisible(true)
            
            setCloseText('Cancelar')
            setTitle('Generar Orden')
            setSubmitText('Generar')
        } else {
            setTitle('Ver Orden')
            setSubmitButtonVisible(false)
            setCloseText('Cerrar')
            if(props.order !== null){
                setOrder(props.order)
                if(props.order.state === 'waiting'){
                    setStateButtonText(stateButtonTexts.waiting)
                    setCurrentState("En espera")
                } else if (props.order.state === 'preparation'){
                    setStateButtonText(stateButtonTexts.preparation)
                    setCurrentState("En preparación")
                } else if (props.order.state === 'delivered'){
                    setStateButtonText(stateButtonTexts.delivered)
                    setCurrentState("Entregada")
                } else if (props.order.state === 'processing'){
                    setCurrentState("En Armado")
                    setStateButtonText(stateButtonTexts.processing)
                }
            }
        }
    }, [props.isNew, props.order])

    const onAddCustomer = () => {
        setIsNewCustomer(true)
        setSelectedCustomer('')
        setCustomerFormOpen(true)
    }   
    
    const closeOrderDetailForm = () => {
        setOrderDetailFormOpen(false)
        setSelectedOrderDetail(null)
        setSelectedCustomer('')
    }

    const onAddOrderDetail = (customerOrderDetail) => {
        setIsNewOrderDetail(true)
        setSelectedOrderDetail(null)
        setSelectedCustomer(customerOrderDetail.customer)
        setOrderDetailFormOpen(true)
    }

    const closeCustomerForm = () => {
        setCustomerFormOpen(false)
    }

    const submitCustomer = (customer) => {
        if(isNewCustomer){
            if(order === null){
                let ord = {
                    customerOrderDetails: [
                        {
                            customer: customer,
                            orderDetails: [],
                            customerTotal: 0
                        },
                    ]
                }
                setOrder(ord)
            } else {
                let ord = order
                ord.customerOrderDetails.push({
                    customer: customer,
                    orderDetails: [],
                    customerTotal: 0
                })
                setOrder(ord)
            }
        } else {
            const index = order.customerOrderDetails.findIndex(customerOrderDetail => customerOrderDetail.customer === selectedCustomer)
            if(index !== -1){
                order.customerOrderDetails[index].customer = customer
            }
        }
        setCustomerFormOpen(false)
    }

    const onEditOrderDetail = (customer, orderDetail) => {
        setIsNewOrderDetail(false)
        setSelectedOrderDetail(orderDetail)
        setSelectedCustomer(customer)
        setOrderDetailFormOpen(true)
    }

    const onEditCustomer = (customer) => {
        setCustomerFormOpen(true)
        setIsNewCustomer(false)
        setSelectedCustomer(customer)
    }

    const submitOrderDetailForm = (detail) => {
        if(isNewOrderDetail){
            createOrderDetail(detail)
        } else {
            updateOrderDetail(detail)
        }
        setOrderDetailFormOpen(false)
    }

    const createOrderDetail = (detail) => {
        let sideDishId = null
        if (detail.sideDish !== null){
            sideDishId = detail.sideDish.id
        }

        orderToPost.push({
            ...detail,
            dish: detail.dish.id,
            sideDish: sideDishId
        })
        const index = order.customerOrderDetails.findIndex(customerOrderDetail => customerOrderDetail.customer === detail.customerName)
        if(index !== -1){
            order.customerOrderDetails[index].orderDetails.push(detail)
            order.customerOrderDetails[index].customerTotal += detail.subTotal
        }

        setOrderToPost(orderToPost)
    }

    const updateOrderDetail = (detail) => {
        const detailToPostIndex = orderToPost.findIndex(d => detailsAreEqual(d, detail))
        orderToPost[detailToPostIndex] = detail

        const i = getOrderDetailIndexes(detail)
        if(i.customerOrderDetailIndex !== -1 && i.orderDetailIndex !== -1){
            order.customerOrderDetails[i.customerOrderDetailIndex].orderDetails[i.orderDetailIndex] = detail
            let customerTotal = calculateCustomerTotal(order.customerOrderDetails[i.customerOrderDetailIndex].orderDetails)
            order.customerOrderDetails[i.customerOrderDetailIndex].customerTotal = customerTotal    
        }

        setOrderToPost(orderToPost)
        setSelectedOrderDetail(null)
        setSelectedCustomer('')
    }
    
    const getOrderDetailIndexes = (detail) => {
        let indexOrderDetail = -1
        const indexCustomerOrderDetail = order.customerOrderDetails.findIndex(customerOrderDetail => customerOrderDetail.customer === detail.customerName)
        if(indexCustomerOrderDetail !== -1) {
            indexOrderDetail = order
                .customerOrderDetails[indexCustomerOrderDetail]
                .orderDetails.findIndex(orderDetail => detailsAreEqual(orderDetail, detail))
        } 
        return {
            customerOrderDetailIndex: indexCustomerOrderDetail,
            orderDetailIndex: indexOrderDetail
        }
    }

    const calculateCustomerTotal = (orderDetails) => {
        let total = 0
        orderDetails.forEach(orderDetail => {
            total += orderDetail.subTotal
        })
        return total
    }

    const detailsAreEqual = (d1, d2) => {
        if(d1.customerName !== d2.customerName){
            return false
        } else if (d1.amount !== d2.amount){
            return false
        } else if(d1.dish.id !== d2.dish.id){
            return false
        } else if (d1.sideDish === null){
            if (d1.sideDish !== d2.sideDish){
                return false
            }
        } else if(d2.sideDish === null){
            return false
        } else if(d1.sideDish.id !== d2.sideDish.id){
            return false
        } else if(d1.observation !== d2.observation){
            return false
        }
        return true
    }

    const onDeleteCustomerOrderDetail = (customer) => {
        setSelectedCustomer(customer)
        setTitleMessageDialog('Se eliminará el comensal')
        setActionMessageDialog(messageDialogActions.deleteCustomerOrderDetail)
        setDescriptionMessageDialog('Esta acción eliminará al comensal junto a su orden de forma pemanente ¿Desea continuar?')
        setOpenMessageDialog(true)
    }

    const onDeleteOrderDetail = (customer, orderDetail) => {
        setSelectedOrderDetail(orderDetail)
        setActionMessageDialog(messageDialogActions.deleteOrderDetail)
        setTitleMessageDialog('Se eliminará el detalle de orden')
        setDescriptionMessageDialog('Una vez que se elimine el detalle de orden no se podrá volver a recuperar ¿Está seguro que desea continuar?')
        setOpenMessageDialog(true)
    }

    const deleteCustomerOrderDetail = () => {
        const index = order.customerOrderDetails.findIndex(customerOrderDetail => customerOrderDetail.customer === selectedCustomer)
        if(index !== -1){
            order.customerOrderDetails.splice(index, 1)
            let ord = orderToPost.map(detail => {
                if(detail.customerName !== selectedCustomer){
                    return detail
                }
            })
            setOrderToPost(ord)
        }
    }

    const deleteOrderDetail = () => {
        const i = getOrderDetailIndexes(selectedOrderDetail)
        if(i.customerOrderDetailIndex !== -1 && i.orderDetailIndex !== -1){
            order.customerOrderDetails[i.customerOrderDetailIndex].orderDetails.splice(i.orderDetailIndex, 1)
            let customerTotal = calculateCustomerTotal(order.customerOrderDetails[i.customerOrderDetailIndex].orderDetails)
            order.customerOrderDetails[i.customerOrderDetailIndex].customerTotal = customerTotal
            const index = orderToPost.findIndex(detail => detailsAreEqual(detail, selectedOrderDetail))
            if(index !== -1){
                orderToPost.splice(index, 1)
                setOrderToPost(orderToPost)
            }
        }
    }

    const submitMessageDialog = () => {
        if(actionMessageDialog === messageDialogActions.deleteCustomerOrderDetail){
            deleteCustomerOrderDetail()
        } else if(actionMessageDialog === messageDialogActions.deleteOrderDetail){
            deleteOrderDetail()
        }
        setOpenMessageDialog(false)
    }

    const submit = () => {
        props.onSubmit(orderToPost)
    }

    const clear = () => {
        setOrder(null)
    }

    const changeState = async () => {
        console.log(' ')
        console.log('OrderForm changeState()')
        console.log('order: ', order)

        if(order.state === 'waiting'){
            const result = await props.onOrderPreparation(order.id)
            console.log('result: ', result)
            if(result){
                order.state = 'preparation'
                setOrder(order)
                setStateButtonText(stateButtonTexts.preparation)
                setCurrentState(states.preparation)
            }
        } else if (order.state === 'preparation'){
            const result = await props.onOrderDelivered(order.id)
            if(result){
                order.state = 'delivered'
                setOrder(order)
                setStateButtonText(stateButtonTexts.delivered)
                setCurrentState(states.delivered)
            }
        } else if (order.state === 'delivered'){
            const result = await props.onOrderClosed()
            if(result){
                setStateButtonVisible(false)
            }
        }
    }

    return (<>
        <FormDialog 
            open={props.open}
            title={title}
            submitText={submitText}
            onSubmit={submit}
            closeText={closeText}
            submitVisible={submitButtonVisible}
            maxWidth='lg'
            onClose={props.onClose}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <OrderDetailTable 
                        order={order}
                        onEditOrderDetail={onEditOrderDetail}
                        onEditCustomer={onEditCustomer}
                        actions={props.actions}
                        onDeleteCustomerOrderDetail={onDeleteCustomerOrderDetail}
                        onDeleteOrderDetail={onDeleteOrderDetail}
                        onAddOrderDetail={onAddOrderDetail}/>
                </Grid>
                {/* {props.isNew === false?
                    <Grid item>
                        <ThemeProvider theme={themeButtonWine}>
                            <Button
                                variant={'contained'}
                                onClick={changeState}>
                                {stateButtonText}
                            </Button>   
                        </ThemeProvider>
                    </Grid>
                    <Grid item >
                        <Typography 
                            variant={'subtitle1'}
                            sx={{paddingTop: '5px', fontWeight: 'bold'}}>
                            Estado actual: {currentState}
                        </Typography>
                    </Grid>
                :
                    null
                } */}

            </Grid>
            {props.actions ? 
                <Grid>
                    <Button onClick={onAddCustomer}>Agregar Comensal</Button>
                </Grid>
            :
                null
            }

            <OrderDetailForm 
                menu={props.menu}
                isNew={isNewOrderDetail}
                orderDetail={selectedOrderDetail}
                customer={selectedCustomer}
                submit={submitOrderDetailForm}
                open={orderDetailFormOpen}
                onClose={closeOrderDetailForm}/>

            <CustomerForm 
                open={customerFormOpen}
                isNew={isNewCustomer}
                onClose={closeCustomerForm}
                customer={selectedCustomer}
                onSubmit={submitCustomer}/>

            <MessageDialog 
                open={openMessageDialog}
                title={titleMessageDialog}
                onSubmit={submitMessageDialog}
                description={descriptionMessageDialog}
                onClose={() => setOpenMessageDialog(false)}/>
        </FormDialog>
    </>)
}

OrderForm.defaultProps =
{
    open: false,
    onSubmit: function(){},
    onClose: function(){},
    isNew: true,
    orderFormData: null,
    menu: [],
    actions: true,
    order: null,
    onOrderPreparation: function(){},
    onOrderDelivered: function(){},
    onOrderClosed: function(){}
}

OrderForm.propTypes = 
{
    open: PropTypes.bool,
    onSubmit: PropTypes.func,
    onClose: PropTypes.func,
    isNew: PropTypes.bool,
    menu: PropTypes.array,
    actions: PropTypes.bool,
    order: PropTypes.object,
    onOrderPreparation: PropTypes.func,
    onOrderDelivered: PropTypes.func,
    onOrderClosed: PropTypes.func
}
