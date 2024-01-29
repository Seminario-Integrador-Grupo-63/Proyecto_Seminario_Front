import { Meta, StoryObj } from "@storybook/react";
import { Selector } from "@/Common/Selector";
import {widths100} from "@/Stories/viewports";
import {
    Container,
    Button
} from '@mui/material'
import {useState} from 'react';

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
            'Hola',
            'Nico',
            'Como',
            'Estas',
            '?',
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

export const SelectorMainError: Story = {
    render: () =>{
        const [items, setItems] = useState([])

        const removeItems = () => {
            setItems([])
        }

        const restoreItems = () => {
            setItems([
                'Hola',
                'Nico',
                'Como',
                'Estas',
                '?',
            ])
        }

        return(<>
            <Container
                sx={{
                    marginTop: '20px'
                }}>
                <Button onClick={removeItems}>Remove items</Button>
                <Button onClick={restoreItems}>Restore items</Button>
                <Selector items={items}/>
            </Container>
        </>)
    } 
}

export const SelectorMainChangeItems: Story = {
    render: () =>{

        const items = [
            'Hola',
            'Nico',
            'Como',
            'Estas',
            '?',
        ]

        return(<>
            <Container
                sx={{
                    marginTop: '20px'
                }}>
                
                <Selector 
                    items={items}
                    error={true}
                    helperText="This is a helper text"/>
            </Container>
        </>);
    } 
}

