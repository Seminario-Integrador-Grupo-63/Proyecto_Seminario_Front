import { Meta, StoryObj } from "@storybook/react";
import { ComponentMobile} from "../../components/Mobile/Component/ComponentMobile";
import {customViewports} from "../viewports";
import {widths100} from "../viewports";
import { ComponentDesktop } from "../../components/Desktop/Component/ComponentDesktop";
import '../../styles/globals.css'
 
export default {
    title: "components/Component",
    component: ComponentMobile ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100}
    }
} as Meta<typeof ComponentMobile >;

type Story = StoryObj<typeof ComponentMobile >;

export const MobilePortrait: Story = {
    render: () =>{
        return(<>
            <ComponentMobile mode={"portrait"}/>
        </>);
    } 
};

export const MobileLandscape: Story = {
    render: () =>{
        return(<>
            <ComponentMobile mode={"landscape"}/>
        </>);
    } 
};

export const Desktop: Story = {
    render: () =>{
        return(<>
            <ComponentDesktop/>
        </>);
    } 
};


