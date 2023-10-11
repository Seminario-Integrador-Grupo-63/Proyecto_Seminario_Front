// import styles from './NameInputScreen.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from '@mui/material'
import { Header } from '@/Customer/Header/Header';
import { Footer } from '@/Customer/Footer/Footer';
import { CustomerContainer } from '@/Customer/CustomerContainer/CustomerContainer';
import { NameInput } from './NameInput';

export const NameInputMain = (props: any) => {
    return (<>
        <CustomerContainer>
            <Header title=''/>
            <Grid 
                container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    width: '100%'
                }}>
                <NameInput onClick={props.onClick}/>
            </Grid>
            <Footer buttonText='' text=''/>
        </CustomerContainer>
    </>);
}

NameInputMain.defaultProps =
{
    onClick: function(){}
}

NameInputMain.propTypes = 
{
    onClick: PropTypes.func
}


