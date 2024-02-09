import { Meta, StoryObj } from "@storybook/react";
import { TableForm } from "@/Restaurant/Tables/TableForm";
import {widths100} from "@/Stories/viewports";
import { Button } from  '@mui/material'
import {useState} from 'react'
import {Orders} from "@/Restaurant/Orders/Orders";
import {sectors} from '@/Common/FakeData/SectorsData'

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

export const TableFormCreate: Story = {
    render: () =>{
        const [open, setOpen] = useState(false);

        const handleClickOpen = () => {
            setOpen(true);
        }
      
        const handleClose = () => {
            setOpen(false)
        }
        
        const submit = (table) => {
            console.log(' ')
            console.log('TableForm.stories submit(table)')
            console.log('table: ', table)
            
        }

        return(<>
            <Button variant="outlined" onClick={handleClickOpen}>
                Abrir TableForm
            </Button>

            <TableForm
                open={open}
                isNew={true}
                onSubmit={submit}
                sectors = {sectors}
                onClose={handleClose}/>
        </>);
    } 
}