import { Meta, StoryObj } from "@storybook/react";
import { CustomerHeader } from "@/Customer/CustomerHeader/CustomerHeader";
import {widths100} from "@/Stories/viewports";

export default {
    title: "components/Customer/CustomerHeader",
    component: CustomerHeader ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof CustomerHeader >;

type Story = StoryObj<typeof CustomerHeader>;

export const HeaderMain: Story = {
    render: () =>{

        const myFunction = () => {
            
        }

        return(<>
            <CustomerHeader/>
        </>);
    } 
};

// export const Aspect1: Story = {
//     render: () =>{
//         return(<>
//             <HeaderMobile mode={"portrait"}/>
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

