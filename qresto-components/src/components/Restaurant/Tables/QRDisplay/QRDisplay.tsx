import styles from './QRDisplay.module.scss'
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Container } from '@mui/material'
import {Box}  from '@mui/material'
import { FormDialog } from '@/Common/FormDialog'
import QRDisplayHelper from './QRDisplayHelper'

export const QRDisplay = (props: any) => {
    const helper = new QRDisplayHelper()

    const download = () => {
        helper.generatePDF(props.qrcode)
    }

    return (<>
        <FormDialog               
            open={props.open}
            title={'Código QR'}
            onSubmit={download}
            closeText={'Cerrar'}
            submitText="Descargar"
            onClose={props.onClose}>
            <Box display="flex" justifyContent="center" alignItems="center" height="70vh">
                <img 
                    src={`data:image/jpeg;base64,${[props.qrcode]}`} 
                    alt="QR Code" 
                    width="500"
                    height="500"/>
            </Box>
        </FormDialog>
    </>)
}

QRDisplay.defaultProps =
{
    qrcode: '',
    open: false,
    onClose: function(){},
}

QRDisplay.propTypes = 
{
    qrcode: PropTypes.string,
    open: PropTypes.bool,
    onClose: PropTypes.func,
}
