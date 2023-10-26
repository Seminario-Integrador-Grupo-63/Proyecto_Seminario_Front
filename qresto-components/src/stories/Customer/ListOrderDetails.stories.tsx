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

        // console.log(' ')
        // console.log('ListOrderDetails.stories')
        // // console.log('ordersDTO[0].customerOrderDetail[0]: ', ordersDTO[0].customerOrderDetail[0])
        // console.log("ordersDTO[0]: ", ordersDTO[0])
        // console.log("ordersDTO: ", ordersDTO)
        // const customer = _.cloneDeep(ordersDTO[0].customerOrderDetail[0].customer)

        const customer = ordersDTO[0].customerOrderDetail[0].customer
        console.log("customer: ", customer)
        return(<>
            <ListOrderDetails 
                order={ordersDTO[0]}
                customer={customer}/>
        </>);
    } 
};
