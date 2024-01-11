import styles from './QRFrame.module.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '@mui/material'
import {Box}  from '@mui/material'

export const QRFrame = (props: any) => {
    return (<>
        <Container>
            <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
                <div className={styles.frame}>
                    <img src={`data:image/png;base64,${props.qrcode}`} alt="QR Code" />
                    <scan className={styles.text}>{props.text}</scan>
                </div>
            </Box>
        </Container>
    </>)
}

QRFrame.defaultProps =
{
    text: "This is a text",
    qrcode: [
        "iVBORw0KGgoAAAANSUhEUgAAAZUAAAGVAQAAAAAeIFGWAAABsklEQVR4nO3bMZKDMAyFYTEUKXOEHIWjwdE4CkdImSKDFmMLy2xmZ9OK/xWZmPDRaSIZEP06L8FgQppVfLZlvx1/ykPntMwnufQYTFzTH6Ux2SXuumyfoxXM3U5YMZjYJlfIkI2vH+mKWWp1YTDXMKpvadJjMNc0azlJc1+1YjCXMq6vauvnf70YBhPE+LiCceXkgsGENb/yltv2udSTTsFggpr8X/L0NXLbl6l+ylJLOclRcxhMPFMbqWH7Ll1ZPjS1WfvyVq/YWc1hMPFM6qtOR3PmfCD3VWlbdmxmDAwmmlFXMFv95OQBe7JLHLcoBIOJbGx3aT/aHTPGkH6p27JalxhMSNM+qOH+S/Q8Y6j6vgqDiWksrs0abMawK+75vHeLwYQwdhOi1E8esB97BbnlLOf72xhMTHPqq9QGbMtgIwcGE9Sc4reixjxUpCwYTHjzoa9KaTZe7+34jcEENX+8/yPi6sfP2xhMTPPaTxzMuM2mmrLsMZjLGCunOR2zd+FyMJgLGXUbr6Pqh0ddMZjAxjK1L/xMNo27R10xmMDG57jEYktpt2UxmLDm62AwIc0PjW7F1Emh5noAAAAASUVORK5CYII="
    ]
}

QRFrame.propTypes = 
{
    qrcode: PropTypes.array,
    text: PropTypes.string
}


