// import styles from './ListOrderDetails.module.scss';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CustomerContainer } from '@/Customer/CustomerContainer/CustomerContainer';
import { CustomerHeader } from '@/Customer/CustomerHeader/CustomerHeader';

export const ListOrderDetails = (props: any) => {
    const [customers, setCustomers] = useState({})

    useEffect(() => {
        setCustomerDishes()
    }, [])

    const setCustomerDishes = () => {
        let customers = {}
        props.orderDetails.map(orderDetail => {
            if (!customers.hasOwnProperty(orderDetail.customer)) {
                customers[orderDetail.customer] = {
                    dishes: [{
                        dish: orderDetail.dish,
                        sideDish: orderDetail.sideDish,
                        subtotal: orderDetail.subtotal
                    }],
                    total: orderDetail.subtotal
                }
            } else {
                customers[orderDetail.customer].dishes.push({
                    dish: orderDetail.dish,
                    sideDish: orderDetail.sideDish,
                    subtotal: orderDetail.subtotal
                })
                customers[orderDetail.customer].total += orderDetail.subtotal
            }
        })
        setCustomers(customers)
    }

    const createOrderDetails = (customers) => {
        return(<>

        </>)
    }

    return (<>
        <CustomerContainer>
            <CustomerHeader/>
            {createOrderDetails(customers)}         
        </CustomerContainer>
    </>);
}

ListOrderDetails.defaultProps =
{
    orderDetails: []
}

ListOrderDetails.propTypes = 
{
    orderDetails: PropTypes.array
}
/**
console.log(" ")
console.log("ListOrderDetails")
console.log(": ", )
*/
