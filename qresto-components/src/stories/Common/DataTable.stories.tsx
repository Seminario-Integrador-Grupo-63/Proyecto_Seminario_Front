import { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "@/Common/DataTable";
import {widths100} from "@/Stories/viewports";
import { dataRows } from "@/Common/FakeData/DataTableData";
import { dataHeaders } from "@/Common/FakeData/DataTableData";

export default {
    title: "components/Common/DataTable",
    component: DataTable ,
    argTypes: {
        // actionsType: {
        //     control: {
        //         type: 'select',
        //         options: ['edit-delete', 'show']
        //     }
        // }
    },
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof DataTable >;

type Story = StoryObj<typeof DataTable>;

export const DataTableMain: Story = {
    // parameters: {
    //     controls: {
    //         actionsType: 'edit-delete'
    //     }
    // },
    // args: {
    //     actionsType: 'edit-delete'
    // },
    render: (args) =>{
        const onEdit = (event) => {
            console.log(' ')
            console.log('DataTable onEdit()')
            console.log('event: ', event)
        }

        const onDelete = (event) => {
            console.log(' ')
            console.log('DataTable onDelete()')
            console.log('event: ', event)
        }

        const onShow = (event) => {
            console.log(' ')
            console.log('DataTable onShow()')
            console.log('event: ', event)
        }

        return(<>
            <DataTable
                headers={dataHeaders}
                rows={dataRows}
                actionsType='show'
                onEdit={onEdit}
                onDelete={onDelete}
                onShow={onShow}/>
        </>);
    } 
}








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

