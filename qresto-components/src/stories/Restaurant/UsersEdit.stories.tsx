import { Meta, StoryObj } from "@storybook/react";
import { UsersEdit } from "@/Restaurant/Users/UsersEdit";
import {widths100} from "@/Stories/viewports";

export default {
    title: "components/Restaurant/Users",
    component: UsersEdit ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }


} as Meta<typeof UsersEdit >;

type Story = StoryObj<typeof UsersEdit>;

export const UsersEditComponent: Story = {
    render: () =>{

        const myFunction = () => {

        }

        return(<>
            <UsersEdit/>
        </>);
    }
};