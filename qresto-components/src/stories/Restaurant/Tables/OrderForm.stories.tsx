import { Meta, StoryObj } from "@storybook/react";
import { OrderForm } from "@/Restaurant/Tables/OrderForm/OrderForm";
import {widths100} from "@/Stories/viewports";
import { useState } from "react";
import { Button} from '@mui/material'
import { ordersDTO } from "@/Common/FakeData/OrdersData";
import { menuData } from "@/Common/FakeData/Menu";

export default {
    title: "components/Restaurant/Tables/OrderForm",
    component: OrderForm ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof OrderForm >;

type Story = StoryObj<typeof OrderForm>;

export const OrderFormMain: Story = {
    render: () =>{
        const [open, setOpen] = useState(false)

        const handleClickOpen = () => {
            setOpen(true);
        }
      
        const handleClose = () => {
            setOpen(false);
        }
        return(<>
            <Button variant="outlined" onClick={handleClickOpen}>
                Abrir Order Form
            </Button>

            <OrderForm
                open={open}
                menu={menuData}
                onClose={handleClose}/>
        </>)
    } 
}
