import { Meta, StoryObj } from "@storybook/react";
import { Adder } from "@/Common/Adder";
import {widths100} from "@/Stories/viewports";
import { themeButton } from "@/Common/Theme/themes";

export default {
    title: "components/Common/Adder",
    component: Adder ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }


} as Meta<typeof Adder >;

type Story = StoryObj<typeof Adder>;

export const AdderMain: Story = {
    render: () =>{

        const myFunction = () => {
            
        }

        return(<>
            <Adder 
                color={themeButton.palette.primary}/>
        </>);
    } 
};

// export const Aspect1: Story = {
//     render: () =>{
//         return(<>
//             <AdderMobile mode={"portrait"}/>
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

