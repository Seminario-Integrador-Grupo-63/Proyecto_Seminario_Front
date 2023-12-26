import React from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Box, 
    Tabs, 
    Tab
} from '@mui/material'
import { CustomTabPanel } from '@/Common/CustomTabPanel';
import { Dishes } from './Dishes/Dishes';

export const FoodMenu = (props: any) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (<>
        <Container 
            maxWidth={false}
            sx={{
                border: '1px solid gray',
                borderRadius: '8px',
                width: '95%',
                height: '95%'
            }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs 
                    value={value} 
                    onChange={handleChange} 
                    aria-label="basic tabs example">
                    <Tab label="Categorias"/>
                    <Tab label="Platos"/>
                    <Tab label="Guarniciones"/>
                    <Tab label="Actualizar Precios"/>
                </Tabs>
                <CustomTabPanel value={value} index={0}>
                    Categorías
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Dishes dishes={props.dishes}/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    Guarniciones
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    Actualizar Precios
                </CustomTabPanel>
            </Box>
        </Container>
    </>)
}

FoodMenu.defaultProps =
{
    dishes: []
}

FoodMenu.propTypes = 
{
    dishes: PropTypes.array
}


