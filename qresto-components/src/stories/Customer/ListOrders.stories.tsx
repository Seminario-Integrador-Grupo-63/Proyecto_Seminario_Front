import { Meta, StoryObj } from "@storybook/react";
import { ListOrders } from "@/Customer/ListOrders/ListOrders";
import { OrderButton } from "@/Customer/ListOrders/OrderButton";
import {widths100} from "@/Stories/viewports";
import { orders } from "@/Common/FakeData/OrdersData";
import { ordersDTO } from "@/Common/FakeData/OrdersData";

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
        const orderClick = (order) => {
            console.log(' ')
            console.log('orderClick')
            console.log('order: ', order)
        }

        return(<>
            <ListOrders 
                onOrderClick={orderClick}
                orders={ordersDTO}/>
        </>);
    } 
};

export const ListOrdersButton: Story = {
    render: () =>{
        return(<>
            <OrderButton
                order={ordersDTO[0]}/>
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

