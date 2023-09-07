import { Meta, StoryObj } from "@storybook/react";
// import {customViewports} from "../../viewports";
// import {widths100} from "../../viewports";
import { QRGenerator } from "../../components/QRGenerator/QRGenerator";
// import { Controls } from "../../helpers/Controls/Controls";
import {Container, Button} from "@mui/material"

export default {
    title: "components/QRGenerator",
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
            {/* <Container> */}
                <QRGenerator/>
            {/* </Container> */}

            {/* <Controls>
                <Button 
                    variant='contained' 
                    onClick={setData}
                    style={{margin: '10px'}}>
                    Set data
                </Button>
            </Controls> */}
        </>);
    } 
};

/**

const onAction = () => {

}

console.log(": ", )

 */

