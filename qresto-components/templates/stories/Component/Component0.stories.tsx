import { Meta, StoryObj } from "@storybook/react";
import { Component } from "../../components/Common/Component/Component";

export default {
    title: "components/Component",
    component: Component ,
    argTypes: {}

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

