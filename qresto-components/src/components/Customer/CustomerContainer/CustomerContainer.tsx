import styles from './CustomerContainer.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {Container} from '@mui/material'
import {theme} from '@/components/Common/Theme/themes'

export const CustomerContainer = (props: any) => {
    return (<>
        <Container
            maxWidth={false}
            disableGutters={true}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // height: '100vh',
                height: '100vh',
                width: '100%',
                overflowY: 'scroll',
                '&::-webkit-scrollbar':{
                    width:0,
                },
                backgroundColor: theme.palette.primary.contrastText
            }}>
            {props.children}
        </Container>
    </>);
}

CustomerContainer.defaultProps =
{
    children: null
}

CustomerContainer.propTypes = 
{
    children: PropTypes.node
}


