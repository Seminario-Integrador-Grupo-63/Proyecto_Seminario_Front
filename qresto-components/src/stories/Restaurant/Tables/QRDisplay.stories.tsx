import { Meta, StoryObj } from "@storybook/react"
import { QRDisplay } from "@/Restaurant/Tables/QRDisplay/QRDisplay"
import {Container, Button} from "@mui/material"
import {useState} from 'react'
import { qr1 } from "@/Common/FakeData/QRCodes"

export default {
    title: "components/Restaurant/Tables/QRDisplay",
    component: QRDisplay ,
    argTypes: {},
    // parameters: {
    //     viewport: {viewports: widths100}
    // }
} as Meta<typeof QRDisplay >

type Story = StoryObj<typeof QRDisplay>;

export const Common: Story = {
    render: () =>{
        const [open, setOpen] = useState(false);

        const handleClickOpen = () => {
            setOpen(true);
        }
      
        const handleClose = () => {
            setOpen(false);
        }

        const download = (qrcode) => {
            console.log(' ')
            console.log('QRDisplay.stories download()')
            console.log('qrcode: ', qrcode)
        }

        return(<>
            <Button variant="outlined" onClick={handleClickOpen}>
                Abrir RDisplay
            </Button>
            <QRDisplay
                qrcode={qr1}
                open={open}
                onClose={handleClose}
                onDownload={download}/>
        </>)
    } 
}
