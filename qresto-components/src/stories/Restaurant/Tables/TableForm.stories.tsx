import { Meta, StoryObj } from "@storybook/react";
import { TableForm } from "@/components/Restaurant/Tables/TableForm";
import {widths100} from "@/Stories/viewports";
import { Button } from  '@mui/material'
import {useState} from 'react'
import {Orders} from "@/Restaurant/Orders/Orders";

export default {
    title: "components/Restaurant/Tables/TableForm",
    component: TableForm ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof TableForm >;


type Story = StoryObj<typeof TableForm>;

export const TableFormMain: Story = {
    render: () =>{

        const [open, setOpen] = useState(false);

        const handleClickOpen = () => {
            setOpen(true);
        }
      
        const handleClose = () => {
            setOpen(false)
        }
        

        return(<>
            <Button variant="outlined" onClick={handleClickOpen}>
                Abrir TableForm
            </Button>

            <TableForm 
                open={open}
                onClose={handleClose}
                table={
                    {id: 1,
                     section: 2}}/>
        </>);
    } 
}