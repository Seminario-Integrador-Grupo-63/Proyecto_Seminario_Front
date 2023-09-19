import { Meta, StoryObj } from "@storybook/react";
import { TruncatedText } from "@/components/Common/TruncatedText/TruncatedText";
import {widths100} from "@/Stories/viewports";

export default {
    title: "components/Common/TruncatedText",
    component: TruncatedText ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }


} as Meta<typeof TruncatedText >;

type Story = StoryObj<typeof TruncatedText>;

export const TruncatedTextMain: Story = {
    render: () =>{

        const myFunction = () => {
            
        }

        return(<>
            <TruncatedText/>
        </>);
    } 
};

// export const Aspect1: Story = {
//     render: () =>{
//         return(<>
//             <TruncatedTextMobile mode={"portrait"}/>
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

