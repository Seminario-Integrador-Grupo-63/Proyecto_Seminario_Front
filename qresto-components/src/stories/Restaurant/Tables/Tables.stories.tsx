import { Meta, StoryObj } from "@storybook/react";
import {widths100} from "@/Stories/viewports";
import {sectors} from '@/Common/FakeData/Tables'
import { TableSchema } from "@/components/Restaurant/Tables/TableSchema";

export default {
    title: "components/Restaurant/Tables/TableSchema",
    component: TableSchema ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof TableSchema >;

type Story = StoryObj<typeof TableSchema>;

export const TablesMain: Story = {
    render: () =>{
        return(<>
            <TableSchema sectors={sectors}/>
        </>)
    } 
}

