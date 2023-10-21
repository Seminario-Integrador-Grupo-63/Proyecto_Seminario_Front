import styles from './Orders.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {Container} from '@mui/material'
import {Layout} from '@/Restaurant/Layout/Layout'

export const Orders = (props: any) => {
    return (<>
        <Layout
            title={'Ordenes'}
            onOrders={props.onOrders}
            onFoodMenu={props.onFoodMenu}
            onTables={props.onTables}
            onUsers={props.onUsers}>
            <Container>

            </Container>
        </Layout>

    </>);
}

Orders.defaultProps =
{
    onOrders: function(){},
    onTables:  function(){},
    onFoodMenu:  function(){},
    onUsers:  function(){},
}

Orders.propTypes = 
{
    onOrders: PropTypes.func,
    onTables: PropTypes.func,
    onFoodMenu: PropTypes.func,
    onUsers: PropTypes.func,
}


