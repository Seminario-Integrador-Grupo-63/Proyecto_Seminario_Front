import { Meta, StoryObj } from "@storybook/react";
import { ListOrderDetails } from "@/Customer/ListOrderDetails/ListOrderDetails";
import { CustomerOrderDetail } from "@/Customer/ListOrderDetails/CustomerOrderDetail";
import {widths100} from "@/Stories/viewports";
import { orders } from "@/Common/FakeData/OrdersData";

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

        const myFunction = () => {
            
        }

        return(<>
            {/* <ListOrderDetails orderDetails={orders[0].orderDetails}/> */}
            <ListOrderDetails order={orders[0]}/>
        </>);
    } 
};

// export const ListOrderDetailsIndividual: Story = {
//     render: () =>{

//         const myFunction = () => {
            
//         }

//         return(<>
//             <CustomerOrderDetail 
//                 orderDetail={orders[0].orderDetails[0]}/>

//         </>);
//     } 
// };



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

