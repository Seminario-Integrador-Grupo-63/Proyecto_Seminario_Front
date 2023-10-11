import styles from './Users.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {Container} from '@mui/material'
import {Layout} from '@/Restaurant/Layout/Layout'

export const Users = (props: any) => {
    return (<>
        <Layout
            title={'Usuarios'}
            onOrders={props.onOrders}
            onFoodMenu={props.onFoodMenu}
            onTables={props.onTables}
            onUsers={props.onUsers}>
            <Container>

            </Container>
        </Layout>
    </>);
}

Users.defaultProps =
{
    onOrders: function(){},
    onTables:  function(){},
    onFoodMenu:  function(){},
    onUsers:  function(){},
}

Users.propTypes = 
{
    onOrders: PropTypes.func,
    onTables: PropTypes.func,
    onFoodMenu: PropTypes.func,
    onUsers: PropTypes.func,
}


