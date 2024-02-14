import { Meta, StoryObj } from "@storybook/react";
import { LoadingDialog } from "@/Common/LoadingDialog";
import {widths100} from "@/Stories/viewports";
import {useState, useEffect} from 'react'
import { Button } from  '@mui/material'

export default {
    title: "components/Common/LoadingDialog",
    component: LoadingDialog ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof LoadingDialog >;

type Story = StoryObj<typeof LoadingDialog>;

export const LoadingDialogMain: Story = {
    render: () =>{
        const [open, setOpen] = useState(false);

        const handleClickOpen = () => {
            setOpen(true)
            setTimeout(() => {
                close();
            }, 4000);
        }
      
        const close = () => {
            setOpen(false);
        }


        return(<>
            <Button variant="outlined" onClick={handleClickOpen}>
                Abrir
            </Button>

            <LoadingDialog open={open}/>
        </>);
    } 
}