import { Meta, StoryObj } from "@storybook/react";
import { Users } from "@/Restaurant/Users/Users";
import {widths100} from "@/stories/viewports";

export default {
    title: "components/Restaurant/Users",
    component: Users ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }


} as Meta<typeof Users >;

type Story = StoryObj<typeof Users>;


export const UsersMain: Story = {
    render: () =>{

        const myFunction = () => {
            
        }

        return(<>
            <Users/>
        </>);
    } 
};

// export const Aspect1: Story = {
//     render: () =>{
//         return(<>
//             <UsersMobile mode={"portrait"}/>
//         </>);
//     } 
// };

// export const aspect2: Story = {
//     render: () =>{
//         return(<>
//             
//         </>);
//     } 
// };

/**
const onAction = () => {

}

console.log(": ", )

*/

