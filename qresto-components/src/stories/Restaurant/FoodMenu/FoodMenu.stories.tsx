import { Meta, StoryObj } from "@storybook/react";
import { FoodMenu } from "@/Restaurant/FoodMenu/FoodMenu";
import {widths100} from "@/Stories/viewports";

export default {
    title: "components/Restaurant/FoodMenu/FoodMenu",
    component: FoodMenu ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }


} as Meta<typeof FoodMenu >;

type Story = StoryObj<typeof FoodMenu>;

export const FoodMenuMain: Story = {
    render: () =>{

        const myFunction = () => {
            
        }

        return(<>
            <FoodMenu/>
        </>);
    } 
};

// export const Aspect1: Story = {
//     render: () =>{
//         return(<>
//             <FoodMenuMobile mode={"portrait"}/>
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

