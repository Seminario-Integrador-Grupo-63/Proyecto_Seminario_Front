import { Meta, StoryObj } from "@storybook/react";
import { CustomerFooter } from "@/Customer/CustomerFooter/CustomerFooter";
import {widths100} from "@/Stories/viewports";

export default {
    title: "components/Customer/CustomerFooter",
    component: CustomerFooter ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }


} as Meta<typeof CustomerFooter >;

type Story = StoryObj<typeof CustomerFooter>;

export const MainStory: Story = {
    render: () =>{

        const myFunction = () => {
            
        }

        return(<>
            <CustomerFooter/>
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

