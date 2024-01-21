import { Meta, StoryObj } from "@storybook/react";
import { Orders } from "@/Restaurant/Orders/Orders";
import {widths100} from "@/Stories/viewports";

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

        const myFunction = () => {
            
        }

        return(<>
            <Orders/>
        </>);
    } 
};

// export const Aspect1: Story = {
//     render: () =>{
//         return(<>
//             <OrdersMobile mode={"portrait"}/>
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

