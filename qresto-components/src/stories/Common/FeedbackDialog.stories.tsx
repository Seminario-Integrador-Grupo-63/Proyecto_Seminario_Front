import { Meta, StoryObj } from "@storybook/react";
import { FeedbackDialog } from "@/Common/FeedbackDialog/FeedbackDialog";
import {widths100} from "@/Stories/viewports";
import {useState} from 'react'
import { Button } from  '@mui/material'

export default {
    title: "components/Common/FeedbackDialog",
    component: FeedbackDialog ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof FeedbackDialog >

type Story = StoryObj<typeof FeedbackDialog>;

export const FeedbackDialogMain: Story = {
    render: () =>{
        const [open, setOpen] = useState(false)
        const [positive, setPositive] = useState(true)
        const [text, setText] = useState('La operación se ha realizado exitosamente')

        const openPositive = () => {
            setPositive(true)
            setText('La operación se ha realizado exitosamente')
            setOpen(true)
        }

        const openNegative = () => {
            setPositive(false)
            setText('No se ha podido completar la operación')
            setOpen(true)
        }
      
        const handleClose = () => {
            setOpen(false)
        }
        
        return(<>
            <Button variant="outlined" onClick={openPositive}>
                Abrir positivo
            </Button>

            <Button variant="outlined" onClick={openNegative}>
                Abrir negativo
            </Button>

            <FeedbackDialog
                open={open}
                text={text}
                onClose={handleClose}
                positive={positive}
                onOk={handleClose}/>
        </>)
    } 
}

