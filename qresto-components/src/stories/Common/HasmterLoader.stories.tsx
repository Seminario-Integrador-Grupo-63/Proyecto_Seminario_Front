import { Meta, StoryObj } from "@storybook/react";
import { HamsterLoader } from "@/Common/HamsterLoader/HamsterLoader";
import {widths100} from "@/Stories/viewports";
import {useState, useEffect} from 'react'
import {Button} from '@mui/material'

export default {
    title: "components/Common/HamsterLoader",
    component: HamsterLoader ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof HamsterLoader >;

type Story = StoryObj<typeof HamsterLoader>;

export const HamsterLoaderMain: Story = {
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
            <HamsterLoader open={open}/>
        </>);
    } 
}


