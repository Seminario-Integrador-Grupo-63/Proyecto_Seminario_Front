
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './NameInput.module.css'
import {Container} from '@mui/material'
import { Box } from '@mui/material'
import { TextField } from '@mui/material'
import { Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material'
import { theme } from '@/Common/Theme/themes';
import { CustomTextField } from '@/Common/CustomTextField';
import {Button} from '@mui/material'

export const NameInput = (props: any) => {
    const [input, setInput] = useState('')
    
    const onClick = () => {
        props.onClick(input)
    }

    const onChange = (event) => {
        setInput(event)
    } 

    return (<>
            <ThemeProvider theme={theme}>
                <Box
                    bgcolor="primary.main"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',

                        paddingLeft: 5,
                        paddingRight: 5,
                        paddingTop: 2,
                        paddingBottom: 2,
                        borderRadius: 3,
                        boxShadow: 3,
                    }}>
                    <Typography 
                        color="secondary.main">
                        Ingrese su nombre
                    </Typography>

                    <CustomTextField 
                        label={'Nombre'}
                        color={theme.palette.secondary}
                        value={input}
                        onChange={onChange}/> 

                    <Button 
                        variant="contained"
                        color="secondary"
                        onClick={onClick}
                        sx={{
                            marginTop: '10px',
                            marginBottom: '10px'
                        }}>
                        Ingresar
                    </Button>
                </Box>
            </ThemeProvider>
    </>);
        
}

NameInput.defaultProps =
{
    onClick: function(){}
}

NameInput.propTypes = 
{
    onClick: PropTypes.func
}