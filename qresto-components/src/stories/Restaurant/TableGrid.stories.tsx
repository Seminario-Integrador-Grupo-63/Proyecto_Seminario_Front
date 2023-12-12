import { Meta, StoryObj } from "@storybook/react";
import { Tables } from "@/Restaurant/Tables/Tables";
import {widths100} from "@/Stories/viewports";
import {TableSchema} from "@/Restaurant/Tables/TableSchema";

export default {
    title: "components/Restaurant/Tables",
    component: TableSchema ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }


} as Meta<typeof Tables >;

type Story = StoryObj<typeof Tables>;

export const TableList: Story = {
    render: () =>{

        const myFunction = () => {

        }

        return(<>
            <TableSchema/>
        </>);
    }
};