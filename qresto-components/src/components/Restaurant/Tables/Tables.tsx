import styles from './Tables.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from '@/Restaurant/Layout/Layout';
import { Container } from '@mui/material';
import {TableSchema} from "@/Restaurant/Tables/TableSchema";

export const Tables = (props: any) => {
    return (<>
        <Layout
            title={'Mesas'}
            onOrders={props.onOrders}
            onFoodMenu={props.onFoodMenu}
            onTables={props.onTables}
            onUsers={props.onUsers}>
            <Container>
                <TableSchema>

                </TableSchema>
            </Container>
        </Layout>
    </>);
}

Tables.defaultProps =
{
    onOrders: function(){},
    onTables:  function(){},
    onFoodMenu:  function(){},
    onUsers:  function(){},
}

Tables.propTypes = 
{
    onOrders: PropTypes.func,
    onTables: PropTypes.func,
    onFoodMenu: PropTypes.func,
    onUsers: PropTypes.func,
}


