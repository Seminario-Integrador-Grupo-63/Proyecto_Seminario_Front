import { Meta, StoryObj } from "@storybook/react";
import { Selector } from "@/Common/Selector";
import {widths100} from "@/Stories/viewports";
import {Container} from '@mui/material'

export default {
    title: "components/Common/Selector",
    component: Selector ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof Selector >;

type Story = StoryObj<typeof Selector>;

export const SelectorMain: Story = {
    render: () =>{

        const myFunction = () => {
            
        }

        const items = [
            'Option 1',
            'Option 2',
            'Option 3',
            'Option 4',
        ]

        return(<>
            <Container
                sx={{
                    marginTop: '20px'
                }}>
                <Selector items={items}/>
            </Container>
        </>);
    } 
};

// export const Aspect1: Story = {
//     render: () =>{
//         return(<>
//             <SelectorMobile mode={"portrait"}/>
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

