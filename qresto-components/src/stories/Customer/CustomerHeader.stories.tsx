import { Meta, StoryObj } from "@storybook/react";
import { CustomerHeader } from "@/Customer/CustomerHeader/CustomerHeader";
import {widths100} from "@/Stories/viewports";

export default {
    title: "components/Customer/CustomerHeader",
    component: CustomerHeader ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }


} as Meta<typeof CustomerHeader >;