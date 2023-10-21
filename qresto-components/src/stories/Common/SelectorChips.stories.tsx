import { Meta, StoryObj } from "@storybook/react";
import { SelectorChips } from "@/Common/SelectorChips";
import {widths100} from "@/Stories/viewports";

export default {
    title: "components/Common/SelectorChips",
    component: SelectorChips ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof SelectorChips >;

type Story = StoryObj<typeof SelectorChips>;

export const SelectorChipsMain: Story = {
    render: () =>{

        const myFunction = () => {
            
        }

        const items = [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
            'Item 5',
        ]

        return(<>
            <SelectorChips items = {items}/>
        </>);
    } 
};

// export const Aspect1: Story = {
//     render: () =>{
//         return(<>
//             <SelectorChipsMobile mode={"portrait"}/>
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

