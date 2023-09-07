import { Meta, StoryObj } from "@storybook/react";
import { QRGenerator } from "@/Restaurant/QRGenerator/QRGenerator";
import {Container, Button} from "@mui/material"

export default {
    title: "components/Restaurant/QRGenerator",
    component: QRGenerator ,
    argTypes: {},
    // parameters: {
    //     viewport: {viewports: widths100}
    // }
} as Meta<typeof QRGenerator >;

type Story = StoryObj<typeof QRGenerator>;

export const Common: Story = {
    render: () =>{

        const setData = () => {
            
        }

        return(<>
            <QRGenerator/>
        </>);
    } 
};

/**

const onAction = () => {

}

console.log(": ", )

 */

