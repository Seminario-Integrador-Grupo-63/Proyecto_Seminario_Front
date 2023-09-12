import { Meta, StoryObj } from "@storybook/react";
import { OrderState } from "@/Customer/OrderState/OrderState";
import {widths100} from "@/Stories/viewports";

export default {
    title: "components/Customer/OrderState",
    component: OrderState ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }


} as Meta<typeof OrderState >;

type Story = StoryObj<typeof OrderState>;

export const OrderStateMain: Story = {
    render: () =>{

        const myFunction = () => {
            
        }

        return(<>
            <OrderState/>
        </>);
    } 
};

// export const Aspect1: Story = {
//     render: () =>{
//         return(<>
//             <OrderStateMobile mode={"portrait"}/>
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

