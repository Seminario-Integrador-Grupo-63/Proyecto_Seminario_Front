import { Meta, StoryObj } from "@storybook/react";
import { AdderFooter } from "@/Customer/AdderFooter/AdderFooter";
import {widths100} from "@/Stories/viewports";

export default {
    title: "components/Customer/AdderFooter",
    component: AdderFooter ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }


} as Meta<typeof AdderFooter >;

type Story = StoryObj<typeof AdderFooter>;

export const AdderFooterMain: Story = {
    render: () =>{

        const myFunction = () => {
            
        }

        return(<>
            <AdderFooter/>
        </>);
    } 
};

// export const Aspect1: Story = {
//     render: () =>{
//         return(<>
//             <AdderFooterMobile mode={"portrait"}/>
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

