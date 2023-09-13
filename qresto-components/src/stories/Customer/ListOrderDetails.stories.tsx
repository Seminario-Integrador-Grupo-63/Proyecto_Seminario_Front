import { Meta, StoryObj } from "@storybook/react";
import { ListOrderDetails } from "@/Customer/ListOrderDetails/ListOrderDetails";
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
            <ListOrderDetails orderDetails={orders[0].orderDetails}/>
        </>);
    } 
};

// export const Aspect1: Story = {
//     render: () =>{
//         return(<>
//             <ComponentMobile mode={"portrait"}/>
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

