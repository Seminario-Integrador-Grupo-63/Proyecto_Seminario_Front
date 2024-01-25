import {UserForm} from "@/Restaurant/Users/UserForm";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";


export default {
    title: "components/Restaurant/UserForm",
    component: UserForm ,
    argTypes: {},
    // parameters: {
    //     viewport: {viewports: widths100}
    // }
} as Meta<typeof UserForm >;

type Story = StoryObj<typeof UserForm>;

const user = {user:"Johhny", email:" xD ", password:" ", role:"mozo"}
export const Common: Story = {
    render: () =>{


        const [] = useState(false);

        return(<>
            <UserForm open={true} user={user}/>
        </>);
    }
};
