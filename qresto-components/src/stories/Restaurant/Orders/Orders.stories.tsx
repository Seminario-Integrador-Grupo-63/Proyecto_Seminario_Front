import { Meta, StoryObj } from "@storybook/react";
import { Orders } from "@/Restaurant/Orders/Orders";
import {widths100} from "@/Stories/viewports";
import { ordersDTO2 } from "@/Common/FakeData/OrdersData";

export default {
    title: "components/Restaurant/Orders",
    component: Orders ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof Orders >;

type Story = StoryObj<typeof Orders>;

export const OrdersMain: Story = {
    render: () =>{

        return(<>
            <Orders orders={ordersDTO2}/>
        </>);
    } 
}
