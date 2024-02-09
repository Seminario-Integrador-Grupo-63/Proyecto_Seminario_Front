import { Meta, StoryObj } from "@storybook/react";
import { TablesLegend } from "@/Restaurant/Tables/TablesLegend/TablesLegend";
import {widths100} from "@/Stories/viewports";
import {useState, useEffect} from 'react'
import {} from '@mui/material'

export default {
    title: "components/Restaurant/Tables/TablesLegend",
    component: TablesLegend ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof TablesLegend >;

type Story = StoryObj<typeof TablesLegend>;

export const TablesLegendMain: Story = {
    render: () =>{

        const myFunction = () => {
            
        }

        return(<>
            <TablesLegend/>
        </>);
    } 
};
