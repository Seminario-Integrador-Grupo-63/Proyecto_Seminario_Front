import { Meta, StoryObj } from "@storybook/react";
import {customViewports} from "../viewports";
import {widths100} from "../viewports";
import { Component } from "../../components/Common/Component/Component";
import { Controls } from "../../helpers/Controls/Controls";
import {Container, Button} from "@mui/material"

export default {
    title: "components/Component",
    component: Component ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100}
    }
} as Meta<typeof Component >;

type Story = StoryObj<typeof Component>;

export const Common: Story = {
    render: () =>{

        const setData = () => {
            
        }

        return(<>
            <Container>
                <Component/>
            </Container>

            <Controls>
                <Button 
                    variant='contained' 
                    onClick={setData}
                    style={{margin: '10px'}}>
                    Set data
                </Button>
            </Controls>
        </>);
    } 
};

// export const MobilePortrait: Story = {
//     render: () =>{
//         return(<>
//             <ComponentMobile mode={"portrait"}/>
//         </>);
//     } 
// };

// export const MobileLandscape: Story = {
//     render: () =>{
//         return(<>
//             <ComponentMobile mode={"landscape"}/>
//         </>);
//     } 
// };

/**

const onAction = () => {

}

console.log(": ", )

 */

