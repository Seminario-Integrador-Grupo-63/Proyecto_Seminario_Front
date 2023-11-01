import { Meta, StoryObj } from "@storybook/react";
import {widths100} from "@/Stories/viewports";
import {Container} from "@mui/material"
import {useState} from 'react';
import OrdersTable from "@/Restaurant/Orders/OrdersTable";

export default {
    title: "components/Restaurant/Orders/OrdersTable",
    component: OrdersTable ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100}
    }
} as Meta<typeof OrdersTable >;

type Story = StoryObj<typeof OrdersTable>;

export const Common: Story = {
    render: () =>{
        const [error, setError] = useState(false)

        return(<>
            <Container>
                <OrdersTable/>
            </Container>
        </>);
    }
};

