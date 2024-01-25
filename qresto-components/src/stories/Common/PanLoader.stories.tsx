import { Meta, StoryObj } from "@storybook/react";
import { PanLoader } from "@/Common/PanLoader/PanLoader";
import {widths100} from "@/Stories/viewports";
import {useState, useEffect} from 'react'
import {Button} from '@mui/material'

export default {
    title: "components/Common/PanLoader",
    component: PanLoader ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof PanLoader >;

type Story = StoryObj<typeof PanLoader>;

export const PanLoaderMain: Story = {
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
            <PanLoader open={open}/>
        </>)
    } 
};
