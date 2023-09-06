import { Meta, StoryObj } from "@storybook/react";
import { NameInput } from '../components/NameInput/NameInput';

export default {
    title: "components/NameInput",
    component: NameInput ,
    argTypes: {},
} as Meta<typeof NameInput >;

type Story = StoryObj<typeof NameInput >;

export const Common: Story = {
    render: () =>{

        return(<>
            <NameInput/>
        </>);
    } 
};