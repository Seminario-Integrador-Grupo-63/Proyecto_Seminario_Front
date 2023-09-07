import { Meta, StoryObj } from "@storybook/react";
// import {customViewports} from "../viewports";
// import {widths100} from "../viewports";
// import { Component } from "../../components/Common/Component/Component";

import { MenuDishes} from ''
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
            <Component/>
        </>);
    } 
};

/**

const onAction = () => {

}

console.log(": ", )

 */

