import { Meta, StoryObj } from "@storybook/react";
import { Footer } from "@/Customer/Footer/Footer";
import {widths100} from "@/Stories/viewports";

export default {
    title: "components/Customer/Footer",
    Footer: Footer ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }


} as Meta<typeof Footer >;

type Story = StoryObj<typeof Footer>;

export const FooterMain: Story = {
    render: () =>{

        const myFunction = () => {
            
        }

        return(<>
            <Footer/>
        </>);
    } 
};

// export const Aspect1: Story = {
//     render: () =>{
//         return(<>
//             <FooterMobile mode={"portrait"}/>
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

