import { Meta, StoryObj } from "@storybook/react";
import { Tables } from "@/Restaurant/Tables/Tables";
import {widths100} from "@/Stories/viewports";
import {tableSchema} from "@/Common/FakeData/Tables";

export default {
    title: "components/Restaurant/Tables",
    component: Tables ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }


} as Meta<typeof Tables >;

type Story = StoryObj<typeof Tables>;

export const TablesMain: Story = {
    render: () =>{

        const myFunction = () => {
            
        }

        return(<>
            <Tables sectors={tableSchema}/>
        </>);
    } 
};

// export const Aspect1: Story = {
//     render: () =>{
//         return(<>
//             <TablesMobile mode={"portrait"}/>
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

