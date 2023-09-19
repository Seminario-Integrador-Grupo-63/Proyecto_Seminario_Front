import { Meta, StoryObj } from "@storybook/react";
import { ListOrders } from "@/Customer/ListOrders/ListOrders";
import { OrderButton } from "@/Customer/ListOrders/OrderButton";
import {widths100} from "@/Stories/viewports";
import { orders } from "@/Common/FakeData/OrdersData";

export default {
    title: "components/Customer/ListOrders",
    component: ListOrders ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof ListOrders >;

type Story = StoryObj<typeof ListOrders>;

export const ListOrdersMain: Story = {
    render: () =>{
        const myFunction = () => {
            
        }

        return(<>
            <ListOrders orders={orders}/>
        </>);
    } 
};

export const ListOrdersButton: Story = {
    render: () =>{
        return(<>
            <OrderButton
                order={orders[0]}/>
        </>);
    } 
};

// export const aspect2: Story = {
//     render: () =>{
//         return(<>
//             
//         </>);
//     } 
// };

/**
const onAction = () => {

}

console.log(": ", )

*/

