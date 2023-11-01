import { Meta, StoryObj } from "@storybook/react";
import {widths100} from "@/Stories/viewports";
import {Container} from "@mui/material"
import {useState} from 'react';
import {SideDishTable} from "@/Restaurant/SideDish/SideDishTable";

export default {
    title: "components/Restaurant/SideDish",
    component: SideDishTable ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100}
    }
} as Meta<typeof SideDishTable >;

type Story = StoryObj<typeof SideDishTable>;

export const Common: Story = {
    render: () =>{
        const [error, setError] = useState(false)

        return(<>
            <Container>
                <SideDishTable/>
            </Container>
        </>);
    }
};

