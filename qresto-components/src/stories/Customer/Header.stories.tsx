import { Meta, StoryObj } from "@storybook/react";
import { Header } from "@/Customer/Header/Header";
import {widths100} from "@/Stories/viewports";

export default {
    title: "components/Customer/Header",
    component: Header ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof Header >;

type Story = StoryObj<typeof Header>;

export const HeaderMain: Story = {
    render: () =>{

        const myFunction = () => {
            
        }

        return(<>
            <Header/>
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

