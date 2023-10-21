import styles from './FoodMenu.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {Container} from '@mui/material'
import {Box} from '@mui/material'
import {Tabs} from '@mui/material'
import {Tab} from '@mui/material'
// import {CustomTabPanel} from '@mui/material'
import {Layout} from '@/Restaurant/Layout/Layout'

export const FoodMenu = (props: any) => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (<>
        <Layout
            title={'Carta'}
            onOrders={props.onOrders}
            onFoodMenu={props.onFoodMenu}
            onTables={props.onTables}
            onUsers={props.onUsers}>
            <Container 
                maxWidth={false}
                sx={{
                    border: '1px solid gray',
                    borderRadius: '8px',
                    width: '95%',
                    height: '95%'
                }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Platos"/>
                        <Tab label="Guarniciones"/>
                        <Tab label="Actualizar Precios"/>
                    </Tabs>
                </Box>
                {/* <CustomTabPanel value={value} index={0}>
                Item One
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                Item Two
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                Item Three
                </CustomTabPanel> */}
            </Container>
        </Layout>
    </>);
}

FoodMenu.defaultProps =
{
    onOrders: function(){},
    onTables:  function(){},
    onFoodMenu:  function(){},
    onUsers:  function(){},
}

FoodMenu.propTypes = 
{
    onOrders: PropTypes.func,
    onTables: PropTypes.func,
    onFoodMenu: PropTypes.func,
    onUsers: PropTypes.func,
}


