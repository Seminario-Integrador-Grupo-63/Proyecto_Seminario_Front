import { Meta, StoryObj } from "@storybook/react";
import { UploadButton } from "@/Common/UploadButton";
import {widths100} from "@/Stories/viewports";

export default {
    title: "components/Common/UploadButton",
    component: UploadButton ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof UploadButton >;

type Story = StoryObj<typeof UploadButton>;

export const UploadButtonMain: Story = {
    render: () =>{

        const myFunction = () => {
            
        }

        return(<>
            <UploadButton/>
        </>);
    } 
};

// export const Aspect1: Story = {
//     render: () =>{
//         return(<>
//             <UploadButtonMobile mode={"portrait"}/>
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

