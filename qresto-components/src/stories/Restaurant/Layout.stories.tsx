import { Meta, StoryObj } from "@storybook/react";
import { Layout } from "@/Restaurant/Layout/Layout";
import {widths100} from "@/Stories/viewports";

export default {
    title: "components/Restaurant/Layout",
    component: Layout ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }


} as Meta<typeof Layout >;

type Story = StoryObj<typeof Layout>;

export const LayoutMain: Story = {
    render: () =>{

        const myFunction = () => {
            
        }

        return(<>
            <Layout/>
        </>);
    } 
};

// export const Aspect1: Story = {
//     render: () =>{
//         return(<>
//             <LayoutMobile mode={"portrait"}/>
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

