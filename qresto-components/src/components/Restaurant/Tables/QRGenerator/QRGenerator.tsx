import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Container, TextField } from '@mui/material'
import { QRFrame } from './QRFrame/QRFrame'
import { 
    Button,
    Grid
} from '@mui/material'

export const QRGenerator = (props: any) => {
    const [inputText, setInputText] = useState('')

    const onInput = (event: any) => {
        setInputText(event.target.value)
    }

    return (<>
        <Container>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item xs={12}>
                    <div style={{ textAlign: 'center' }}>
                        <QRFrame qrcode={props.qrcodes[0]} text={inputText} />
                    </div>
                </Grid>
                <Grid item xs={12} style={{textAlign:'center'}}>
                    <TextField
                        variant="outlined"
                        label="Texto"
                        value={inputText}
                        onChange={onInput}
                        style={{ width: '30%'}}/>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ textAlign: 'center' }}>
                        <Button variant="contained">Generar PDF</Button>
                    </div>
                </Grid>
            </Grid>
        </Container>
    </>)
}

QRGenerator.defaultProps =
{
    primaryColor: '#681821',
    qrcodes: [
        "iVBORw0KGgoAAAANSUhEUgAAAZUAAAGVAQAAAAAeIFGWAAABsklEQVR4nO3bMZKDMAyFYTEUKXOEHIWjwdE4CkdImSKDFmMLy2xmZ9OK/xWZmPDRaSIZEP06L8FgQppVfLZlvx1/ykPntMwnufQYTFzTH6Ux2SXuumyfoxXM3U5YMZjYJlfIkI2vH+mKWWp1YTDXMKpvadJjMNc0azlJc1+1YjCXMq6vauvnf70YBhPE+LiCceXkgsGENb/yltv2udSTTsFggpr8X/L0NXLbl6l+ylJLOclRcxhMPFMbqWH7Ll1ZPjS1WfvyVq/YWc1hMPFM6qtOR3PmfCD3VWlbdmxmDAwmmlFXMFv95OQBe7JLHLcoBIOJbGx3aT/aHTPGkH6p27JalxhMSNM+qOH+S/Q8Y6j6vgqDiWksrs0abMawK+75vHeLwYQwdhOi1E8esB97BbnlLOf72xhMTHPqq9QGbMtgIwcGE9Sc4reixjxUpCwYTHjzoa9KaTZe7+34jcEENX+8/yPi6sfP2xhMTPPaTxzMuM2mmrLsMZjLGCunOR2zd+FyMJgLGXUbr6Pqh0ddMZjAxjK1L/xMNo27R10xmMDG57jEYktpt2UxmLDm62AwIc0PjW7F1Emh5noAAAAASUVORK5CYII="
    ]
}

QRGenerator.propTypes = 
{
    qrcodes: PropTypes.array,
    primaryColor: PropTypes.string
}

