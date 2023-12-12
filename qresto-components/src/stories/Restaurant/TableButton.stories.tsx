import { Meta, StoryObj } from "@storybook/react";
import { Tables } from "@/Restaurant/Tables/Tables";
import {widths100} from "@/Stories/viewports";
import TableButton from "@/Restaurant/Tables/TableButton";

export default {
    title: "components/Restaurant/Tables",
    component: TableButton,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }


} as Meta<typeof TableButton >;

type Story = StoryObj<typeof Tables>;

export const TableButtonMain: Story = {
    render: () =>{

        const myFunction = () => {

        }

        return(<>
            <TableButton/>
        </>);
    }
};