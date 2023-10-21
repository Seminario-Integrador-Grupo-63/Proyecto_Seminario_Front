import { Meta, StoryObj } from "@storybook/react";
import { Component } from "../Component";
import {widths100} from "@/Stories/viewports";

export default {
    title: "components/Component",
    component: Component ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof Component >;

type Story = StoryObj<typeof Component>;

export const ComponentMain: Story = {
    render: () =>{

        const myFunction = () => {
            
        }

        return(<>
            <Component/>
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

