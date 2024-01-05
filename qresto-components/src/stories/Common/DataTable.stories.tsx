import { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "@/Common/DataTable";
import {widths100} from "@/Stories/viewports";

export default {
    title: "components/Common/DataTable",
    component: DataTable ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof DataTable >;

type Story = StoryObj<typeof DataTable>;

export const DataTableMain: Story = {
    render: () =>{

        return(<>
            <DataTable/>
        </>);
    } 
};

// export const Aspect1: Story = {
//     render: () =>{
//         return(<>
//             <DataTableMobile mode={"portrait"}/>
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

