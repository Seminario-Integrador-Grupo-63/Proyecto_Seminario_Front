import { Meta, StoryObj } from "@storybook/react";
import { ListOrderDetails } from "@/Customer/ListOrderDetails/ListOrderDetails";
import { CustomerOrderDetail } from "@/Customer/ListOrderDetails/CustomerOrderDetail";
import {widths100} from "@/Stories/viewports";
// import { orders } from "@/Common/FakeData/OrdersData";
import { ordersDTO } from "@/Common/FakeData/OrdersData";
import _ from 'lodash';

export default {
    title: "components/Customer/ListOrderDetails",
    component: ListOrderDetails ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof ListOrderDetails >;

type Story = StoryObj<typeof ListOrderDetails>;

export const ListOrderDetailsMain: Story = {
    render: () =>{
        const order = ordersDTO[1]
        const customer = order.customerOrderDetails[0].customer
        return(<>
            <ListOrderDetails 
                order={order}
                customer={customer}/>
        </>);
    }
};
