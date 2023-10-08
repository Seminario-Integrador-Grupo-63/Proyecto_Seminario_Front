
import { Meta, StoryObj } from "@storybook/react";
import {widths100} from "@/Stories/viewports";
import { BillCheckout } from "@/Customer/BillCheckout/BillCheckout";

export default {
    title: "components/Customer/BillCheckout",
    component: BillCheckout ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof BillCheckout >;

type Story = StoryObj<typeof BillCheckout>;

export const BillCheckoutStory: Story = {
    render: () =>{

        const setData = () => {

        }

        return(<>
            <BillCheckout/>
        </>);
    }
};
