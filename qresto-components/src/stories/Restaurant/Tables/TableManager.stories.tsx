import { Meta, StoryObj } from "@storybook/react";
import { TableManager } from "@/Restaurant/Tables/TableManager";
import {widths100} from "@/Stories/viewports";
import { ordersDTO } from "@/Common/FakeData/OrdersData";

export default {
    title: "components/Restaurant/Tables/TableManager",
    component: TableManager ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof TableManager >;

type Story = StoryObj<typeof TableManager>;

export const TableManagerMain: Story = {
    render: () =>{

        return(<>
            <TableManager orders={ordersDTO}/>
        </>);
    } 
};

// export const Aspect1: Story = {
//     render: () =>{
//         return(<>
//             <TableManagerMobile mode={"portrait"}/>
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

