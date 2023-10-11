// import styles from './ListOrderDetails.module.scss';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CustomerContainer } from '@/Customer/CustomerContainer/CustomerContainer';
import { Header } from '@/Customer/Header/Header';
import { CustomerOrderDetail } from './CustomerOrderDetail';
import { Footer } from '@/Customer/Footer/Footer';
import { OrderState } from '@/Customer/OrderState/OrderState';
import { Grid } from '@mui/material';

export const ListOrderDetails = (props: any) => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        setCustomerDishes()
    }, [])

    const setCustomerDishes = () => {
        let customersAux = {}
        // Armar un objecto JSON de la forma 
        // customersAux = {
        //      'Nombre1': {...},
        //      'Nombre2': {...}
        // }
        // para mapear los clientes de los distintos objectos OrderDetail
        props.order.orderDetails.map(orderDetail => {
            if (!customersAux.hasOwnProperty(orderDetail.customer)) { // Si todavía no está este customer en el json
                customersAux[orderDetail.customer] = { // Agregar el nuevo customer (el nombre funciona como key)
                    name: orderDetail.customer,
                    dishes: [{
                        dish: orderDetail.dish,
                        sideDish: orderDetail.sideDish,
                        subtotal: orderDetail.subtotal
                    }],
                    total: orderDetail.subtotal
                }
            } else { // Si ya se colocó el customer en el objeto json
                customersAux[orderDetail.customer].dishes.push({
                    dish: orderDetail.dish,
                    sideDish: orderDetail.sideDish,
                    subtotal: orderDetail.subtotal
                })
                customersAux[orderDetail.customer].total += orderDetail.subtotal
            }
        })

        // Armar el array que finalmente será iterado
        let customers = []
        for(let customer in customersAux){
            customers.push(customersAux[customer])
        }

        setCustomers(customers)
    }

    const createOrderDetails = (customer, index) => {
        return(
            <CustomerOrderDetail 
                key={index}
                customer={customer}/>
        )
    }

    if(props.order != null){
        return (<>
            <CustomerContainer>
                <Header 
                    title={'Detalles de la orden'}
                    goBackEnabled={true}>
                    <OrderState/> 
                </Header>
                <Grid>
                    {customers.map((customer, index) => createOrderDetails(customer, index))}   

                </Grid>

                <Footer
                    text={'Total: $' + props.order.total}
                    buttonVisible={false}/>
            </CustomerContainer>
        </>);
    } else {
        return (<></>);
    }
   
}

ListOrderDetails.defaultProps =
{
    orderDetails: [],
    order: null
}

ListOrderDetails.propTypes = 
{
    orderDetails: PropTypes.array,
    order: PropTypes.object
}
/**
console.log(" ")
console.log("ListOrderDetails")
console.log(": ", )
*/
