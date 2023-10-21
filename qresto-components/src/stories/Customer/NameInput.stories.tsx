import { Meta, StoryObj } from "@storybook/react";
import { NameInput } from '@/Customer/NameInput/NameInput';
import { NameInputMain } from "@/Customer/NameInput/NameInputMain";

export default {
    title: "components/Customer/NameInputMain",
    component: NameInputMain ,
    argTypes: {},
} as Meta<typeof NameInput >;

type Story = StoryObj<typeof NameInputMain >;



export const NameInputScreen: Story = {
    render: () =>{

        const onClick = (name) => {
            console.log(" ")
            console.log("onClick")
            console.log("name: ", name)
        }

        return(<>
            <NameInputMain onClick={onClick}/>
        </>);
    } 
};
export const NameInputEntry: Story = {
    render: () =>{

        return(<>
            <NameInput/>
        </>);
    } 
};

